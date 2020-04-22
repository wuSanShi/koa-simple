exports.id = "main";
exports.modules = {

/***/ "./platforms/server/routes/jobs.js":
/*!*****************************************!*\
  !*** ./platforms/server/routes/jobs.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _server_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @server/controller */ \"./platforms/server/controller/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (schemaMap => {\n  return {\n    prefix: 'jobs',\n    routers: {\n      'GET /aa': {\n        schema: {},\n        action: _server_controller__WEBPACK_IMPORTED_MODULE_0__[\"Components\"].list,\n        proxy: '/api/v1/resourceGroup/{groupId}/jobs',\n        mock: ''\n      }\n    }\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbGF0Zm9ybXMvc2VydmVyL3JvdXRlcy9qb2JzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGxhdGZvcm1zL3NlcnZlci9yb3V0ZXMvam9icy5qcz9iNmE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICdAc2VydmVyL2NvbnRyb2xsZXInO1xuZXhwb3J0IGRlZmF1bHQgKHNjaGVtYU1hcCk9PntcbiAgICByZXR1cm4ge1xuICAgICAgICBwcmVmaXg6ICAgJ2pvYnMnLFxuICAgICAgICByb3V0ZXJzOiB7XG4gICAgICAgICAgICAnR0VUIC9hYSc6ICAgICAgICB7IHNjaGVtYToge30sIGFjdGlvbjogQ29tcG9uZW50cy5saXN0LCBwcm94eTogJy9hcGkvdjEvcmVzb3VyY2VHcm91cC97Z3JvdXBJZH0vam9icycsIG1vY2s6ICcnfSxcbiAgICAgICAgfVxuICAgIH1cbn0gXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFGQTtBQU1BIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./platforms/server/routes/jobs.js\n");

/***/ })

};