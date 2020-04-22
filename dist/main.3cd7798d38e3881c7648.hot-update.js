exports.id = "main";
exports.modules = {

/***/ "./platforms/server/routes/component.js":
/*!**********************************************!*\
  !*** ./platforms/server/routes/component.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _server_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @server/controller */ \"./platforms/server/controller/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (schemaMap => ({\n  prefix: 'component',\n  routers: {\n    'GET /': {\n      schema: {\n        page: schemaMap.page,\n        limit: schemaMap.limit\n      },\n      action: _server_controller__WEBPACK_IMPORTED_MODULE_0__[\"Components\"].list\n    },\n    'GET /:id': {\n      schema: {\n        page: schemaMap.page,\n        limit: schemaMap.limit\n      },\n      action: _server_controller__WEBPACK_IMPORTED_MODULE_0__[\"Components\"].search\n    },\n    'POST /add': {\n      schema: {\n        name: schemaMap.name,\n        action: _server_controller__WEBPACK_IMPORTED_MODULE_0__[\"Components\"].add\n      }\n    },\n    'Delete /:id': {\n      schema: {\n        name: schemaMap.id\n      },\n      action: _server_controller__WEBPACK_IMPORTED_MODULE_0__[\"Components\"].add\n    }\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbGF0Zm9ybXMvc2VydmVyL3JvdXRlcy9jb21wb25lbnQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wbGF0Zm9ybXMvc2VydmVyL3JvdXRlcy9jb21wb25lbnQuanM/YWY4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnQHNlcnZlci9jb250cm9sbGVyJztcbmV4cG9ydCBkZWZhdWx0IChzY2hlbWFNYXApPT4oe1xuICAgIHByZWZpeDogICAnY29tcG9uZW50JyxcbiAgICByb3V0ZXJzOiB7XG4gICAgICAgICdHRVQgLyc6ICAgICAgICAgICAgeyBzY2hlbWE6IHsgcGFnZTogc2NoZW1hTWFwLnBhZ2UsIGxpbWl0OiBzY2hlbWFNYXAubGltaXQgfSwgYWN0aW9uOiBDb21wb25lbnRzLmxpc3QgfSxcbiAgICAgICAgJ0dFVCAvOmlkJzogICAgICAgICB7IHNjaGVtYTogeyBwYWdlOiBzY2hlbWFNYXAucGFnZSwgbGltaXQ6IHNjaGVtYU1hcC5saW1pdCB9LCBhY3Rpb246IENvbXBvbmVudHMuc2VhcmNoIH0sXG4gICAgICAgICdQT1NUIC9hZGQnOiAgICAgICAgeyBzY2hlbWE6IHsgbmFtZTogc2NoZW1hTWFwLm5hbWUsIGFjdGlvbjogQ29tcG9uZW50cy5hZGQgfX0sXG4gICAgICAgICdEZWxldGUgLzppZCc6ICAgICAgeyBzY2hlbWE6IHsgbmFtZTogc2NoZW1hTWFwLmlkIH0sIGFjdGlvbjogQ29tcG9uZW50cy5hZGQgfSxcbiAgICB9XG59KVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFGQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./platforms/server/routes/component.js\n");

/***/ })

};