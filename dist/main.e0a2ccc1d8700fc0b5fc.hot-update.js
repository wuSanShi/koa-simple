exports.id = "main";
exports.modules = {

/***/ "./platforms/server/middleWares/routers.js":
/*!*************************************************!*\
  !*** ./platforms/server/middleWares/routers.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/Router */ \"./core/Router.js\");\n/* harmony import */ var _server_config_routeSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @server/config/routeSchema */ \"./platforms/server/config/routeSchema.js\");\n/* harmony import */ var _server_routes_jobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @server/routes/jobs */ \"./platforms/server/routes/jobs.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_server_routes_jobs__WEBPACK_IMPORTED_MODULE_2__[\"default\"]].map(routeItem => {\n  const Route = Object(_core_Router__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  if (routeItem.prefix) Route.prefix(routeItem.prefix);\n  console.log(routeItem.routers); // for (let [key, value] of Object.entries(routeItem.routers)) {\n  // \tconst [method, url] = ''.concat(key).split(/\\s+/gi);\n  // \tRoute.on({ method, url, ...value }, async (cxt, next)=>{ \n  // \t}) \n  // }\n\n  return Route;\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbGF0Zm9ybXMvc2VydmVyL21pZGRsZVdhcmVzL3JvdXRlcnMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wbGF0Zm9ybXMvc2VydmVyL21pZGRsZVdhcmVzL3JvdXRlcnMuanM/ZDRkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gJ0Bjb3JlL1JvdXRlcic7XHJcbmltcG9ydCBSb3V0ZVNjaGVtYSBmcm9tICdAc2VydmVyL2NvbmZpZy9yb3V0ZVNjaGVtYSc7XHJcbmltcG9ydCBKb2JzUm91dGUgZnJvbSAnQHNlcnZlci9yb3V0ZXMvam9icyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgW0pvYnNSb3V0ZV0ubWFwKHJvdXRlSXRlbT0+e1xyXG5cdGNvbnN0IFJvdXRlID0gUm91dGVyKCk7XHJcblx0aWYocm91dGVJdGVtLnByZWZpeCkgUm91dGUucHJlZml4KHJvdXRlSXRlbS5wcmVmaXgpO1xyXG5cdGNvbnNvbGUubG9nKHJvdXRlSXRlbS5yb3V0ZXJzKVxyXG5cdC8vIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhyb3V0ZUl0ZW0ucm91dGVycykpIHtcclxuXHQvLyBcdGNvbnN0IFttZXRob2QsIHVybF0gPSAnJy5jb25jYXQoa2V5KS5zcGxpdCgvXFxzKy9naSk7XHJcblx0Ly8gXHRSb3V0ZS5vbih7IG1ldGhvZCwgdXJsLCAuLi52YWx1ZSB9LCBhc3luYyAoY3h0LCBuZXh0KT0+eyBcclxuXHQvLyBcdH0pIFxyXG5cdC8vIH1cclxuXHRyZXR1cm4gUm91dGVcclxufSlcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./platforms/server/middleWares/routers.js\n");

/***/ })

};