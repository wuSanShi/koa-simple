exports.id = "main";
exports.modules = {

/***/ "./platforms/server/routes/component.js":
/*!**********************************************!*\
  !*** ./platforms/server/routes/component.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _server_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @server/controller */ \"./platforms/server/controller/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (schemaMap => ({\n  prefix: 'component',\n  routers: {\n    'GET /': {\n      schema: {\n        page: schemaMap.page,\n        limit: schemaMap.limit\n      },\n      action: _server_controller__WEBPACK_IMPORTED_MODULE_0__[\"Components\"].list\n    },\n    'GET /:id': {\n      schema: {\n        page: schemaMap.page,\n        limit: schemaMap.limit\n      },\n      action: _server_controller__WEBPACK_IMPORTED_MODULE_0__[\"Components\"].list\n    },\n    'POST /add': {\n      schema: {\n        name: schemaMap.name,\n        action: _server_controller__WEBPACK_IMPORTED_MODULE_0__[\"Components\"].add\n      }\n    },\n    'Delete /:id': {\n      schema: {\n        name: schemaMap.id\n      },\n      action: _server_controller__WEBPACK_IMPORTED_MODULE_0__[\"Components\"].add\n    }\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbGF0Zm9ybXMvc2VydmVyL3JvdXRlcy9jb21wb25lbnQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wbGF0Zm9ybXMvc2VydmVyL3JvdXRlcy9jb21wb25lbnQuanM/YWY4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnQHNlcnZlci9jb250cm9sbGVyJztcbmV4cG9ydCBkZWZhdWx0IChzY2hlbWFNYXApPT4oe1xuICAgIHByZWZpeDogICAnY29tcG9uZW50JyxcbiAgICByb3V0ZXJzOiB7XG4gICAgICAgICdHRVQgLyc6ICAgICAgICAgICAgeyBzY2hlbWE6IHsgcGFnZTogc2NoZW1hTWFwLnBhZ2UsIGxpbWl0OiBzY2hlbWFNYXAubGltaXQgfSwgYWN0aW9uOiBDb21wb25lbnRzLmxpc3QgfSxcbiAgICAgICAgJ0dFVCAvOmlkJzogICAgICAgICB7IHNjaGVtYTogeyBwYWdlOiBzY2hlbWFNYXAucGFnZSwgbGltaXQ6IHNjaGVtYU1hcC5saW1pdCB9LCBhY3Rpb246IENvbXBvbmVudHMubGlzdCB9LFxuICAgICAgICAnUE9TVCAvYWRkJzogICAgICAgIHsgc2NoZW1hOiB7IG5hbWU6IHNjaGVtYU1hcC5uYW1lLCBhY3Rpb246IENvbXBvbmVudHMuYWRkIH19LFxuICAgICAgICAnRGVsZXRlIC86aWQnOiAgICAgIHsgc2NoZW1hOiB7IG5hbWU6IHNjaGVtYU1hcC5pZCB9LCBhY3Rpb246IENvbXBvbmVudHMuYWRkIH0sXG4gICAgfVxufSlcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBRkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./platforms/server/routes/component.js\n");

/***/ })

};