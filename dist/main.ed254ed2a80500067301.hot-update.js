exports.id = "main";
exports.modules = {

/***/ "./platforms/server/middleWares/routers.js":
/*!*************************************************!*\
  !*** ./platforms/server/middleWares/routers.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/Router */ \"./core/Router.js\");\n/* harmony import */ var _server_config_routeSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @server/config/routeSchema */ \"./platforms/server/config/routeSchema.js\");\n/* harmony import */ var _server_routes_jobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @server/routes/jobs */ \"./platforms/server/routes/jobs.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_server_routes_jobs__WEBPACK_IMPORTED_MODULE_2__[\"default\"]].map(routeFun => {\n  const Route = Object(_core_Router__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const routeInfo = routeFun(_server_config_routeSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  console.log(routeInfo);\n  if (routeInfo.prefix) Route.prefix(routeInfo.prefix);\n\n  for (let [key, value] of Object.entries(routeInfo.routers)) {\n    const [method, url] = ''.concat(key).split(/\\s+/gi);\n    Route.on({\n      method,\n      url,\n      ...value\n    }, async (cxt, next) => {});\n  }\n\n  return Route;\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbGF0Zm9ybXMvc2VydmVyL21pZGRsZVdhcmVzL3JvdXRlcnMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wbGF0Zm9ybXMvc2VydmVyL21pZGRsZVdhcmVzL3JvdXRlcnMuanM/ZDRkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gJ0Bjb3JlL1JvdXRlcic7XHJcbmltcG9ydCBSb3V0ZVNjaGVtYSBmcm9tICdAc2VydmVyL2NvbmZpZy9yb3V0ZVNjaGVtYSc7XHJcbmltcG9ydCBKb2JzUm91dGUgZnJvbSAnQHNlcnZlci9yb3V0ZXMvam9icyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgW0pvYnNSb3V0ZV0ubWFwKHJvdXRlRnVuPT57XHJcblx0Y29uc3QgUm91dGUgPSBSb3V0ZXIoKTtcclxuXHRjb25zdCByb3V0ZUluZm8gPSByb3V0ZUZ1bihSb3V0ZVNjaGVtYSk7XHJcblx0Y29uc29sZS5sb2cocm91dGVJbmZvKVxyXG5cdGlmKHJvdXRlSW5mby5wcmVmaXgpIFJvdXRlLnByZWZpeChyb3V0ZUluZm8ucHJlZml4KTtcclxuXHRmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocm91dGVJbmZvLnJvdXRlcnMpKSB7XHJcblx0XHRjb25zdCBbbWV0aG9kLCB1cmxdID0gJycuY29uY2F0KGtleSkuc3BsaXQoL1xccysvZ2kpO1xyXG5cdFx0Um91dGUub24oeyBtZXRob2QsIHVybCwgLi4udmFsdWUgfSwgYXN5bmMgKGN4dCwgbmV4dCk9PnsgXHJcblx0XHR9KSBcclxuXHR9XHJcblx0cmV0dXJuIFJvdXRlXHJcbn0pXHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./platforms/server/middleWares/routers.js\n");

/***/ })

};