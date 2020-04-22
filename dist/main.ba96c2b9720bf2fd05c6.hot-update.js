exports.id = "main";
exports.modules = {

/***/ "./platforms/server/controller/index.js":
/*!**********************************************!*\
  !*** ./platforms/server/controller/index.js ***!
  \**********************************************/
/*! exports provided: default, Product, LayOut, Components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Product\", function() { return Product; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LayOut\", function() { return LayOut; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Components\", function() { return Components; });\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (ctx, next) => {\n  res.render('index.html');\n});\nconst Product = {\n  list: async (ctx, next) => {},\n  add: async (ctx, next) => {},\n  del: async (ctx, next) => {}\n};\nconst LayOut = {\n  list: async (ctx, next) => {},\n  add: async (ctx, next) => {},\n  del: async (ctx, next) => {}\n};\nconst Components = {\n  list: async (ctx, next) => {},\n  upload: async (ctx, next) => {},\n  add: async (ctx, next) => {},\n  del: async (ctx, next) => {}\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbGF0Zm9ybXMvc2VydmVyL2NvbnRyb2xsZXIvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wbGF0Zm9ybXMvc2VydmVyL2NvbnRyb2xsZXIvaW5kZXguanM/YjVlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChjdHgsIG5leHQpPT57XHJcbiAgICByZXMucmVuZGVyKCdpbmRleC5odG1sJyk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3QgPSAge1xyXG4gICAgbGlzdDogYXN5bmMgKGN0eCwgbmV4dCkgPT4geyB9LFxyXG4gICAgYWRkOiAgYXN5bmMgKGN0eCwgbmV4dCkgPT4geyB9LFxyXG4gICAgZGVsOiAgYXN5bmMgKGN0eCwgbmV4dCkgPT4geyB9LFxyXG59XHJcbmV4cG9ydCBjb25zdCBMYXlPdXQgPSB7XHJcbiAgICBsaXN0OiBhc3luYyAoY3R4LCBuZXh0KSA9PiB7IH0sXHJcbiAgICBhZGQ6ICBhc3luYyAoY3R4LCBuZXh0KSA9PiB7IH0sXHJcbiAgICBkZWw6ICBhc3luYyAoY3R4LCBuZXh0KSA9PiB7IH0sXHJcbn1cclxuZXhwb3J0IGNvbnN0IENvbXBvbmVudHMgPSAge1xyXG4gICAgbGlzdDogYXN5bmMgKGN0eCwgbmV4dCkgPT4geyB9LFxyXG4gICAgdXBsb2FkOiBhc3luYyAoY3R4LCBuZXh0KSA9PiB7IH0sXHJcbiAgICBhZGQ6ICBhc3luYyAoY3R4LCBuZXh0KSA9PiB7IH0sXHJcbiAgICBkZWw6ICBhc3luYyAoY3R4LCBuZXh0KSA9PiB7IH0sXHJcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./platforms/server/controller/index.js\n");

/***/ }),

/***/ "./platforms/server/middleWares/routers.js":
/*!*************************************************!*\
  !*** ./platforms/server/middleWares/routers.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/Router */ \"./core/Router.js\");\n/* harmony import */ var _server_config_routeSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @server/config/routeSchema */ \"./platforms/server/config/routeSchema.js\");\n/* harmony import */ var _server_routes_jobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @server/routes/jobs */ \"./platforms/server/routes/jobs.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_server_routes_jobs__WEBPACK_IMPORTED_MODULE_2__[\"default\"]].map(routeModal => {\n  const Route = Object(_core_Router__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const Modal = modal(_server_config_routeSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  if (Modal.prefix) Route.prefix(routeModal.prefix);\n\n  for (let [key, value] of Object.entries(routeModal.routers)) {\n    const [method, url] = ''.concat(key).split(/\\s+/gi);\n    Route.on({\n      method,\n      url,\n      ...value\n    }, async (cxt, next) => {\n      debugger;\n    });\n  }\n\n  return Route;\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbGF0Zm9ybXMvc2VydmVyL21pZGRsZVdhcmVzL3JvdXRlcnMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wbGF0Zm9ybXMvc2VydmVyL21pZGRsZVdhcmVzL3JvdXRlcnMuanM/ZDRkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gJ0Bjb3JlL1JvdXRlcic7XHJcbmltcG9ydCBSb3V0ZVNjaGVtYSBmcm9tICdAc2VydmVyL2NvbmZpZy9yb3V0ZVNjaGVtYSc7XHJcbmltcG9ydCBKb2JzUm91dGUgZnJvbSAnQHNlcnZlci9yb3V0ZXMvam9icyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgW0pvYnNSb3V0ZV0ubWFwKHJvdXRlTW9kYWw9PntcclxuXHRjb25zdCBSb3V0ZSA9IFJvdXRlcigpO1xyXG5cdGNvbnN0IE1vZGFsID0gbW9kYWwoUm91dGVTY2hlbWEpO1xyXG5cdGlmKE1vZGFsLnByZWZpeCkgUm91dGUucHJlZml4KHJvdXRlTW9kYWwucHJlZml4KTtcclxuXHRmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocm91dGVNb2RhbC5yb3V0ZXJzKSkge1xyXG5cdFx0Y29uc3QgW21ldGhvZCwgdXJsXSA9ICcnLmNvbmNhdChrZXkpLnNwbGl0KC9cXHMrL2dpKTtcclxuXHRcdFJvdXRlLm9uKHsgbWV0aG9kLCB1cmwsIC4uLnZhbHVlIH0sIGFzeW5jIChjeHQsIG5leHQpPT57IFxyXG5cdFx0XHRkZWJ1Z2dlclxyXG5cdFx0fSkgXHJcblx0fVxyXG5cdHJldHVybiBSb3V0ZVxyXG59KVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./platforms/server/middleWares/routers.js\n");

/***/ }),

/***/ "./platforms/server/routes/jobs.js":
/*!*****************************************!*\
  !*** ./platforms/server/routes/jobs.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _server_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @server/controller */ \"./platforms/server/controller/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (schemaMap => {\n  return {\n    prefix: 'jobs',\n    routers: {\n      'POST /:id': {\n        schema: {},\n        action: _server_controller__WEBPACK_IMPORTED_MODULE_0__[\"Components\"].list,\n        proxy: '/api/v1/resourceGroup/{groupId}/jobs',\n        mock: ''\n      }\n    }\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbGF0Zm9ybXMvc2VydmVyL3JvdXRlcy9qb2JzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGxhdGZvcm1zL3NlcnZlci9yb3V0ZXMvam9icy5qcz9iNmE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICdAc2VydmVyL2NvbnRyb2xsZXInO1xuZXhwb3J0IGRlZmF1bHQgKHNjaGVtYU1hcCk9PntcbiAgICByZXR1cm4ge1xuICAgICAgICBwcmVmaXg6ICAgJ2pvYnMnLFxuICAgICAgICByb3V0ZXJzOiB7XG4gICAgICAgICAgICAnUE9TVCAvOmlkJzogICAgICAgIHsgc2NoZW1hOiB7fSwgYWN0aW9uOiBDb21wb25lbnRzLmxpc3QsIHByb3h5OiAnL2FwaS92MS9yZXNvdXJjZUdyb3VwL3tncm91cElkfS9qb2JzJywgbW9jazogJyd9LFxuICAgICAgICB9XG4gICAgfVxufSBcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUZBO0FBTUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./platforms/server/routes/jobs.js\n");

/***/ })

};