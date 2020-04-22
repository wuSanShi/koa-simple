exports.id = "main";
exports.modules = {

/***/ "./platforms/server/middleWares/routers.js":
/*!*************************************************!*\
  !*** ./platforms/server/middleWares/routers.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/Router */ \"./core/Router.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils */ \"./utils/index.js\");\n/* harmony import */ var _server_config_routeSchema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @server/config/routeSchema */ \"./platforms/server/config/routeSchema.js\");\n/* harmony import */ var _server_routes_jobs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @server/routes/jobs */ \"./platforms/server/routes/jobs.js\");\n/* harmony import */ var _server_routes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @server/routes/component */ \"./platforms/server/routes/component.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_server_routes_jobs__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _server_routes_component__WEBPACK_IMPORTED_MODULE_4__[\"default\"]].map(routeFun => {\n  const Route = Object(_core_Router__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const routeInfo = routeFun(_server_config_routeSchema__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  if (routeInfo.prefix) Route.prefix('/'.concat(routeInfo.prefix).replace(/\\/+/, '/'));\n\n  for (let [key, value] of Object.entries(routeInfo.routers)) {\n    const [method, url] = ''.concat(key).split(/\\s+/gi);\n    Route.on({\n      method,\n      url,\n      ...value\n    }, async (ctx, next, param) => {\n      console.log(_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getKeyData(ctx, 'request.query.mock', false));\n      console.log(param);\n\n      if (_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getKeyData(ctx, 'request.query.mock', false) && param.mock) {\n        ctx.response.body = {\n          data: param.mock(),\n          status: 200\n        };\n      }\n\n      if (param.cation) await param.cation(ctx, next, param); // ctx.response.body = {\n      // \tmessage: 123123\n      // };\n    });\n  }\n\n  return Route;\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbGF0Zm9ybXMvc2VydmVyL21pZGRsZVdhcmVzL3JvdXRlcnMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wbGF0Zm9ybXMvc2VydmVyL21pZGRsZVdhcmVzL3JvdXRlcnMuanM/ZDRkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gJ0Bjb3JlL1JvdXRlcic7XHJcbmltcG9ydCBVdGlscyBmcm9tICdAdXRpbHMnO1xyXG5pbXBvcnQgUm91dGVTY2hlbWEgZnJvbSAnQHNlcnZlci9jb25maWcvcm91dGVTY2hlbWEnO1xyXG5pbXBvcnQgSm9ic1JvdXRlIGZyb20gJ0BzZXJ2ZXIvcm91dGVzL2pvYnMnO1xyXG5pbXBvcnQgY29tcG9uZW50Um91dGUgZnJvbSAnQHNlcnZlci9yb3V0ZXMvY29tcG9uZW50JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBbSm9ic1JvdXRlLCBjb21wb25lbnRSb3V0ZV0ubWFwKHJvdXRlRnVuPT57XHJcblx0Y29uc3QgUm91dGUgPSBSb3V0ZXIoKTtcclxuXHRjb25zdCByb3V0ZUluZm8gPSByb3V0ZUZ1bihSb3V0ZVNjaGVtYSk7XHJcblx0aWYocm91dGVJbmZvLnByZWZpeCkgUm91dGUucHJlZml4KCcvJy5jb25jYXQocm91dGVJbmZvLnByZWZpeCkucmVwbGFjZSgvXFwvKy8sICcvJykpO1xyXG5cdGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhyb3V0ZUluZm8ucm91dGVycykpIHtcclxuXHRcdGNvbnN0IFttZXRob2QsIHVybF0gPSAnJy5jb25jYXQoa2V5KS5zcGxpdCgvXFxzKy9naSk7XHJcblx0XHRSb3V0ZS5vbih7IG1ldGhvZCwgdXJsLCAuLi52YWx1ZSB9LCBhc3luYyAoY3R4LCBuZXh0LCBwYXJhbSk9PnsgXHJcblx0XHRcdGNvbnNvbGUubG9nKFV0aWxzLmdldEtleURhdGEoY3R4LCAncmVxdWVzdC5xdWVyeS5tb2NrJywgZmFsc2UpKVxyXG5cdFx0XHRjb25zb2xlLmxvZyggcGFyYW0pXHJcblx0XHRcdGlmKFV0aWxzLmdldEtleURhdGEoY3R4LCAncmVxdWVzdC5xdWVyeS5tb2NrJywgZmFsc2UpICYmIHBhcmFtLm1vY2spe1xyXG5cdFx0XHRcdGN0eC5yZXNwb25zZS5ib2R5ID0geyBcclxuXHRcdFx0XHRcdGRhdGE6ICAgIHBhcmFtLm1vY2soKSxcclxuXHRcdFx0XHRcdHN0YXR1czpcdCAyMDBcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9IFxyXG5cdFx0XHRpZihwYXJhbS5jYXRpb24pIGF3YWl0IHBhcmFtLmNhdGlvbihjdHgsIG5leHQsIHBhcmFtKTtcclxuXHRcdFx0Ly8gY3R4LnJlc3BvbnNlLmJvZHkgPSB7XHJcblx0XHRcdC8vIFx0bWVzc2FnZTogMTIzMTIzXHJcblx0XHRcdC8vIH07XHJcblx0XHR9KSBcclxuXHR9XHJcblx0cmV0dXJuIFJvdXRlXHJcbn0pXHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./platforms/server/middleWares/routers.js\n");

/***/ })

};