import KoaRouter from 'koa-router';
class Router extends KoaRouter{
    constructor(props){
        super(props);
    }
    on(param, controller){
        const {method='get', url } = param;
        const type = ''.concat(method).toLocaleLowerCase().trim();
        switch(type){
            default:
                super[type](url, this.emit(param, controller))
            break
        }
    }
    emit(param, controller){
        return async (ctx, next)=>{
            try{
               await controller && controller(ctx, next, param);
            }catch(err){
                ctx.response.status = err.statusCode || err.status || 500;
                ctx.response.body = {
                    message: err.message
                };
            }
        }
    }
}
const NewRouter = (opts)=>{
    if (!(this instanceof NewRouter))  return new Router(opts);
    this.opts = opts || {};
}
export default NewRouter
