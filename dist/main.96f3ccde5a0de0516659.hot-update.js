exports.id = "main";
exports.modules = {

/***/ "./platforms/server/middleWares/index.js":
/*!***********************************************!*\
  !*** ./platforms/server/middleWares/index.js ***!
  \***********************************************/
/*! exports provided: CorseAction, ErrorAction, HeaderAction, LogsAction, Routers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CorseAction\", function() { return CorseAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ErrorAction\", function() { return ErrorAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeaderAction\", function() { return HeaderAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LogsAction\", function() { return LogsAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Routers\", function() { return Routers; });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa2_cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa2-cors */ \"../node_modules/_koa2-cors@2.0.6@koa2-cors/dist/index.js\");\n/* harmony import */ var koa2_cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa2_cors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _core_Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/Router */ \"./core/Router.js\");\n/* harmony import */ var _server_config_routeSchema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @server/config/routeSchema */ \"./platforms/server/config/routeSchema.js\");\n\n\n\n\n\nconst domains = ['http://localhost:8000'];\nconst CorseAction = function (param) {\n  return function (ctx, next) {\n    return koa2_cors__WEBPACK_IMPORTED_MODULE_2___default()({\n      origin: function (ctx) {\n        //设置允许来自指定域名请求\n        const whiteList = domains.concat(param.whiteList || []); //可跨域白名单\n\n        let url = ctx.header.referer.substr(0, ctx.header.referer.length - 1);\n        if (whiteList.includes(url)) return url;\n      },\n      maxAge: 5,\n      //指定本次预检请求的有效期，单位为秒。\n      credentials: true,\n      //是否允许发送Cookie\n      allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],\n      //设置所允许的HTTP请求方法\n      allowHeaders: ['Content-Type', 'Authorization', 'Accept'],\n      //设置服务器支持的所有头信息字段\n      exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段\n\n    });\n  };\n};\nconst ErrorAction = function (param) {\n  return function (ctx, next) {\n    return next().catch(err => {\n      switch (err.status) {\n        case 401:\n          ctx.status = 200;\n          ctx.body = {\n            status: 401,\n            result: {\n              err: 'Authentication Error',\n              errInfo: 'Protected resource, use Authorization header to get access.'\n            }\n          };\n          break;\n\n        default:\n          throw err;\n      }\n    });\n  };\n};\nconst HeaderAction = function (param) {\n  return async function (ctx, next) {\n    ctx.set('Access-Control-Allow-Origin', '*');\n    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');\n    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');\n\n    if (ctx.method == 'OPTIONS') {\n      ctx.body = 200;\n    } else {\n      await next();\n    }\n  };\n};\nconst LogsAction = function (param) {\n  return async function (ctx, next) {\n    await next();\n    const time = ctx.response.get('X-Response-Time');\n  };\n};\nconst Routers = function (param) {\n  // const routerPath = path.resolve(__dirname, '../routes');\n  // try{\n  // \tconst state = fs.statSync(routerPath);\n  // }catch(err){\n  // \tconsole.log(err)\n  // }\n  return async function (ctx, next) {\n    const routers = []; // const routerPath = FilterFiles(path.resolve(__dirname, '../routes'), (fileName)=>{ return true});\n    // routerPath.forEach(pathItem=>{\n    // \tconst Route = Router();\n    // \tconst modal = await (() => required(pathItem))()\n    // \tconst Modal = modal(RouteSchema);\n    // \tif(Modal.prefix) Route.prefix(Modal.prefix);\n    // \tfor (let [key, value] of Object.entries(Modal.routers)) {\n    // \t\tconst [method, url] = ''.concat(key).split(/\\s+/gi);\n    // \t\tRoute.on({ method, url }, (param, control)=>{ }) \n    // \t}\n    // \trouters = routers.concat(Route.routers());\n    // })\n    // return routers\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbGF0Zm9ybXMvc2VydmVyL21pZGRsZVdhcmVzL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGxhdGZvcm1zL3NlcnZlci9taWRkbGVXYXJlcy9pbmRleC5qcz81NWY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgQ29ycyBmcm9tICdrb2EyLWNvcnMnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ0Bjb3JlL1JvdXRlcic7XHJcbmltcG9ydCBSb3V0ZVNjaGVtYSBmcm9tICdAc2VydmVyL2NvbmZpZy9yb3V0ZVNjaGVtYSc7XHJcbmNvbnN0IGRvbWFpbnMgPSBbJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMCddO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvcnNlQWN0aW9uID0gZnVuY3Rpb24gKHBhcmFtKSB7XHJcblx0cmV0dXJuIGZ1bmN0aW9uIChjdHgsIG5leHQpIHtcclxuXHRcdHJldHVybiBDb3JzKHtcclxuXHRcdFx0b3JpZ2luOiBmdW5jdGlvbiAoY3R4KSB7IC8v6K6+572u5YWB6K645p2l6Ieq5oyH5a6a5Z+f5ZCN6K+35rGCXHJcblx0XHRcdFx0Y29uc3Qgd2hpdGVMaXN0ID0gZG9tYWlucy5jb25jYXQocGFyYW0ud2hpdGVMaXN0IHx8IFtdKTsgLy/lj6/ot6jln5/nmb3lkI3ljZVcclxuXHRcdFx0XHRsZXQgdXJsID0gY3R4LmhlYWRlci5yZWZlcmVyLnN1YnN0cigwLCBjdHguaGVhZGVyLnJlZmVyZXIubGVuZ3RoIC0gMSk7XHJcblx0XHRcdFx0aWYgKHdoaXRlTGlzdC5pbmNsdWRlcyh1cmwpKSByZXR1cm4gdXJsXHJcblx0XHRcdH0sXHJcblx0XHRcdG1heEFnZTogNSwgLy/mjIflrprmnKzmrKHpooTmo4Dor7fmsYLnmoTmnInmlYjmnJ/vvIzljZXkvY3kuLrnp5LjgIJcclxuXHRcdFx0Y3JlZGVudGlhbHM6IHRydWUsIC8v5piv5ZCm5YWB6K645Y+R6YCBQ29va2llXHJcblx0XHRcdGFsbG93TWV0aG9kczogWydHRVQnLCAnUE9TVCcsICdQVVQnLCAnREVMRVRFJywgJ09QVElPTlMnXSwgLy/orr7nva7miYDlhYHorrjnmoRIVFRQ6K+35rGC5pa55rOVXHJcblx0XHRcdGFsbG93SGVhZGVyczogWydDb250ZW50LVR5cGUnLCAnQXV0aG9yaXphdGlvbicsICdBY2NlcHQnXSwgLy/orr7nva7mnI3liqHlmajmlK/mjIHnmoTmiYDmnInlpLTkv6Hmga/lrZfmrrVcclxuXHRcdFx0ZXhwb3NlSGVhZGVyczogWydXV1ctQXV0aGVudGljYXRlJywgJ1NlcnZlci1BdXRob3JpemF0aW9uJ10gLy/orr7nva7ojrflj5blhbbku5boh6rlrprkuYnlrZfmrrVcclxuXHRcdH0pXHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEVycm9yQWN0aW9uID0gZnVuY3Rpb24gKHBhcmFtKSB7XHJcblx0cmV0dXJuIGZ1bmN0aW9uIChjdHgsIG5leHQpIHtcclxuXHRcdHJldHVybiBuZXh0KCkuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0c3dpdGNoIChlcnIuc3RhdHVzKSB7XHJcblx0XHRcdGNhc2UgNDAxOlxyXG5cdFx0XHRcdGN0eC5zdGF0dXMgPSAyMDBcclxuXHRcdFx0XHRjdHguYm9keSA9IHtcclxuXHRcdFx0XHRcdHN0YXR1czogNDAxLFxyXG5cdFx0XHRcdFx0cmVzdWx0OiB7XHJcblx0XHRcdFx0XHRcdGVycjogJ0F1dGhlbnRpY2F0aW9uIEVycm9yJyxcclxuXHRcdFx0XHRcdFx0ZXJySW5mbzogJ1Byb3RlY3RlZCByZXNvdXJjZSwgdXNlIEF1dGhvcml6YXRpb24gaGVhZGVyIHRvIGdldCBhY2Nlc3MuJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0YnJlYWtcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHR0aHJvdyBlcnJcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyQWN0aW9uID0gZnVuY3Rpb24gKHBhcmFtKSB7XHJcblx0cmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChjdHgsIG5leHQpIHtcclxuXHRcdGN0eC5zZXQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJyk7XHJcblx0XHRjdHguc2V0KCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJywgJ0NvbnRlbnQtVHlwZSwgQ29udGVudC1MZW5ndGgsIEF1dGhvcml6YXRpb24sIEFjY2VwdCwgWC1SZXF1ZXN0ZWQtV2l0aCAsIHlvdXJIZWFkZXJGZWlsZCcpO1xyXG5cdFx0Y3R4LnNldCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsICdQVVQsIFBPU1QsIEdFVCwgREVMRVRFLCBPUFRJT05TJyk7XHJcblx0XHRpZiAoY3R4Lm1ldGhvZCA9PSAnT1BUSU9OUycpIHtcclxuXHRcdFx0Y3R4LmJvZHkgPSAyMDA7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRhd2FpdCBuZXh0KCk7XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExvZ3NBY3Rpb24gPSBmdW5jdGlvbiAocGFyYW0pIHtcclxuXHRyZXR1cm4gYXN5bmMgZnVuY3Rpb24gKGN0eCwgbmV4dCkge1xyXG5cdFx0YXdhaXQgbmV4dCgpO1xyXG5cdFx0Y29uc3QgdGltZSA9IGN0eC5yZXNwb25zZS5nZXQoJ1gtUmVzcG9uc2UtVGltZScpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBSb3V0ZXJzID0gIGZ1bmN0aW9uKHBhcmFtKXtcclxuXHQvLyBjb25zdCByb3V0ZXJQYXRoID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL3JvdXRlcycpO1xyXG5cdC8vIHRyeXtcclxuXHQvLyBcdGNvbnN0IHN0YXRlID0gZnMuc3RhdFN5bmMocm91dGVyUGF0aCk7XHJcblx0Ly8gfWNhdGNoKGVycil7XHJcblx0Ly8gXHRjb25zb2xlLmxvZyhlcnIpXHJcblx0Ly8gfVxyXG5cdHJldHVybiBhc3luYyBmdW5jdGlvbiAoY3R4LCBuZXh0KSB7XHJcblx0XHRjb25zdCByb3V0ZXJzID0gW107XHJcblx0XHQvLyBjb25zdCByb3V0ZXJQYXRoID0gRmlsdGVyRmlsZXMocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL3JvdXRlcycpLCAoZmlsZU5hbWUpPT57IHJldHVybiB0cnVlfSk7XHJcblx0XHQvLyByb3V0ZXJQYXRoLmZvckVhY2gocGF0aEl0ZW09PntcclxuXHRcdC8vIFx0Y29uc3QgUm91dGUgPSBSb3V0ZXIoKTtcclxuXHRcdC8vIFx0Y29uc3QgbW9kYWwgPSBhd2FpdCAoKCkgPT4gcmVxdWlyZWQocGF0aEl0ZW0pKSgpXHJcblx0XHQvLyBcdGNvbnN0IE1vZGFsID0gbW9kYWwoUm91dGVTY2hlbWEpO1xyXG5cdFx0Ly8gXHRpZihNb2RhbC5wcmVmaXgpIFJvdXRlLnByZWZpeChNb2RhbC5wcmVmaXgpO1xyXG5cdFx0Ly8gXHRmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoTW9kYWwucm91dGVycykpIHtcclxuXHRcdC8vIFx0XHRjb25zdCBbbWV0aG9kLCB1cmxdID0gJycuY29uY2F0KGtleSkuc3BsaXQoL1xccysvZ2kpO1xyXG5cdFx0Ly8gXHRcdFJvdXRlLm9uKHsgbWV0aG9kLCB1cmwgfSwgKHBhcmFtLCBjb250cm9sKT0+eyB9KSBcclxuXHRcdC8vIFx0fVxyXG5cdFx0Ly8gXHRyb3V0ZXJzID0gcm91dGVycy5jb25jYXQoUm91dGUucm91dGVycygpKTtcclxuXHRcdC8vIH0pXHJcblx0XHQvLyByZXR1cm4gcm91dGVyc1xyXG5cdH1cclxufTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBWEE7QUFZQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQVpBO0FBY0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./platforms/server/middleWares/index.js\n");

/***/ })

};