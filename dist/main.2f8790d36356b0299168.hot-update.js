exports.id = "main";
exports.modules = {

/***/ "./platforms/server/middleWares/index.js":
/*!***********************************************!*\
  !*** ./platforms/server/middleWares/index.js ***!
  \***********************************************/
/*! exports provided: CorseAction, ErrorAction, HeaderAction, Logs, Routers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CorseAction\", function() { return CorseAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ErrorAction\", function() { return ErrorAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeaderAction\", function() { return HeaderAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Logs\", function() { return Logs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Routers\", function() { return Routers; });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa2_cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa2-cors */ \"../node_modules/_koa2-cors@2.0.6@koa2-cors/dist/index.js\");\n/* harmony import */ var koa2_cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa2_cors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _core_Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/Router */ \"./core/Router.js\");\n/* harmony import */ var _server_config_routeSchema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @server/config/routeSchema */ \"./platforms/server/config/routeSchema.js\");\n/* harmony import */ var _utils_file__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/file */ \"./utils/file.js\");\n\n\n\n\n\n\nconst domains = ['http://localhost:8000'];\nconst CorseAction = function (param) {\n  return function (ctx, next) {\n    return koa2_cors__WEBPACK_IMPORTED_MODULE_2___default()({\n      origin: function (ctx) {\n        //设置允许来自指定域名请求\n        const whiteList = domains.concat(param.whiteList || []); //可跨域白名单\n\n        let url = ctx.header.referer.substr(0, ctx.header.referer.length - 1);\n        if (whiteList.includes(url)) return url;\n      },\n      maxAge: 5,\n      //指定本次预检请求的有效期，单位为秒。\n      credentials: true,\n      //是否允许发送Cookie\n      allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],\n      //设置所允许的HTTP请求方法\n      allowHeaders: ['Content-Type', 'Authorization', 'Accept'],\n      //设置服务器支持的所有头信息字段\n      exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段\n\n    });\n  };\n};\nconst ErrorAction = function (param) {\n  return function (ctx, next) {\n    return next().catch(err => {\n      switch (err.status) {\n        case 401:\n          ctx.status = 200;\n          ctx.body = {\n            status: 401,\n            result: {\n              err: 'Authentication Error',\n              errInfo: 'Protected resource, use Authorization header to get access.'\n            }\n          };\n          break;\n\n        default:\n          throw err;\n      }\n    });\n  };\n};\nconst HeaderAction = function (param) {\n  return async function (ctx, next) {\n    ctx.set('Access-Control-Allow-Origin', '*');\n    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');\n    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');\n\n    if (ctx.method == 'OPTIONS') {\n      ctx.body = 200;\n    } else {\n      await next();\n    }\n  };\n};\nconst Logs = function (param) {\n  return async function (ctx, next) {\n    await next();\n    const time = ctx.response.get('X-Response-Time');\n  };\n};\nconst Routers = function (param) {\n  // const routerPath = path.resolve(__dirname, '../routes');\n  console.log(12123323, __dirname); // try{\n  // \tconst state = fs.statSync(routerPath);\n  // }catch(err){\n  // \tconsole.log(err)\n  // }\n\n  return async function (ctx, next) {\n    const routers = []; // const routerPath = FilterFiles(path.resolve(__dirname, '../routes'), (fileName)=>{ return true});\n    // routerPath.forEach(pathItem=>{\n    // \tconst Route = Router();\n    // \tconst modal = await (() => required(pathItem))()\n    // \tconst Modal = modal(RouteSchema);\n    // \tif(Modal.prefix) Route.prefix(Modal.prefix);\n    // \tfor (let [key, value] of Object.entries(Modal.routers)) {\n    // \t\tconst [method, url] = ''.concat(key).split(/\\s+/gi);\n    // \t\tRoute.on({ method, url }, (param, control)=>{ }) \n    // \t}\n    // \trouters = routers.concat(Route.routers());\n    // })\n    // return routers\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbGF0Zm9ybXMvc2VydmVyL21pZGRsZVdhcmVzL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGxhdGZvcm1zL3NlcnZlci9taWRkbGVXYXJlcy9pbmRleC5qcz81NWY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgQ29ycyBmcm9tICdrb2EyLWNvcnMnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ0Bjb3JlL1JvdXRlcic7XHJcbmltcG9ydCBSb3V0ZVNjaGVtYSBmcm9tICdAc2VydmVyL2NvbmZpZy9yb3V0ZVNjaGVtYSc7XHJcbmltcG9ydCB7IEZpbHRlckZpbGVzIH0gZnJvbSAnQHV0aWxzL2ZpbGUnO1xyXG5jb25zdCBkb21haW5zID0gWydodHRwOi8vbG9jYWxob3N0OjgwMDAnXTtcclxuXHJcbmV4cG9ydCBjb25zdCBDb3JzZUFjdGlvbiA9IGZ1bmN0aW9uIChwYXJhbSkge1xyXG5cdHJldHVybiBmdW5jdGlvbiAoY3R4LCBuZXh0KSB7XHJcblx0XHRyZXR1cm4gQ29ycyh7XHJcblx0XHRcdG9yaWdpbjogZnVuY3Rpb24gKGN0eCkgeyAvL+iuvue9ruWFgeiuuOadpeiHquaMh+WumuWfn+WQjeivt+axglxyXG5cdFx0XHRcdGNvbnN0IHdoaXRlTGlzdCA9IGRvbWFpbnMuY29uY2F0KHBhcmFtLndoaXRlTGlzdCB8fCBbXSk7IC8v5Y+v6Leo5Z+f55m95ZCN5Y2VXHJcblx0XHRcdFx0bGV0IHVybCA9IGN0eC5oZWFkZXIucmVmZXJlci5zdWJzdHIoMCwgY3R4LmhlYWRlci5yZWZlcmVyLmxlbmd0aCAtIDEpO1xyXG5cdFx0XHRcdGlmICh3aGl0ZUxpc3QuaW5jbHVkZXModXJsKSkgcmV0dXJuIHVybFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRtYXhBZ2U6IDUsIC8v5oyH5a6a5pys5qyh6aKE5qOA6K+35rGC55qE5pyJ5pWI5pyf77yM5Y2V5L2N5Li656eS44CCXHJcblx0XHRcdGNyZWRlbnRpYWxzOiB0cnVlLCAvL+aYr+WQpuWFgeiuuOWPkemAgUNvb2tpZVxyXG5cdFx0XHRhbGxvd01ldGhvZHM6IFsnR0VUJywgJ1BPU1QnLCAnUFVUJywgJ0RFTEVURScsICdPUFRJT05TJ10sIC8v6K6+572u5omA5YWB6K6455qESFRUUOivt+axguaWueazlVxyXG5cdFx0XHRhbGxvd0hlYWRlcnM6IFsnQ29udGVudC1UeXBlJywgJ0F1dGhvcml6YXRpb24nLCAnQWNjZXB0J10sIC8v6K6+572u5pyN5Yqh5Zmo5pSv5oyB55qE5omA5pyJ5aS05L+h5oGv5a2X5q61XHJcblx0XHRcdGV4cG9zZUhlYWRlcnM6IFsnV1dXLUF1dGhlbnRpY2F0ZScsICdTZXJ2ZXItQXV0aG9yaXphdGlvbiddIC8v6K6+572u6I635Y+W5YW25LuW6Ieq5a6a5LmJ5a2X5q61XHJcblx0XHR9KVxyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBFcnJvckFjdGlvbiA9IGZ1bmN0aW9uIChwYXJhbSkge1xyXG5cdHJldHVybiBmdW5jdGlvbiAoY3R4LCBuZXh0KSB7XHJcblx0XHRyZXR1cm4gbmV4dCgpLmNhdGNoKChlcnIpID0+IHtcclxuXHRcdHN3aXRjaCAoZXJyLnN0YXR1cykge1xyXG5cdFx0XHRjYXNlIDQwMTpcclxuXHRcdFx0XHRjdHguc3RhdHVzID0gMjAwXHJcblx0XHRcdFx0Y3R4LmJvZHkgPSB7XHJcblx0XHRcdFx0XHRzdGF0dXM6IDQwMSxcclxuXHRcdFx0XHRcdHJlc3VsdDoge1xyXG5cdFx0XHRcdFx0XHRlcnI6ICdBdXRoZW50aWNhdGlvbiBFcnJvcicsXHJcblx0XHRcdFx0XHRcdGVyckluZm86ICdQcm90ZWN0ZWQgcmVzb3VyY2UsIHVzZSBBdXRob3JpemF0aW9uIGhlYWRlciB0byBnZXQgYWNjZXNzLidcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdGJyZWFrXHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0dGhyb3cgZXJyXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlckFjdGlvbiA9IGZ1bmN0aW9uIChwYXJhbSkge1xyXG5cdHJldHVybiBhc3luYyBmdW5jdGlvbiAoY3R4LCBuZXh0KSB7XHJcblx0XHRjdHguc2V0KCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpO1xyXG5cdFx0Y3R4LnNldCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsICdDb250ZW50LVR5cGUsIENvbnRlbnQtTGVuZ3RoLCBBdXRob3JpemF0aW9uLCBBY2NlcHQsIFgtUmVxdWVzdGVkLVdpdGggLCB5b3VySGVhZGVyRmVpbGQnKTtcclxuXHRcdGN0eC5zZXQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLCAnUFVULCBQT1NULCBHRVQsIERFTEVURSwgT1BUSU9OUycpO1xyXG5cdFx0aWYgKGN0eC5tZXRob2QgPT0gJ09QVElPTlMnKSB7XHJcblx0XHRcdGN0eC5ib2R5ID0gMjAwO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0YXdhaXQgbmV4dCgpO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dzID0gZnVuY3Rpb24gKHBhcmFtKSB7XHJcblx0cmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChjdHgsIG5leHQpIHtcclxuXHRcdGF3YWl0IG5leHQoKTtcclxuXHRcdGNvbnN0IHRpbWUgPSBjdHgucmVzcG9uc2UuZ2V0KCdYLVJlc3BvbnNlLVRpbWUnKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUm91dGVycyA9ICBmdW5jdGlvbihwYXJhbSl7XHJcblx0Ly8gY29uc3Qgcm91dGVyUGF0aCA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9yb3V0ZXMnKTtcclxuXHRjb25zb2xlLmxvZygxMjEyMzMyMywgX19kaXJuYW1lKVxyXG5cdC8vIHRyeXtcclxuXHQvLyBcdGNvbnN0IHN0YXRlID0gZnMuc3RhdFN5bmMocm91dGVyUGF0aCk7XHJcblx0Ly8gfWNhdGNoKGVycil7XHJcblx0Ly8gXHRjb25zb2xlLmxvZyhlcnIpXHJcblx0Ly8gfVxyXG5cdHJldHVybiBhc3luYyBmdW5jdGlvbiAoY3R4LCBuZXh0KSB7XHJcblx0XHRjb25zdCByb3V0ZXJzID0gW107XHJcblx0XHQvLyBjb25zdCByb3V0ZXJQYXRoID0gRmlsdGVyRmlsZXMocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL3JvdXRlcycpLCAoZmlsZU5hbWUpPT57IHJldHVybiB0cnVlfSk7XHJcblx0XHQvLyByb3V0ZXJQYXRoLmZvckVhY2gocGF0aEl0ZW09PntcclxuXHRcdC8vIFx0Y29uc3QgUm91dGUgPSBSb3V0ZXIoKTtcclxuXHRcdC8vIFx0Y29uc3QgbW9kYWwgPSBhd2FpdCAoKCkgPT4gcmVxdWlyZWQocGF0aEl0ZW0pKSgpXHJcblx0XHQvLyBcdGNvbnN0IE1vZGFsID0gbW9kYWwoUm91dGVTY2hlbWEpO1xyXG5cdFx0Ly8gXHRpZihNb2RhbC5wcmVmaXgpIFJvdXRlLnByZWZpeChNb2RhbC5wcmVmaXgpO1xyXG5cdFx0Ly8gXHRmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoTW9kYWwucm91dGVycykpIHtcclxuXHRcdC8vIFx0XHRjb25zdCBbbWV0aG9kLCB1cmxdID0gJycuY29uY2F0KGtleSkuc3BsaXQoL1xccysvZ2kpO1xyXG5cdFx0Ly8gXHRcdFJvdXRlLm9uKHsgbWV0aG9kLCB1cmwgfSwgKHBhcmFtLCBjb250cm9sKT0+eyB9KSBcclxuXHRcdC8vIFx0fVxyXG5cdFx0Ly8gXHRyb3V0ZXJzID0gcm91dGVycy5jb25jYXQoUm91dGUucm91dGVycygpKTtcclxuXHRcdC8vIH0pXHJcblx0XHQvLyByZXR1cm4gcm91dGVyc1xyXG5cdH1cclxufTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQVhBO0FBWUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFaQTtBQWNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./platforms/server/middleWares/index.js\n");

/***/ })

};