exports.id = "main";
exports.modules = {

/***/ "./platforms/server/routes/jobs.js":
/*!*****************************************!*\
  !*** ./platforms/server/routes/jobs.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _server_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @server/controller */ \"./platforms/server/controller/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (schemaMap => ({\n  prefix: '/jobs',\n  routers: {\n    'GET /:id': {\n      schema: {},\n      action: _server_controller__WEBPACK_IMPORTED_MODULE_0__[\"Components\"].list,\n      proxy: '/api/v1/resourceGroup/{groupId}/jobs',\n      mock: ''\n    }\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbGF0Zm9ybXMvc2VydmVyL3JvdXRlcy9qb2JzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGxhdGZvcm1zL3NlcnZlci9yb3V0ZXMvam9icy5qcz9iNmE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICdAc2VydmVyL2NvbnRyb2xsZXInO1xuZXhwb3J0IGRlZmF1bHQgKHNjaGVtYU1hcCk9Pih7XG4gICAgcHJlZml4OiAgICcvam9icycsXG4gICAgcm91dGVyczoge1xuICAgICAgICAnR0VUIC86aWQnOiAgICAgICAgeyBzY2hlbWE6IHt9LCBhY3Rpb246IENvbXBvbmVudHMubGlzdCwgcHJveHk6ICcvYXBpL3YxL3Jlc291cmNlR3JvdXAve2dyb3VwSWR9L2pvYnMnLCBtb2NrOiAnJ30sXG4gICAgfVxufSlcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFGQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./platforms/server/routes/jobs.js\n");

/***/ })

};