exports.id = "main";
exports.modules = {

/***/ "./platforms/server/middleWares/routers.js":
/*!*************************************************!*\
  !*** ./platforms/server/middleWares/routers.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/Router */ \"./core/Router.js\");\n/* harmony import */ var _server_config_routeSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @server/config/routeSchema */ \"./platforms/server/config/routeSchema.js\");\n/* harmony import */ var _server_routes_jobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @server/routes/jobs */ \"./platforms/server/routes/jobs.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_server_routes_jobs__WEBPACK_IMPORTED_MODULE_2__[\"default\"]].map(routeModal => {\n  const Route = Object(_core_Router__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // const Modal = modal(RouteSchema);\n\n  console.log(Object(_core_Router__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n  if (Modal.prefix) Route.prefix(routeModal.prefix);\n\n  for (let [key, value] of Object.entries(routeModal.routers)) {\n    const [method, url] = ''.concat(key).split(/\\s+/gi);\n    Route.on({\n      method,\n      url,\n      ...value\n    }, async (cxt, next) => {});\n  }\n\n  return Route;\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbGF0Zm9ybXMvc2VydmVyL21pZGRsZVdhcmVzL3JvdXRlcnMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wbGF0Zm9ybXMvc2VydmVyL21pZGRsZVdhcmVzL3JvdXRlcnMuanM/ZDRkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gJ0Bjb3JlL1JvdXRlcic7XHJcbmltcG9ydCBSb3V0ZVNjaGVtYSBmcm9tICdAc2VydmVyL2NvbmZpZy9yb3V0ZVNjaGVtYSc7XHJcbmltcG9ydCBKb2JzUm91dGUgZnJvbSAnQHNlcnZlci9yb3V0ZXMvam9icyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgW0pvYnNSb3V0ZV0ubWFwKHJvdXRlTW9kYWw9PntcclxuXHRjb25zdCBSb3V0ZSA9IFJvdXRlcigpO1xyXG5cdC8vIGNvbnN0IE1vZGFsID0gbW9kYWwoUm91dGVTY2hlbWEpO1xyXG5cdGNvbnNvbGUubG9nKFJvdXRlcigpKVxyXG5cdGlmKE1vZGFsLnByZWZpeCkgUm91dGUucHJlZml4KHJvdXRlTW9kYWwucHJlZml4KTtcclxuXHRmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocm91dGVNb2RhbC5yb3V0ZXJzKSkge1xyXG5cdFx0Y29uc3QgW21ldGhvZCwgdXJsXSA9ICcnLmNvbmNhdChrZXkpLnNwbGl0KC9cXHMrL2dpKTtcclxuXHRcdFJvdXRlLm9uKHsgbWV0aG9kLCB1cmwsIC4uLnZhbHVlIH0sIGFzeW5jIChjeHQsIG5leHQpPT57IFxyXG5cdFx0fSkgXHJcblx0fVxyXG5cdHJldHVybiBSb3V0ZVxyXG59KVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./platforms/server/middleWares/routers.js\n");

/***/ })

};