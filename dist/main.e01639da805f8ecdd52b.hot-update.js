exports.id = "main";
exports.modules = {

/***/ "./platforms/server/routes/jobs.js":
/*!*****************************************!*\
  !*** ./platforms/server/routes/jobs.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _server_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @server/controller */ \"./platforms/server/controller/index.js\");\n/* harmony import */ var mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mock */ \"../node_modules/_mock@0.1.1@mock/index.js\");\n/* harmony import */ var mock__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mock__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst mockMap = {\n  'abc': () => mock__WEBPACK_IMPORTED_MODULE_1___default.a.mock({\n    'list|1-10': [{\n      'id|+1': 1,\n      'email': '@EMAIL'\n    }]\n  })\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (schemaMap => ({\n  prefix: '/jobs',\n  routers: {\n    'GET /:id': {\n      schema: {},\n      action: _server_controller__WEBPACK_IMPORTED_MODULE_0__[\"Components\"].list,\n      proxy: '/api/v1/resourceGroup/{groupId}/jobs',\n      mock: mockMap.abc\n    }\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbGF0Zm9ybXMvc2VydmVyL3JvdXRlcy9qb2JzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGxhdGZvcm1zL3NlcnZlci9yb3V0ZXMvam9icy5qcz9iNmE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICdAc2VydmVyL2NvbnRyb2xsZXInO1xuaW1wb3J0IE1vY2sgZnJvbSAnbW9jayc7XG5jb25zdCBtb2NrTWFwID0ge1xuICAgICdhYmMnOiAoKT0+TW9jay5tb2NrKHtcbiAgICAgICAgJ2xpc3R8MS0xMCc6IFt7XG4gICAgICAgICAgICAnaWR8KzEnOiAxLFxuICAgICAgICAgICAgJ2VtYWlsJzogJ0BFTUFJTCdcbiAgICAgICAgfV1cbiAgICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IChzY2hlbWFNYXApPT4oe1xuICAgIHByZWZpeDogICAnL2pvYnMnLFxuICAgIHJvdXRlcnM6IHtcbiAgICAgICAgJ0dFVCAvOmlkJzogICAgICAgIHsgc2NoZW1hOiB7fSwgYWN0aW9uOiBDb21wb25lbnRzLmxpc3QsIHByb3h5OiAnL2FwaS92MS9yZXNvdXJjZUdyb3VwL3tncm91cElkfS9qb2JzJywgbW9jazogbW9ja01hcC5hYmN9LFxuICAgIH1cbn0pXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBREE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUZBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./platforms/server/routes/jobs.js\n");

/***/ })

};