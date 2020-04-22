import path from 'path';
import fs from 'fs';
import Cors from 'koa2-cors';
import Router from '@core/Router';
import RouteSchema from '@server/config/routeSchema';
const domains = ['http://localhost:8000'];

export const CorseAction = function (param) {
	return function (ctx, next) {
		return Cors({
			origin: function (ctx) { //设置允许来自指定域名请求
				const whiteList = domains.concat(param.whiteList || []); //可跨域白名单
				let url = ctx.header.referer.substr(0, ctx.header.referer.length - 1);
				if (whiteList.includes(url)) return url
			},
			maxAge: 5, //指定本次预检请求的有效期，单位为秒。
			credentials: true, //是否允许发送Cookie
			allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
			allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
			exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
		})
	}
};

export const ErrorAction = function (param) {
	return function (ctx, next) {
		return next().catch((err) => {
		switch (err.status) {
			case 401:
				ctx.status = 200
				ctx.body = {
					status: 401,
					result: {
						err: 'Authentication Error',
						errInfo: 'Protected resource, use Authorization header to get access.'
					}
				}
			break
			default:
				throw err
			}
		})
	}
};

export const HeaderAction = function (param) {
	return async function (ctx, next) {
		ctx.set('Access-Control-Allow-Origin', '*');
		ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
		ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
		if (ctx.method == 'OPTIONS') {
			ctx.body = 200;
		} else {
			await next();
		}
	}
};

export const LogsAction = function (param) {
	return async function (ctx, next) {
		await next();
		const time = ctx.response.get('X-Response-Time');
	}
};
