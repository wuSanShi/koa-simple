exports.id = "main";
exports.modules = {

/***/ "./platforms/server/index.js":
/*!***********************************!*\
  !*** ./platforms/server/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ \"../node_modules/_koa@2.11.0@koa/lib/application.js\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-router */ \"../node_modules/_koa-router@7.4.0@koa-router/lib/router.js\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _middleWares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middleWares */ \"./platforms/server/middleWares/index.js\");\n/* harmony import */ var _middleWares_routers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./middleWares/routers */ \"./platforms/server/middleWares/routers.js\");\n\n\n\n\nconst app = new koa__WEBPACK_IMPORTED_MODULE_0___default.a();\napp.on('error', (err, ctx) => {\n  ctx.response.status = err.statusCode || err.status || 500;\n  ctx.response.body = {\n    message: err.message\n  };\n});\nvar router = new koa_router__WEBPACK_IMPORTED_MODULE_1___default.a();\nrouter.get('/test/users', async (cxt, next) => {\n  console.log(123);\n  cxt.body = {\n    success: true,\n    data\n  };\n});\napp.use(router.routes()).use(router.allowedMethods());\n_middleWares_routers__WEBPACK_IMPORTED_MODULE_3__[\"default\"].forEach(route => {\n  route && app.use(route.routes());\n});\napp.use(Object(_middleWares__WEBPACK_IMPORTED_MODULE_2__[\"LogsAction\"])());\napp.listen(8080, () => {\n  console.log('This server is running at http://localhost:' + 8080);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbGF0Zm9ybXMvc2VydmVyL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGxhdGZvcm1zL3NlcnZlci9pbmRleC5qcz9mYmRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBLb2EgZnJvbSAna29hJztcbmltcG9ydCBLb2FSb3V0ZXIgZnJvbSAna29hLXJvdXRlcic7XG5pbXBvcnQgeyBDb3JzZUFjdGlvbiwgRXJyb3JBY3Rpb24sIEhlYWRlckFjdGlvbiwgTG9nc0FjdGlvbn0gIGZyb20gJy4vbWlkZGxlV2FyZXMnO1xuaW1wb3J0IFJvdXRlcnMgZnJvbSAnLi9taWRkbGVXYXJlcy9yb3V0ZXJzJztcblxuY29uc3QgYXBwID0gbmV3IEtvYSgpXG5cbmFwcC5vbignZXJyb3InLCAoZXJyLCBjdHgpID0+IHtcbiAgICBjdHgucmVzcG9uc2Uuc3RhdHVzID0gZXJyLnN0YXR1c0NvZGUgfHwgZXJyLnN0YXR1cyB8fCA1MDA7XG4gICAgY3R4LnJlc3BvbnNlLmJvZHkgPSB7XG4gICAgICAgIG1lc3NhZ2U6IGVyci5tZXNzYWdlXG4gICAgfTtcbn0pO1xuXG5cbnZhciByb3V0ZXIgPSBuZXcgS29hUm91dGVyKClcbnJvdXRlci5nZXQoJy90ZXN0L3VzZXJzJywgYXN5bmMoY3h0LCBuZXh0KT0+e1xuICAgIGNvbnNvbGUubG9nKDEyMylcbiAgICBjeHQuYm9keSA9IHtcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgZGF0YVxuICAgICAgfVxufSlcbmFwcC51c2Uocm91dGVyLnJvdXRlcygpKS51c2Uocm91dGVyLmFsbG93ZWRNZXRob2RzKCkpO1xuUm91dGVycy5mb3JFYWNoKHJvdXRlPT57XG4gICAgcm91dGUgJiYgYXBwLnVzZShyb3V0ZS5yb3V0ZXMoKSlcbn0pXG5hcHAudXNlKExvZ3NBY3Rpb24oKSk7XG5hcHAubGlzdGVuKDgwODAsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnVGhpcyBzZXJ2ZXIgaXMgcnVubmluZyBhdCBodHRwOi8vbG9jYWxob3N0OicgKyA4MDgwKVxufSlcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./platforms/server/index.js\n");

/***/ })

};