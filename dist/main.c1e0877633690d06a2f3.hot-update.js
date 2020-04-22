exports.id = "main";
exports.modules = {

/***/ "./platforms/server/index.js":
/*!***********************************!*\
  !*** ./platforms/server/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ \"../node_modules/_koa@2.11.0@koa/lib/application.js\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middleWares__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./middleWares */ \"./platforms/server/middleWares/index.js\");\n\n\nconst app = new koa__WEBPACK_IMPORTED_MODULE_0___default.a();\napp.on('error', (err, ctx) => {\n  ctx.response.status = err.statusCode || err.status || 500;\n  ctx.response.body = {\n    message: err.message\n  };\n});\napp.use(Object(_middleWares__WEBPACK_IMPORTED_MODULE_1__[\"CorseAction\"])());\napp.use(Object(_middleWares__WEBPACK_IMPORTED_MODULE_1__[\"ErrorAction\"])());\napp.use(Object(_middleWares__WEBPACK_IMPORTED_MODULE_1__[\"HeaderAction\"])());\napp.use(async ctx => {\n  ctx.status = 404;\n  await ctx.render('404');\n});\napp.use(Object(_middleWares__WEBPACK_IMPORTED_MODULE_1__[\"LogsAction\"])());\napp.listen(8080, () => {\n  console.log('This server is running at http://localhost:' + 8080);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbGF0Zm9ybXMvc2VydmVyL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGxhdGZvcm1zL3NlcnZlci9pbmRleC5qcz9mYmRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBLb2EgZnJvbSAna29hJztcbmltcG9ydCB7IENvcnNlQWN0aW9uLCBFcnJvckFjdGlvbiwgSGVhZGVyQWN0aW9uLCBMb2dzQWN0aW9ufSAgZnJvbSAnLi9taWRkbGVXYXJlcyc7XG5cbmNvbnN0IGFwcCA9IG5ldyBLb2EoKVxuXG5hcHAub24oJ2Vycm9yJywgKGVyciwgY3R4KSA9PiB7XG4gICAgY3R4LnJlc3BvbnNlLnN0YXR1cyA9IGVyci5zdGF0dXNDb2RlIHx8IGVyci5zdGF0dXMgfHwgNTAwO1xuICAgIGN0eC5yZXNwb25zZS5ib2R5ID0ge1xuICAgICAgICBtZXNzYWdlOiBlcnIubWVzc2FnZVxuICAgIH07XG59KTtcbmFwcC51c2UoQ29yc2VBY3Rpb24oKSk7XG5hcHAudXNlKEVycm9yQWN0aW9uKCkpO1xuYXBwLnVzZShIZWFkZXJBY3Rpb24oKSk7XG5hcHAudXNlKGFzeW5jKGN0eCkgPT4ge1xuICAgIGN0eC5zdGF0dXMgPSA0MDRcbiAgICBhd2FpdCBjdHgucmVuZGVyKCc0MDQnKVxufSlcbmFwcC51c2UoTG9nc0FjdGlvbigpKTtcbmFwcC5saXN0ZW4oODA4MCwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdUaGlzIHNlcnZlciBpcyBydW5uaW5nIGF0IGh0dHA6Ly9sb2NhbGhvc3Q6JyArIDgwODApXG59KVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./platforms/server/index.js\n");

/***/ })

};