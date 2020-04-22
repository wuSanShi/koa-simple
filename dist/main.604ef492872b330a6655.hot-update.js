exports.id = "main";
exports.modules = {

/***/ "./core/Router.js":
/*!************************!*\
  !*** ./core/Router.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ \"../node_modules/_koa-router@7.4.0@koa-router/lib/router.js\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Router extends koa_router__WEBPACK_IMPORTED_MODULE_0___default.a {\n  constructor(props) {\n    super(props);\n  }\n\n  on(param, controller) {\n    const {\n      method = 'get',\n      url\n    } = param;\n    const type = ''.concat(method).toLocaleLowerCase().trim();\n\n    switch (type) {\n      default:\n        super[type](url, this.emit(param, controller));\n        break;\n    }\n  }\n\n  emit(param, controller) {\n    return async (ctx, next) => {\n      ctx.apiProps = param;\n\n      try {\n        (await controller) && controller(ctx, next);\n      } catch (err) {\n        ctx.response.status = err.statusCode || err.status || 500;\n        ctx.response.body = {\n          message: err.message\n        };\n      }\n    };\n  }\n\n}\n\nconst NewRouter = opts => {\n  if (!(undefined instanceof NewRouter)) return new Router(opts);\n  undefined.opts = opts || {};\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewRouter);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb3JlL1JvdXRlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvcmUvUm91dGVyLmpzP2QxZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEtvYVJvdXRlciBmcm9tICdrb2Etcm91dGVyJztcclxuY2xhc3MgUm91dGVyIGV4dGVuZHMgS29hUm91dGVye1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuICAgIG9uKHBhcmFtLCBjb250cm9sbGVyKXtcclxuICAgICAgICBjb25zdCB7bWV0aG9kPSdnZXQnLCB1cmwgfSA9IHBhcmFtO1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSAnJy5jb25jYXQobWV0aG9kKS50b0xvY2FsZUxvd2VyQ2FzZSgpLnRyaW0oKTtcclxuICAgICAgICBzd2l0Y2godHlwZSl7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBzdXBlclt0eXBlXSh1cmwsIHRoaXMuZW1pdChwYXJhbSwgY29udHJvbGxlcikpXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZW1pdChwYXJhbSwgY29udHJvbGxlcil7XHJcbiAgICAgICAgcmV0dXJuIGFzeW5jIChjdHgsIG5leHQpPT57XHJcbiAgICAgICAgICAgIGN0eC5hcGlQcm9wcyA9IHBhcmFtO1xyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgIGF3YWl0IGNvbnRyb2xsZXIgJiYgY29udHJvbGxlcihjdHgsIG5leHQpO1xyXG4gICAgICAgICAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgICAgIGN0eC5yZXNwb25zZS5zdGF0dXMgPSBlcnIuc3RhdHVzQ29kZSB8fCBlcnIuc3RhdHVzIHx8IDUwMDtcclxuICAgICAgICAgICAgICAgIGN0eC5yZXNwb25zZS5ib2R5ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVyci5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmNvbnN0IE5ld1JvdXRlciA9IChvcHRzKT0+e1xyXG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE5ld1JvdXRlcikpICByZXR1cm4gbmV3IFJvdXRlcihvcHRzKTtcclxuICAgIHRoaXMub3B0cyA9IG9wdHMgfHwge307XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTmV3Um91dGVyXHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBMUJBO0FBQ0E7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./core/Router.js\n");

/***/ })

};