import axios from 'axios';
import Utils from "../utils/index";
import EventDispatcher from "./EventDispatcher";
import MiddleWare from "./MiddleWare";


const  MultNet = (nets, limit=6)=> {
    async function getAsyncTuple(promise){
        try{
            let result = await promise;
            return {status: true, data: result}
        }catch(err){
            return {status: false, data: err}
        }
    }
    return (async ()=>{
        try{
            const Nets = [].concat(nets);
            let response = [];
            const total = Math.ceil(Nets.length/ limit);
            for(let index = 0; index<total;  index++ ){
                let nextNets =  Nets.slice(index*limit, (index+1)*limit)
                const result = await Promise.all(
                    nextNets.map(ItemSync=>{
                        ItemSync = typeof ItemSync === 'function' ?  ItemSync : value=>value;
                        return getAsyncTuple(ItemSync()) 
                    }
                ))
                response.push(result);
            }
            let flag = true;
            response =  Utils.getFlattenArrs(response).map(item=>{
                if(!item.status) flag = item.status
                return item.data
            });
            return Promise[ flag ? 'resolve': 'reject']({data:response})
        }catch(err){
            console.error(err);
            return Promise.reject(err)
        }
    })()
} 
class Htpp {
    constructor(apiConfig, hostConfig){
        this.ToolInit(this, apiConfig, hostConfig);
        this.EvtInit(this, apiConfig, hostConfig);
    }
    EvtInit(self, apiConfig, hostConfig={}){
        const second = 1000;
        const Global = {
            'querys':       {},
            'timeOut':      20,
            'express':      50,
            'netQueue':     [],
            'costTimes':    [],
            'headers':      {'Content-Type': 'application/json'},
        };
        const ListenKeyMap = {
            error: 'error',
            sucess: 'sucess',
        } ;
        const EvtInstance =  new EventDispatcher();
        const Domain = {};
        const EventMap = {
            set: function(cacheFiled, type, obj){
                if(obj){ for(let key in obj) Utils.setKeyData(cacheFiled, Utils.getFlattenArrs([type, key]), obj[key]); }
            },
            get: function(cacheFiled, type, key){
                if(key) return Utils.getKeyData(cacheFiled, Utils.getFlattenArrs([type, key]), undefined)
                else return Utils.getKeyData(cacheFiled, type, undefined);
            },
            del: function(cacheFiled, type, key){
                if(key) [].concat(key).forEach(function(itemKey){ Utils.removeKeyData(cacheFiled, Utils.getFlattenArrs([type, itemKey])) })
                else Utils.setKeyData(cacheFiled, type, {});
            }
        };
        const InstanceMiddle = new MiddleWare();
        this.use = (...args)=>{
            Utils.getFlattenArrs(args).forEach(function(fnItem){
                if(typeof fnItem != 'function')  throw new TypeError('middleware must be a function!');
                InstanceMiddle.use(fnItem)
            });
            return this
        };
        const HanddleMiddle = (ctx, next)=>{
            return InstanceMiddle.handle(ctx, next)
        };
        const PrivateApi = (function(){
            return function(privateCache, privateParam = {}){
                const eventkeyMap = Object.assign({}, ListenKeyMap)
                const privateState = privateCache || {};
                this.setHost = function(obj){ EventMap.set( privateState, 'host', obj) };
                this.getHost = function(obj){ EventMap.set( privateState, 'host', obj) };
                this.setHeaders = function(obj){ EventMap.set( privateState, 'headers', obj) };
                this.getHeaders = function(key){ return EventMap.get( privateState, 'headers', key) };
                this.delHeaders = function(key){ EventMap.del( privateState, 'headers', key) };
                this.setUrlParams = function(obj){ EventMap.set( privateState, 'urlParams', obj) };
                this.getUrlParams = function(key){ return EventMap.get( privateState, 'urlParams', key) };
                this.delUrlParams = function(key){ EventMap.del( privateState, 'urlParams', key) };
                this.setQuerys  = function(obj){ EventMap.set( privateState, 'querys' , obj) };
                this.getQuerys  = function(key){ return EventMap.get( privateState, 'querys' , key) };
                this.delQuerys  = function(key){ EventMap.del( privateState, 'querys' , key) };
                this.getEvtParams  = function(){ return privateState};
                this.addEventListener = function(key, fun){
                    let eventkey = [].concat(privateParam.typeKey || '', key).join('&');
                    if(!eventkeyMap[key]) return
                    EvtInstance.addEventListener(eventkey, fun);
                };
                this.dispatchEvent = function(key, data, param){
                    let eventkey = [].concat(privateParam.typeKey || '', key).join('&');
                    if(!eventkeyMap[key]) return
                    EvtInstance.dispatchEvent(eventkey, data, param);
                };
                this.EventList = function(key){
                    let eventkey = [].concat(privateParam.typeKey || '', key).join('&');
                    if(!eventkeyMap[key]) return []
                    return EvtInstance.EventList(eventkey);
                };
            }
        })()
        /* 设置ajax全局对象方法*/
            //全局请求头
        PrivateApi.call(this, Global);

        /* 数据缓存方法*/
        const CacheMap = (function(){
            const cache  =  {};
            //存储数据
            const setCache = function(scopePath, paramKey, data){
                if(Utils.getKeyData(cache, [scopePath, paramKey], '')) return
                if(scopePath && paramKey)  Utils.setKeyData(cache, [scopePath, paramKey], { data: data, updateTime: Date.now()})
            };
            //删除数据
            const removeCache = function(scopePath, paramKey){
                let path = [];
                scopePath && path.push(scopePath);
                paramKey &&  path.push(paramKey);
                if(path.length) Utils.removeKeyData(cache, path)
            };
            //清除数据
            const clearCacheScope = function(scopePath){
                if(scopePath) Utils.removeKeyData(cache, scopePath)
            };
            //读取数据
            const getCache = function(scopePath, paramKey, expressTime){
                let data;
                let time = Date.now();
                if(scopePath && paramKey) {
                    let cacheData =  Utils.getKeyData(cache, [scopePath, paramKey], {"updateTime": 0}) ;
                    data = cacheData.data;
                    if( cacheData.updateTime && (time - cacheData.updateTime) > expressTime){
                        removeCache(scopePath, paramKey);
                        data = null
                    }
                }
                return data;
            };
            return { setCache, removeCache, clearCacheScope, getCache }
        })();
        const PackUrl = function(option){
            let urlQuery = Utils.getUrlByQuery(option.data);
            return option.url.concat(urlQuery? `?${urlQuery}`:'')
        };
        const parseOptions = function(option, method, requestQuery){
            const {annexParam={}} = requestQuery;
            switch(method){
                case 'get':
                    {
                        return Object.assign(option, {
                            method: 'get',
                            url:    PackUrl(option)
                        });
                    }
                case 'down-get':
                    {
                        return Object.assign(option, {
                            method: 'get',
                            responseType:'blob',
                            url:    PackUrl(option)
                        });
                    }
                case 'down-post':
                    {
                        return Object.assign(option, {
                            method:         'post',
                            responseType:   'blob',
                        });
                    }
                case 'down-url':
                    {
                        window.open(''.concat( option.baseURL, PackUrl(option)));
                        return null;
                    }
                case 'form':
                    // annexParam:  { fileKey: 'FileEntity', indexKey: 'ChunkIndex', countKey: 'ChunkCount', progress: true | function }
                    {
                        const { SliceSize = 1024*1024*4 , AsyncLimit = 4, fileKey='', indexKey, countKey, progress } = annexParam;
                        const optionData = option.data;
                        let requestData = [];
                        let totalSize = 0;
                        if(fileKey){
                            const file =  Utils.getKeyData(optionData, fileKey, {});
                            totalSize = file.size;
                            let chunkNum = Math.ceil(totalSize/SliceSize);
                            for(let i = 0; i < chunkNum; i++ ){
                                const  formData =  new FormData();
                                const  chunkData = {...optionData};
                                indexKey && Utils.setKeyData(chunkData, indexKey, i);
                                countKey && Utils.setKeyData(chunkData, countKey, chunkNum);
                                chunkData[fileKey]  =  file.slice(i * SliceSize, (i+1)*SliceSize);
                                for(let key in chunkData) formData.append(key, chunkData[key]);
                                requestData.push(formData);
                            };
                        }else {
                            const  formData = new FormData();
                            for(let key in optionData) formData.append(key, optionData[key]);
                            requestData = formData
                        }
                        const newOption = Object.assign(option, {
                            headers:    Object.assign(option.headers, {"Content-Type": 'multipart/form-data'}),
                            onUploadProgress: (progressEvent)=>{
                                let loaded = (progressEvent.loaded/(totalSize || progressEvent.total)  * 100 | 0) + '%';
                                const param = {
                                    progressEvent,
                                    loaded
                                }
                                switch(Utils.getKeyData(progress)){
                                    case 'boolean':
                                    break;
                                    case 'function':
                                        progress(param)
                                    break;
                                }
                            },
                            method :    'post',
                            data:       requestData
                        })
                        delete newOption.timeout
                        return newOption
                    }
                default:
                return Object.assign( option, {method})
            }
        };
        this.Evt_getEnvAction = EvtKey=>{
            if(EvtKey) return Domain[EvtKey]
            return Domain
        };
        const Tool_isLoaded = ()=>{
            let isLoaded = true;
            for(let item of Global.netQueue){
                if(item.status == 'pending') {
                    isLoaded = false;
                    break;
                }
            };
            if(isLoaded){
                Global.netQueue = [];
                Global.costTimes[1] = Date.now();
            }
            return isLoaded
        };
        const httpMap = (function(){
            let http = axios;
            const packResponse = function(data, ctx){
                return {
                    data,
                    context:    ctx,
                    query:      ctx.request.data,
                    request:    ctx.request,
                    source:     ctx.response,
                    userQuery:  ctx.archived.requestQuery,   
                    status:     Utils.getKeyData(ctx.response, 'request.status', 0),
                    action:     ctx.archived.domainAction
                }
            };
            /**
             * 数据打包可通过方式
             * 1.env 下的config配置 config.data
             * 2.通过私有域下的中间件
             */
            const successCall = function(ctx, callback){
                const {urlConfig, hostParam, domainAction, requestQuery} = ctx.archived
                const packData = Utils.getKeyData(hostParam, 'config.data', data=>data)(ctx.response.data);
                if(!Utils.getKeyData(ctx,'response.request', false)) Utils.setKeyData(ctx, 'response.request', {status: 200});
                const reponseData = {status: true, source: packResponse(packData, ctx)};
                switch(true){
                    case true:
                        //对成功监听
                        self.dispatchEvent(ListenKeyMap.sucess, reponseData);
                        domainAction.dispatchEvent(ListenKeyMap.sucess, reponseData);
                        reponseData.status && callback && callback(reponseData.source);
                    break;
                };
                if(urlConfig.useCache && !ctx.isCache) CacheMap.setCache(urlConfig.url, Utils.hashCode(JSON.stringify(Object.assign({}, ctx.request.data, ctx.urlParams, {url: ctx.request.url}))), {data: packData, status: 200, from: 'cache', request:{status:200}});
                if(urlConfig.cleanCache) [].concat(urlConfig.cleanCache).forEach(function(pathUrl){ CacheMap.clearCacheScope(pathUrl) })
            };
            const errorCall = function(ctx, failback){
                const {urlConfig, hostParam, domainAction, requestQuery} = ctx.archived
                if(!Utils.getKeyData(ctx,'response.request', false)) Utils.setKeyData(ctx, 'response.request', {status: 200});
                const userHandleError = Utils.getKeyData(requestQuery.customCode, ctx.response.request.status, null);
                const packData = Utils.getKeyData(hostParam, 'config.data', function(data){ return data})(ctx.response);
                const reponseData = {status: false, source: packResponse(packData, ctx)};

                switch(true){
                    case !!userHandleError:
                        userHandleError(reponseData.source);
                    break;
                    case true:
                        //对失败监听
                        self.dispatchEvent(ListenKeyMap.error, reponseData);
                        domainAction.dispatchEvent(ListenKeyMap.error, reponseData);
                        !reponseData.status && failback && failback(reponseData.source);
                    break;
                };
            };
            const createHttp = (http, ctx)=> {
                return new Promise((resolve, reject)=>{
                    const {urlConfig, hostParam} = ctx.archived;
                    const expressTime =  (Utils.getKeyData( hostParam, 'envInfo.cacheExpires', '') || Utils.getKeyData( urlConfig, 'express', '') || Global.express) *second;
                    let cacheData = CacheMap.getCache(urlConfig.url, Utils.hashCode(JSON.stringify(Object.assign({}, ctx.request.data, ctx.urlParams, {url: ctx.request.url}))), expressTime);
                    switch(true){
                        case urlConfig.useCache && !!cacheData:
                            Object.assign(ctx, { response:cacheData, status: 'success', isCache: true})
                            return successCall(ctx,  resolve);
                        default:
                            if(!Global.netQueue.length) Global.costTimes[0] = Date.now();
                            Global.netQueue.push(ctx)
                            HanddleMiddle(ctx, async function(ctx, next){
                                await http(ctx.request).then((res)=>{
                                    Object.assign(ctx, { response: res, status: 'success', responeTime:Date.now() })
                                    successCall(ctx, resolve)
                                }).catch((err)=>{
                                    Object.assign(ctx, { response: err, status: 'error', responeTime:Date.now() })
                                    errorCall(ctx,  reject)
                                }).finally(function(){
                                    const isLoaded = Tool_isLoaded()
                                    ctx.allLoaded = isLoaded;
                                    ctx.costTime = ctx.responeTime - ctx.requestTime;
                                    if(isLoaded) ctx.allCostTime = Global.costTimes[1]- Global.costTimes[0];
                                    next()
                                });
                            })
                        break;
                    }
                })
            };
            /*
                {
                    customCode:     object,     //业务处理http请求错误
                    headersParam:   object,     //headers参数
                    annexParam:     object      //附加属性不会用于请求参数
                    query:          object ({vesion: '',pa:'web'}),  //定义接口query参数
                }
            */
            const sendRequest = (urlConfig, hostParam={}, domainAction={}, requestQuery={})=>{
                const {urlParams={}, customCode, headersParam={}, annexParam={}, query={}, ...otherParam} = requestQuery;
                const {method, url, timeout} = urlConfig;
                const privateState =  domainAction.getEvtParams();
                const $urlQuery =  Object.assign(
                    {},
                    Global.querys,
                    urlConfig.querys,
                    Utils.getKeyData(privateState, 'querys', {}),
                    otherParam,
                    query
                );
                const $header = Object.assign(
                    {},
                    Global.headers,
                    urlConfig.headers,
                    Utils.getKeyData(privateState, 'headers', {}),
                    headersParam
                );
                const $urlParams = Object.assign(
                    {}, 
                    Utils.getKeyData(privateState, 'urlParams', {}), 
                    urlParams
                );
                const maxTime = timeout || Utils.getKeyData(hostParam, 'envInfo.timeOut', 0) || Utils.getKeyData(Global, 'timeOut', 0);
                const httpQuery = parseOptions({
                    responsetype:   'json',
                    headers:        $header,
                    timeout:        maxTime * second,
                    baseURL:        Utils.getKeyData(privateState, 'host',  Utils.getKeyData(hostParam, 'baseUrl', '')),
                    url:            Utils.getStringFormat(''.concat(url || annexParam.url), $urlParams).replace(/​/g, ''),
                    data:           $urlQuery 
                }, (method || annexParam.method || 'get'), requestQuery);

                const archived  = {urlConfig, hostParam, domainAction, requestQuery};
                const ctx = {
                    archived,
                    urlParams,
                    domainAction,
                    response:           {},
                    allLoaded:          false,
                    requestTime:        Date.now(),
                    domainState:        privateState,
                    request:            httpQuery,
                    status:             'pending',
                };
                return createHttp(http, ctx)
            };
            return {sendRequest}
        })();

        (function(cache, apiConfig, hostConfig){
            const PackTypeData = (config, data)=>{
                let  nodeCfg = { isValid: false, source: data, baseUrl: '', typeKey: 'global'};
                for(let key in  config){
                    const curType = config[key];
                    let flag = Utils.getKeyData(curType, 'validate', function(){ return false })(data)
                    if(flag){
                        const  {baseUrl, envInfo, validate, ...other} = curType;
                        nodeCfg = {
                            typeKey:    key,
                            isValid:    true,
                            source:     data,
                            config:     curType,
                            baseUrl:    Utils.getKeyData(curType, 'baseUrl', function(){ return '' })(data),
                            envInfo:    Utils.getKeyData(curType, 'envInfo',  function(){ return {} })(data),
                        }
                        Utils.assignValue(other, nodeCfg, data);
                        break;
                    }
                };
                return nodeCfg
            }
            const hostCfg = Object.assign({}, hostConfig);
            let LoopConfig = (cacheApi, itemConfig, level, keyPath)=>{
                if(Utils.getType(itemConfig)!='object') return
                Object.keys(itemConfig).forEach((key)=>{
                    let curItem = itemConfig[key];
                    keyPath = keyPath.concat(key);
                    if(curItem && curItem.url){
                        let packCurItem = Object.assign({keyPath}, curItem);
                        let hostData  = PackTypeData(hostCfg, packCurItem);
                        if(!Domain[hostData.typeKey]) Utils.setKeyData(Domain, hostData.typeKey, new PrivateApi({}, hostData));
                        cacheApi[key] = httpMap.sendRequest.bind(self, packCurItem, hostData, Utils.getKeyData(Domain, hostData.typeKey, {}));
                        cacheApi[key].url =  ''.concat(hostData.baseUrl, hostData.source.url)
                    } else {
                        Utils.setKeyData(cacheApi, key, {});
                        LoopConfig(cacheApi[key], curItem, level+1,  keyPath);
                    }
                })
            };
            LoopConfig(cache, apiConfig, 0, [])
        })(self.api = {}, apiConfig, hostConfig)
    }
    ToolInit(self, apiConfig, hostConfig={}){

    }
}

export default Htpp
export {MultNet}
