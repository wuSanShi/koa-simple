exports.id = "main";
exports.modules = {

/***/ "./platforms/server/middleWares/routers.js":
/*!*************************************************!*\
  !*** ./platforms/server/middleWares/routers.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/Router */ \"./core/Router.js\");\n/* harmony import */ var _server_config_routeSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @server/config/routeSchema */ \"./platforms/server/config/routeSchema.js\");\n/* harmony import */ var _server_routes_jobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @server/routes/jobs */ \"./platforms/server/routes/jobs.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_server_routes_jobs__WEBPACK_IMPORTED_MODULE_2__[\"default\"]].map(routeFun => {\n  const Route = Object(_core_Router__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const routeInfo = routeFun(_server_config_routeSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  if (routeInfo.prefix) Route.prefix('/'.concat(routeInfo.prefix).replace(/\\/+/, '/'));\n\n  for (let [key, value] of Object.entries(routeInfo.routers)) {\n    const [method, url] = ''.concat(key).split(/\\s+/gi);\n    Route.on({\n      method,\n      url,\n      ...value\n    }, async (ctx, next, param) => {\n      console.log(11111111111111);\n      console.log(param);\n      ctx.response.body = {\n        message: 123123\n      };\n      console.log(ctx, next);\n    });\n  }\n\n  return Route;\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbGF0Zm9ybXMvc2VydmVyL21pZGRsZVdhcmVzL3JvdXRlcnMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wbGF0Zm9ybXMvc2VydmVyL21pZGRsZVdhcmVzL3JvdXRlcnMuanM/ZDRkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gJ0Bjb3JlL1JvdXRlcic7XHJcbmltcG9ydCBSb3V0ZVNjaGVtYSBmcm9tICdAc2VydmVyL2NvbmZpZy9yb3V0ZVNjaGVtYSc7XHJcbmltcG9ydCBKb2JzUm91dGUgZnJvbSAnQHNlcnZlci9yb3V0ZXMvam9icyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgW0pvYnNSb3V0ZV0ubWFwKHJvdXRlRnVuPT57XHJcblx0Y29uc3QgUm91dGUgPSBSb3V0ZXIoKTtcclxuXHRjb25zdCByb3V0ZUluZm8gPSByb3V0ZUZ1bihSb3V0ZVNjaGVtYSk7XHJcblx0aWYocm91dGVJbmZvLnByZWZpeCkgUm91dGUucHJlZml4KCcvJy5jb25jYXQocm91dGVJbmZvLnByZWZpeCkucmVwbGFjZSgvXFwvKy8sICcvJykpO1xyXG5cdGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhyb3V0ZUluZm8ucm91dGVycykpIHtcclxuXHRcdGNvbnN0IFttZXRob2QsIHVybF0gPSAnJy5jb25jYXQoa2V5KS5zcGxpdCgvXFxzKy9naSk7XHJcblx0XHRSb3V0ZS5vbih7IG1ldGhvZCwgdXJsLCAuLi52YWx1ZSB9LCBhc3luYyAoY3R4LCBuZXh0LCBwYXJhbSk9PnsgXHJcblx0XHRcdGNvbnNvbGUubG9nKDExMTExMTExMTExMTExKVxyXG5cdFx0XHRjb25zb2xlLmxvZyhwYXJhbSlcclxuXHRcdFx0Y3R4LnJlc3BvbnNlLmJvZHkgPSB7XHJcblx0XHRcdFx0bWVzc2FnZTogMTIzMTIzXHJcblx0XHRcdH07XHJcblx0XHRcdGNvbnNvbGUubG9nKGN0eCwgbmV4dClcclxuXHRcdH0pIFxyXG5cdH1cclxuXHRyZXR1cm4gUm91dGVcclxufSlcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./platforms/server/middleWares/routers.js\n");

/***/ })

};