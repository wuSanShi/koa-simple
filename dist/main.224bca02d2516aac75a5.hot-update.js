exports.id = "main";
exports.modules = {

/***/ "./core/Router.js":
/*!************************!*\
  !*** ./core/Router.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ \"../node_modules/_koa-router@7.4.0@koa-router/lib/router.js\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Router extends koa_router__WEBPACK_IMPORTED_MODULE_0___default.a {\n  constructor(props) {\n    super(props);\n  }\n\n  handle(param, controller) {\n    const {\n      method = 'get',\n      url\n    } = param;\n    const type = ''.concat(method).toLocaleLowerCase().trim();\n    console.dir('1231233', type);\n\n    switch (type) {\n      default:\n        super[type](url, this.emit(param, controller));\n        break;\n    }\n  }\n\n  emit(param, controller) {\n    return async (cxt, next) => {\n      cxt.apiProps = param;\n\n      try {\n        (await controller) && controller(cxt, next);\n      } catch (err) {\n        ctx.response.status = err.statusCode || err.status || 500;\n        ctx.response.body = {\n          message: err.message\n        };\n      }\n    };\n  }\n\n}\n\nconst NewRouter = opts => {\n  if (!(undefined instanceof NewRouter)) return new Router(opts);\n  undefined.opts = opts || {};\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewRouter);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb3JlL1JvdXRlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvcmUvUm91dGVyLmpzP2QxZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEtvYVJvdXRlciBmcm9tICdrb2Etcm91dGVyJztcclxuY2xhc3MgUm91dGVyIGV4dGVuZHMgS29hUm91dGVye1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuICAgIGhhbmRsZShwYXJhbSwgY29udHJvbGxlcil7XHJcbiAgICAgICAgY29uc3Qge21ldGhvZD0nZ2V0JywgdXJsIH0gPSBwYXJhbTtcclxuICAgICAgICBjb25zdCB0eXBlID0gJycuY29uY2F0KG1ldGhvZCkudG9Mb2NhbGVMb3dlckNhc2UoKS50cmltKCk7XHJcbiAgICAgICAgY29uc29sZS5kaXIoJzEyMzEyMzMnLHR5cGUpO1xyXG4gICAgICAgIHN3aXRjaCh0eXBlKXtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHN1cGVyW3R5cGVdKHVybCwgdGhpcy5lbWl0KHBhcmFtLCBjb250cm9sbGVyKSlcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbWl0KHBhcmFtLCBjb250cm9sbGVyKXtcclxuICAgICAgICByZXR1cm4gYXN5bmMgKGN4dCwgbmV4dCk9PntcclxuICAgICAgICAgICAgY3h0LmFwaVByb3BzID0gcGFyYW07XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgYXdhaXQgY29udHJvbGxlciAmJiBjb250cm9sbGVyKGN4dCwgbmV4dCk7XHJcbiAgICAgICAgICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgICAgICAgICAgY3R4LnJlc3BvbnNlLnN0YXR1cyA9IGVyci5zdGF0dXNDb2RlIHx8IGVyci5zdGF0dXMgfHwgNTAwO1xyXG4gICAgICAgICAgICAgICAgY3R4LnJlc3BvbnNlLmJvZHkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuY29uc3QgTmV3Um91dGVyID0gKG9wdHMpPT57XHJcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgTmV3Um91dGVyKSkgIHJldHVybiBuZXcgUm91dGVyKG9wdHMpO1xyXG4gICAgdGhpcy5vcHRzID0gb3B0cyB8fCB7fTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBOZXdSb3V0ZXJcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQTNCQTtBQUNBO0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./core/Router.js\n");

/***/ })

};