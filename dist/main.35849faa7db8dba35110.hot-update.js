exports.id = "main";
exports.modules = {

/***/ "./platforms/server/routes/jobs.js":
/*!*****************************************!*\
  !*** ./platforms/server/routes/jobs.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _server_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @server/controller */ \"./platforms/server/controller/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (schemaMap => {\n  return {\n    prefix: '/jobs',\n    routers: {\n      'GET /:id': {\n        schema: {},\n        action: _server_controller__WEBPACK_IMPORTED_MODULE_0__[\"Components\"].list,\n        proxy: '/api/v1/resourceGroup/{groupId}/jobs',\n        mock: ''\n      }\n    }\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbGF0Zm9ybXMvc2VydmVyL3JvdXRlcy9qb2JzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGxhdGZvcm1zL3NlcnZlci9yb3V0ZXMvam9icy5qcz9iNmE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICdAc2VydmVyL2NvbnRyb2xsZXInO1xuZXhwb3J0IGRlZmF1bHQgKHNjaGVtYU1hcCk9PntcbiAgICByZXR1cm4ge1xuICAgICAgICBwcmVmaXg6ICAgJy9qb2JzJyxcbiAgICAgICAgcm91dGVyczoge1xuICAgICAgICAgICAgJ0dFVCAvOmlkJzogICAgICAgIHsgc2NoZW1hOiB7fSwgYWN0aW9uOiBDb21wb25lbnRzLmxpc3QsIHByb3h5OiAnL2FwaS92MS9yZXNvdXJjZUdyb3VwL3tncm91cElkfS9qb2JzJywgbW9jazogJyd9LFxuICAgICAgICB9XG4gICAgfVxufSBcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUZBO0FBTUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./platforms/server/routes/jobs.js\n");

/***/ })

};