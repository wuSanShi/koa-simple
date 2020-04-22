const encodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const decodeChars = new Array( -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1 );
const Utils = {
    getType(source) {
        return Object.prototype.toString.call(source).slice(8,-1).toLowerCase();
    },
    getKeyData (source={}, keys='', defValue, unit='.'){
        let tempResult = [].concat(source || {}).map(function(sourceItem){
        switch(Utils.getType(keys)){
            case 'object':
                let tempInfo = {}
                for(let i in keys){
                    tempInfo[i] = Utils.getKeyData(sourceItem, keys[i], defValue, unit)
                }
                return tempInfo
            case 'array':
                return Utils.getKeyData(sourceItem, keys.join(unit), defValue, unit);
            case 'string':
                let tempSource = sourceItem;
                let tempKeys = keys.split(unit);
                try{
                    tempKeys.forEach(function(keyItem, index){
                        if(keyItem=='[]'){ 
                            let packKey =  tempKeys.slice(index+1).join(unit);
                            tempSource = !packKey ? tempSource: Utils.getKeyData(tempSource, packKey, defValue, unit);
                            throw new Error('isWrong'); 
                        }
                        tempSource = tempSource[keyItem];
                        switch(true){
                            case (index+1) < tempKeys.length && ["number","string"].includes(Utils.getType(tempSource)):
                            case tempSource== undefined:
                            tempSource = defValue;
                            throw new Error('isWrong');
                        }
                    })
                }catch(e){}
                return tempSource
            }
        })
        return Utils.getType(source)=='array'? tempResult : tempResult.shift()
    },
    setKeyData(source, keys=[], value, isMult=false, unit = '.'){
        let temp = source;
        if(!source) return;
        switch(Utils.getType(keys)){
            case 'array':
                keys = keys.join(unit).split(unit);
            break;
            case 'string':
            case 'number':
                keys = ''.concat(keys).split(unit);
            break;
        }
        [].concat(keys).forEach(function(key, index){
            if(['','null','NaN','undefined'].includes(''.concat(key))) return;
            if(index+1 == keys.length) {
                if(!isMult) return temp[key] = value
                temp[key] = [].concat(temp[key] || [], value)
            };
            if(!temp[key]) temp[key] = {}
            temp = temp[key]
        });
        return temp
    },
    removeKeyData(source, keys, unit = '.'){
        if(keys==undefined || keys == false) return;
        switch(Utils.getType(keys)){
            case 'array':
                keys = keys.join(unit);
            break;
        }
        let tempKeys = keys.split(unit);
        let popKey = tempKeys.pop();
        let temp = Utils.getKeyData(source, tempKeys.join('.'), source);
        switch (Utils.getType(temp)) {
            case 'arry':
                if (/^[0-9]+$/.test(popKey)) temp.splice(popKey, 1)
                else temp = temp.filter(item => item != popKey)
            break;
            case 'object':  
                delete temp[popKey]
            default:
            break;
        }
        return source
    },
    getUnique(arr, keys){
        let temps = [], tempMap = {};
        [].concat(arr || []).forEach(function(item, index){
            let tempKey = undefined;
            switch(Utils.getType(item)){
                case 'string':
                case 'number':
                    tempKey = item
                break;
                case 'object':
                    tempKey = Utils.getKeyData(item, keys)
                break;
            }
            if(tempKey===undefined) return ;
            if(!tempMap[tempKey]){ temps.push(item); tempMap[tempKey] = true}
        })
        return temps
    },
    getPackClass(arr, config){
        if(!config) return this;
        let tempMap = {classMap: {}, classDatas: {}};
        let Tool_PackData = function(data, config){
            var nodeParam = {isValid: false}
            for(let i in config){
                if(config[i].validate(data)) {
                    nodeParam.isValid = true;
                    nodeParam.data = {
                        key:    i,
                        source: data,
                        config: config[i],
                        id:     config[i].id && ''.concat(config[i].id(data)).replace(/\./g, '#'),
                        title:  config[i].title && config[i].title(data),
                    };
                    const {id, title, validate, childs, ...other} = config[i];
                    Utils.assignValue(other, nodeParam.data, data)
                    if(config[i].childs) nodeParam.data.childs = [].concat(config[i].childs(data) || []);
                    break;
                };
            }
            return nodeParam
        };
        let tempCycle = function(arr, obj, config, parent){
            const childDatas = [];
             [].concat(arr).forEach(function(item, index){
                let itemNode = Tool_PackData(item, config);
                if(!itemNode.isValid) return
                if(parent && parent.id) itemNode.data.tempParentId = parent.id
                if(parent){
                    itemNode.data.parentId      = parent.id;
                    itemNode.data.parentKey     = parent.key;
                    itemNode.data.parent        = parent
                };
                Utils.setKeyData(obj.classMap, [itemNode.data.key, itemNode.data.id], itemNode.data);
                Utils.setKeyData(obj.classMap, ['all', itemNode.data.id], itemNode.data);
                Utils.setKeyData(obj.classDatas, itemNode.data.key, item, true);
                Utils.setKeyData(obj.classDatas, 'all', item, true);
                if(itemNode.data.childs) itemNode.data.childs = tempCycle(itemNode.data.childs, obj, config, itemNode.data);
                childDatas.push( itemNode.data)
            })
            return childDatas
        };
        tempCycle(arr, tempMap, config);
        return tempMap
    },
    getUrlByQuery(obj){
        let query = [];
        for(let key in obj){
            if(obj[key] === undefined || !''.concat(obj[key]).length) continue
            [].concat(obj[key]).forEach(function(item){
                query.push(''.concat(key,'=',encodeURI(item))) 
            })
        }
        return query.join('&')
    },
    getQueryByUrl(searchStr){
        let tempUrl = decodeURIComponent(searchStr || window.location.hash || window.location.search);
        let reg =  /[\?&]([^=]+)[=\s]+([^&]+);?/g;
        let tempMap = {};
        while (reg.exec(tempUrl)) tempMap[''.concat(RegExp.$1).trim()] = ''.concat(RegExp.$2).trim(); 
        return tempMap;
    },
    getPackTree(arr, config){
        let temps = [], datas = [].concat(arr), tempMap = {}, tempTypeMap = {};
        let Tool_PackData = function(data, config){
            let nodeParam = {isValid:false}
            for(let i in config){
                if(config[i].validate(data)) {
                    nodeParam.isValid = true;
                    nodeParam.tag = config[i].tag;
                    nodeParam.data = {
                        key:    i,
                        source: data,
                        config: config[i],
                        id:     config[i].id(data),
                    };
                    const {id, tag, validate, parentId, childId, ...other} = config[i];
                    Utils.assignValue(other, nodeParam.data, data)
                    if(config[i].parentId) Utils.setKeyData(nodeParam.data, 'parentId', config[i].parentId(data));
                    if(config[i].childId)  Utils.setKeyData(nodeParam.data, 'childId',  config[i].childId(data));
                    break;
                };
            }
            return nodeParam
        };
        let toolData =  function(data, map, typeMap){
            Utils.setKeyData(map, data.key, data.source, true);
            Utils.setKeyData(typeMap, [data.key,data.id], data.source);
            Utils.setKeyData(typeMap, ['all', data.id], data);
        };
        let tempCycle = function(list, data, config){
            list.forEach(function(item, index){
                let itemNode = Tool_PackData(item, config);
                if(!itemNode.isValid) return ;
                switch(true){
                    case itemNode.data.parentId == data.id:
                    case Utils.getType(data.childId)=='array' && "^".concat(data.childId.join("^"), "^").includes("^"+ itemNode.data.id +"^"):
                    case Utils.getType(data.childId)=='string' && itemNode.data.id == data.childId :
                        Utils.setKeyData(data, 'source.packChilds', itemNode.data.source, true);
                    break;
                }
                switch(true){
                    case itemNode.data.id == data.parentId:
                    case Utils.getType(itemNode.data.childId)=='array' && "^".concat(itemNode.data.childId.join("^"), "^").includes("^"+ data.id +"^"):
                    case Utils.getType(itemNode.data.childId)=='string' && itemNode.data.childId == data.id:
                        data.parentKey = itemNode.data.key;
                        data.parentId = itemNode.data.id;
                        Utils.setKeyData(itemNode.data, 'source.packChilds', data.source, true);
                    break;
                }
            })
            return data
        };
        while(!!datas.length){
            let item = Tool_PackData(datas[0], config);
            datas.splice(0,1)
            if(!item.isValid) continue;
            toolData(item.data, tempMap, tempTypeMap);
            let packData = tempCycle(datas, item.data, config);
            if(item.data.parentId==undefined || item.tag=='root') temps.push(packData.source)
        };
        return {
            source:     temps,
            classDatas: tempMap,
            classMap:   tempTypeMap,
        }
    },
    //1. Utils.getMapByConfig([], {key:'key.loadAllGroup.0.res.packData', isMult: true, keyFormat: function(data, key){return '{0}_{1}'.format(data.device_auto_id, data.channel_id) },dataFormat: function (data, key) { return {} } } })
    //2.Utils.getMapByConfig([],[{key:'store', isMult: true },{ key:'store', isMult: true }])
    getMapByConfig(arr, config, keyFormat, dataFormat, isMult){
        let keyList = [].concat(config || []);
        let keysMap = {};
        let parseData =  function(data, map, itemKey, keyFormat, Dataformat, isMult){
            let tempData = data;
            if(!map[itemKey]) map[itemKey] = {}
            let tempMap = map[itemKey];
            let tempKey = keyFormat ? keyFormat(data, itemKey):Utils.getKeyData(data, itemKey,'');
            [].concat(tempKey).map(function(itemKey){
                if(Dataformat) tempData = Dataformat(data);
                Utils.setKeyData(tempMap, itemKey, tempData, isMult);
            })
        };
        [].concat(arr || []).forEach(function(item, index){
            keyList.forEach(function(keyItem){
                switch (Utils.getType(keyItem)) {
                    case 'string':
                    case 'number':
                    return parseData(item, keysMap, keyItem, keyFormat, dataFormat, isMult)
                    case 'object':
                    return parseData(item, keysMap, keyItem.key, keyItem.keyFormat || keyFormat, keyItem.dataFormat || dataFormat, keyItem.isMult || isMult)
                }
            })
        })
        return keysMap
    },
    getShuffle(arr){
        let i = arr.length;
        while (i) {
            let j = Math.floor(Math.random() * i--);
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        return arr;
    },
    getFlattenArrs(arr){
        return arr.reduce((plane, toBeFlatten) => (plane.concat(Array.isArray(toBeFlatten) ? Utils.getFlattenArrs(toBeFlatten) : toBeFlatten)), []);
    },
    assignValue(config, cacheDate={}, sourceData){
        for (let key in  config){
            switch(Utils.getType( config[key] )){
                case 'function':
                    cacheDate[key] = config[key](sourceData)
                break;
                default:
                    cacheDate[key] = config[key]
                break;
            }
        };
    },
    toFixed(num, fixedNumber){
        switch (true) {
            case num == undefined:
            case num == false:
            case num == Infinity:
            case isNaN(value):
                num = 0;
            break;
        }
        return Number(num).toFixed(fixedNumber);
    },
    getStringFormat(str, obj){
        if(str && str.length>0){
            if(Utils.getType(obj) === "object"){
                for(let key in obj){
                    let reg = new RegExp("({"+''.concat(key).replace(/[\$]/g,'\\'+'$$')+"})","g");
                    str = str.replace(reg, obj[key]);
                }
            }else{
                str = str.replace(/{(\d+)}/g, function(s,i){
                    if(i > arguments.length) return ''
                    return arguments[i];
                });
            }
        }
        return str;  
    },
    intValue(num) {
        if(num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
            return num &= 0xFFFFFFFF;
        }
        return num;
    },
    hashCode(str){
        let hash = 0;
        if(typeof str==='string' && str) {
            for (let i = 0; i < str.length; i++) {
                hash += str.charCodeAt(i)*i;
                hash = this.intValue(hash);
            }
        }
        return hash;
    },
    // const fileRules = [{
    //     reg: function(file){ return /(\.dgs)$/.test(file.name) },
    //     tip: formatMessage({id:'source.packages.validateFromate'}),
    //     fallback: self.Evt_FallBack
    // }];
    //checkValidate({}, fileRules)
    checkValidate(value, rules){
        const TypeCheckValue = function(value, reg){
            if(Utils.getType(reg) == 'regexp') return reg.test(value);
            if(typeof reg == 'function'){
                let flag = reg(value);
                return flag == undefined && true ||  flag;
            }
        };
        if(!rules) return true
        let flag = true;
        try {
            [].concat(rules || []).forEach(function(item){
                flag = TypeCheckValue(value, item.reg);
                if(!flag){
                    item.fallback && item.fallback(item, value);
                    throw new Error('validate is not ture');
                }
            })
        }catch(e){}
        return flag
    },
    deepCopy(obj, excludeKey, excludeType) {
        const result = Array.isArray(obj) ? [] : {};
        for (let key in obj) {
          if (obj.hasOwnProperty(key)) {
            let item = obj[key];
            if(excludeType && new RegExp( Utils.getType(item)).test(excludeType) ) continue;
            if(excludeKey && excludeKey==key ) continue;
            if (typeof item === 'object' && item!==null) {
              result[key] = Utils.deepCopy(item); 
            } else {
              result[key] = item;
            }
          }
        }
        return result;
    },
    judge(type,...arg){
        type = ['some','every'].includes(type) ? type: 'some';
        return new Promise((resolve, reject)=>{
            try{
                const flag= Utils.getFlattenArrs([].concat(arg))[type](item=>{
                    switch(Utils.getType(item)){
                        case 'function':
                        return item()
                        default:
                        return item
                    }
                })
                flag ? resolve(flag):reject(flag)
            }catch(err){ reject(err) }
        })
    },
    filterValidate(obj){
        switch(Utils.getType(obj)){
            case 'object':
                {
                    const newData = {};
                    for(let i in obj){
                        if(obj[i] !== undefined) newData[i] = obj[i]
                    }
                    return newData
                }
            case 'array':
                {
                    
                }
            break;
        }
    },
    encode(str){
        var out, i, len;
        var c1, c2, c3;
        str = ''.concat(str);
        len = str.length;
        i = 0;
        out = "";
        while(i < len) {
            c1 = str.charCodeAt(i++) & 0xff;
            if(i == len) {
                out += encodeChars.charAt(c1 >> 2);
                out += encodeChars.charAt((c1 & 0x3) << 4);
                out += "==";
                break;
            }
            c2 = str.charCodeAt(i++);
            if(i == len) {
                out += encodeChars.charAt(c1 >> 2);
                out += encodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
                out += encodeChars.charAt((c2 & 0xF) << 2);
                out += "=";
                break;
            }
            c3 = str.charCodeAt(i++);
            out += encodeChars.charAt(c1 >> 2);
            out += encodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
            out += encodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >>6));
            out += encodeChars.charAt(c3 & 0x3F);
        }
        return out;
    },
    decode(str){
        var c1, c2, c3, c4;
        var i, len, out;
        str = ''.concat(str);
        len = str.length;
        i = 0;
        out = "";
        while (i < len) {
            do {
                c1 = decodeChars[str.charCodeAt(i++) & 0xff];
            }
            while (i < len && c1 == -1);
            if (c1 == -1) 
                break;
            do {
                c2 = decodeChars[str.charCodeAt(i++) & 0xff];
            }
            while (i < len && c2 == -1);
            if (c2 == -1) 
                break;
            out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
            do {
                c3 = str.charCodeAt(i++) & 0xff;
                if (c3 == 61) 
                    return out;
                c3 = decodeChars[c3];
            }
            while (i < len && c3 == -1);
            if (c3 == -1) 
                break;
            out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
            do {
                c4 = str.charCodeAt(i++) & 0xff;
                if (c4 == 61) 
                    return out;
                c4 = decodeChars[c4];
            }
            while (i < len && c4 == -1);
            if (c4 == -1) 
                break;
            out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
        }
        return out;
    }
}
export default Utils