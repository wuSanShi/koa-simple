exports.id = "main";
exports.modules = {

/***/ "./platforms/server/index.js":
/*!***********************************!*\
  !*** ./platforms/server/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ \"../node_modules/_koa@2.11.0@koa/lib/application.js\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-router */ \"../node_modules/_koa-router@7.4.0@koa-router/lib/router.js\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _middleWares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middleWares */ \"./platforms/server/middleWares/index.js\");\n/* harmony import */ var _middleWares_routers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./middleWares/routers */ \"./platforms/server/middleWares/routers.js\");\n\n\n\n\nconst app = new koa__WEBPACK_IMPORTED_MODULE_0___default.a();\nvar router = new koa_router__WEBPACK_IMPORTED_MODULE_1___default.a();\nrouter.get('/test/users', async (cxt, next) => {\n  console.log(123);\n  cxt.body = {\n    success: true,\n    data\n  };\n});\napp.use(router.routes()).use(router.allowedMethods());\n_middleWares_routers__WEBPACK_IMPORTED_MODULE_3__[\"default\"].forEach(route => {\n  route && app.use(route.routes());\n});\napp.use(Object(_middleWares__WEBPACK_IMPORTED_MODULE_2__[\"LogsAction\"])());\napp.listen(8080, () => {\n  console.log('This server is running at http://localhost:' + 8080);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbGF0Zm9ybXMvc2VydmVyL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGxhdGZvcm1zL3NlcnZlci9pbmRleC5qcz9mYmRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBLb2EgZnJvbSAna29hJztcbmltcG9ydCBLb2FSb3V0ZXIgZnJvbSAna29hLXJvdXRlcic7XG5pbXBvcnQgeyBDb3JzZUFjdGlvbiwgRXJyb3JBY3Rpb24sIEhlYWRlckFjdGlvbiwgTG9nc0FjdGlvbn0gIGZyb20gJy4vbWlkZGxlV2FyZXMnO1xuaW1wb3J0IFJvdXRlcnMgZnJvbSAnLi9taWRkbGVXYXJlcy9yb3V0ZXJzJztcblxuY29uc3QgYXBwID0gbmV3IEtvYSgpXG5cblxuXG52YXIgcm91dGVyID0gbmV3IEtvYVJvdXRlcigpXG5yb3V0ZXIuZ2V0KCcvdGVzdC91c2VycycsIGFzeW5jKGN4dCwgbmV4dCk9PntcbiAgICBjb25zb2xlLmxvZygxMjMpXG4gICAgY3h0LmJvZHkgPSB7XG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIGRhdGFcbiAgICAgIH1cbn0pXG5hcHAudXNlKHJvdXRlci5yb3V0ZXMoKSkudXNlKHJvdXRlci5hbGxvd2VkTWV0aG9kcygpKTtcblJvdXRlcnMuZm9yRWFjaChyb3V0ZT0+e1xuICAgIHJvdXRlICYmIGFwcC51c2Uocm91dGUucm91dGVzKCkpXG59KVxuYXBwLnVzZShMb2dzQWN0aW9uKCkpO1xuYXBwLmxpc3Rlbig4MDgwLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1RoaXMgc2VydmVyIGlzIHJ1bm5pbmcgYXQgaHR0cDovL2xvY2FsaG9zdDonICsgODA4MClcbn0pXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./platforms/server/index.js\n");

/***/ })

};