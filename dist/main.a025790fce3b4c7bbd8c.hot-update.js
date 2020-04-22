exports.id = "main";
exports.modules = {

/***/ "./platforms/server/controller/index.js":
false,

/***/ "./platforms/server/index.js":
/*!***********************************!*\
  !*** ./platforms/server/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ \"../node_modules/_koa@2.11.0@koa/lib/application.js\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middleWares__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./middleWares */ \"./platforms/server/middleWares/index.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './middleWares/routes'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\nconst app = new koa__WEBPACK_IMPORTED_MODULE_0___default.a();\napp.on('error', (err, ctx) => {\n  ctx.response.status = err.statusCode || err.status || 500;\n  ctx.response.body = {\n    message: err.message\n  };\n});\napp.use(Object(_middleWares__WEBPACK_IMPORTED_MODULE_1__[\"CorseAction\"])());\napp.use(Object(_middleWares__WEBPACK_IMPORTED_MODULE_1__[\"ErrorAction\"])());\napp.use(Object(_middleWares__WEBPACK_IMPORTED_MODULE_1__[\"HeaderAction\"])());\napp.use(async ctx => {\n  ctx.status = 404;\n  await ctx.render('404');\n});\nconsole.log(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './middleWares/routes'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())); // Routers.forEach(route=>app.use(route.routes()))\n\napp.use(Object(_middleWares__WEBPACK_IMPORTED_MODULE_1__[\"LogsAction\"])());\napp.listen(8080, () => {\n  console.log('This server is running at http://localhost:' + 8080);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbGF0Zm9ybXMvc2VydmVyL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGxhdGZvcm1zL3NlcnZlci9pbmRleC5qcz9mYmRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBLb2EgZnJvbSAna29hJztcbmltcG9ydCB7IENvcnNlQWN0aW9uLCBFcnJvckFjdGlvbiwgSGVhZGVyQWN0aW9uLCBMb2dzQWN0aW9ufSAgZnJvbSAnLi9taWRkbGVXYXJlcyc7XG5pbXBvcnQgUm91dGVycyAgZnJvbSAnLi9taWRkbGVXYXJlcy9yb3V0ZXMnO1xuXG5jb25zdCBhcHAgPSBuZXcgS29hKClcblxuYXBwLm9uKCdlcnJvcicsIChlcnIsIGN0eCkgPT4ge1xuICAgIGN0eC5yZXNwb25zZS5zdGF0dXMgPSBlcnIuc3RhdHVzQ29kZSB8fCBlcnIuc3RhdHVzIHx8IDUwMDtcbiAgICBjdHgucmVzcG9uc2UuYm9keSA9IHtcbiAgICAgICAgbWVzc2FnZTogZXJyLm1lc3NhZ2VcbiAgICB9O1xufSk7XG5hcHAudXNlKENvcnNlQWN0aW9uKCkpO1xuYXBwLnVzZShFcnJvckFjdGlvbigpKTtcbmFwcC51c2UoSGVhZGVyQWN0aW9uKCkpO1xuYXBwLnVzZShhc3luYyhjdHgpID0+IHtcbiAgICBjdHguc3RhdHVzID0gNDA0XG4gICAgYXdhaXQgY3R4LnJlbmRlcignNDA0Jylcbn0pXG5jb25zb2xlLmxvZyhSb3V0ZXJzKVxuLy8gUm91dGVycy5mb3JFYWNoKHJvdXRlPT5hcHAudXNlKHJvdXRlLnJvdXRlcygpKSlcbmFwcC51c2UoTG9nc0FjdGlvbigpKTtcbmFwcC5saXN0ZW4oODA4MCwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdUaGlzIHNlcnZlciBpcyBydW5uaW5nIGF0IGh0dHA6Ly9sb2NhbGhvc3Q6JyArIDgwODApXG59KVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./platforms/server/index.js\n");

/***/ }),

/***/ "./platforms/server/middleWares/routers.js":
false,

/***/ "./platforms/server/routes/jobs.js":
false

};