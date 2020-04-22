import Router from '@core/Router';
import Utils from '@utils';
import RouteSchema from '@server/config/routeSchema';
import JobsRoute from '@server/routes/jobs';
import ComponentRoute from '@server/routes/component';


export default [JobsRoute, ComponentRoute].map(routeFun=>{
	const Route = Router();
	const routeInfo = routeFun(RouteSchema);
	if(routeInfo.prefix) Route.prefix('/'.concat(routeInfo.prefix).replace(/\/+/, '/'));
	for (let [key, value] of Object.entries(routeInfo.routers)) {
		const [method, url] = ''.concat(key).split(/\s+/gi);
		Route.on({ method, url, ...value }, async (ctx, next, param)=>{ 
			if(Utils.getKeyData(ctx, 'request.query.mock', false) && param.mock) return ctx.response.body = { data: param.mock(), status: 200 };
			if(param.action) return await param.action(ctx, next, param);
			ctx.response.body = {
				message: 123123
			};
		}) 
	}
	return Route
})
