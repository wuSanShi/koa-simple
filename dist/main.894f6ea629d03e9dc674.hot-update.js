exports.id = "main";
exports.modules = {

/***/ "../node_modules/_mock@0.1.1@mock sync recursive":
/*!*********************************************!*\
  !*** ../node_modules/_mock@0.1.1@mock sync ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"../node_modules/_mock@0.1.1@mock sync recursive\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL19tb2NrQDAuMS4xQG1vY2sgc3luYyByZWN1cnNpdmUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL19tb2NrQDAuMS4xQG1vY2sgc3luYz9jMGZiIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUNvbnRleHQocmVxKSB7XG5cdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHR0aHJvdyBlO1xufVxud2VicGFja0VtcHR5Q29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUNvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG53ZWJwYWNrRW1wdHlDb250ZXh0LmlkID0gXCIuLi9ub2RlX21vZHVsZXMvX21vY2tAMC4xLjFAbW9jayBzeW5jIHJlY3Vyc2l2ZVwiOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../node_modules/_mock@0.1.1@mock sync recursive\n");

/***/ }),

/***/ "../node_modules/_mock@0.1.1@mock/index.js":
/*!*************************************************!*\
  !*** ../node_modules/_mock@0.1.1@mock/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var require;var require;var moduleRequire = require\nvar Module\n\ntry {\n    Module = (__webpack_require__)(/*! module */ \"module\")\n} catch (err) {\n    /* ignore */\n}\n\nmodule.exports = mock\n\nfunction mock(name, mocks, require) {\n    require = require || __webpack_require__(\"../node_modules/_mock@0.1.1@mock sync recursive\")\n\n    var moduleUri = require.resolve(name)\n\n    if (!Array.isArray(mocks)) {\n        mocks = Object.keys(mocks).map(function (key) {\n            return {\n                uri: key\n                , value: mocks[key]\n            }\n        })\n    }\n\n    var old = mocks.reduce(function (acc, item) {\n        var uri = item.uri\n        var impl = item.value\n        var mockUri = require.resolve(uri)\n        var oldImpl = require.cache[mockUri]\n\n        if (impl === null) {\n            delete require.cache[mockUri]\n        } else {\n            require.cache[mockUri] = {\n                \"exports\": impl\n            }\n\n            if (Module && Module._cache) {\n                Module._cache[mockUri] = {\n                    \"exports\": impl\n                }\n            }\n        }\n\n        acc[uri] = oldImpl\n        return acc\n    }, {})\n\n    var impl = getModule(moduleUri)\n\n    Object.keys(old).forEach(function (key) {\n        var impl = old[key]\n            , mockUri = require.resolve(key)\n\n        require.cache[mockUri] = impl\n\n        if (Module && Module._cache) {\n            Module._cache[mockUri] = impl\n        }\n    })\n\n    return impl\n}\n\nfunction getModule(moduleUri) {\n    if (__webpack_require__(\"../node_modules/_mock@0.1.1@mock sync recursive\").modules) {\n        var constr = __webpack_require__(\"../node_modules/_mock@0.1.1@mock sync recursive\").modules[moduleUri]\n        return constr()\n    } else {\n        var old = __webpack_require__.c[moduleUri]\n        ;delete __webpack_require__.c[moduleUri]\n        var impl = __webpack_require__(\"../node_modules/_mock@0.1.1@mock sync recursive\")(moduleUri)\n        __webpack_require__.c[moduleUri] = old\n        return impl\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL19tb2NrQDAuMS4xQG1vY2svaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL19tb2NrQDAuMS4xQG1vY2svaW5kZXguanM/OWY3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbW9kdWxlUmVxdWlyZSA9IHJlcXVpcmVcbnZhciBNb2R1bGVcblxudHJ5IHtcbiAgICBNb2R1bGUgPSAocmVxdWlyZSkoXCJtb2R1bGVcIilcbn0gY2F0Y2ggKGVycikge1xuICAgIC8qIGlnbm9yZSAqL1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1vY2tcblxuZnVuY3Rpb24gbW9jayhuYW1lLCBtb2NrcywgcmVxdWlyZSkge1xuICAgIHJlcXVpcmUgPSByZXF1aXJlIHx8IG1vZHVsZVJlcXVpcmVcblxuICAgIHZhciBtb2R1bGVVcmkgPSByZXF1aXJlLnJlc29sdmUobmFtZSlcblxuICAgIGlmICghQXJyYXkuaXNBcnJheShtb2NrcykpIHtcbiAgICAgICAgbW9ja3MgPSBPYmplY3Qua2V5cyhtb2NrcykubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJpOiBrZXlcbiAgICAgICAgICAgICAgICAsIHZhbHVlOiBtb2Nrc1trZXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdmFyIG9sZCA9IG1vY2tzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBpdGVtKSB7XG4gICAgICAgIHZhciB1cmkgPSBpdGVtLnVyaVxuICAgICAgICB2YXIgaW1wbCA9IGl0ZW0udmFsdWVcbiAgICAgICAgdmFyIG1vY2tVcmkgPSByZXF1aXJlLnJlc29sdmUodXJpKVxuICAgICAgICB2YXIgb2xkSW1wbCA9IHJlcXVpcmUuY2FjaGVbbW9ja1VyaV1cblxuICAgICAgICBpZiAoaW1wbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgZGVsZXRlIHJlcXVpcmUuY2FjaGVbbW9ja1VyaV1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcXVpcmUuY2FjaGVbbW9ja1VyaV0gPSB7XG4gICAgICAgICAgICAgICAgXCJleHBvcnRzXCI6IGltcGxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE1vZHVsZSAmJiBNb2R1bGUuX2NhY2hlKSB7XG4gICAgICAgICAgICAgICAgTW9kdWxlLl9jYWNoZVttb2NrVXJpXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJleHBvcnRzXCI6IGltcGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhY2NbdXJpXSA9IG9sZEltcGxcbiAgICAgICAgcmV0dXJuIGFjY1xuICAgIH0sIHt9KVxuXG4gICAgdmFyIGltcGwgPSBnZXRNb2R1bGUobW9kdWxlVXJpKVxuXG4gICAgT2JqZWN0LmtleXMob2xkKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIGltcGwgPSBvbGRba2V5XVxuICAgICAgICAgICAgLCBtb2NrVXJpID0gcmVxdWlyZS5yZXNvbHZlKGtleSlcblxuICAgICAgICByZXF1aXJlLmNhY2hlW21vY2tVcmldID0gaW1wbFxuXG4gICAgICAgIGlmIChNb2R1bGUgJiYgTW9kdWxlLl9jYWNoZSkge1xuICAgICAgICAgICAgTW9kdWxlLl9jYWNoZVttb2NrVXJpXSA9IGltcGxcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gaW1wbFxufVxuXG5mdW5jdGlvbiBnZXRNb2R1bGUobW9kdWxlVXJpKSB7XG4gICAgaWYgKHJlcXVpcmUubW9kdWxlcykge1xuICAgICAgICB2YXIgY29uc3RyID0gcmVxdWlyZS5tb2R1bGVzW21vZHVsZVVyaV1cbiAgICAgICAgcmV0dXJuIGNvbnN0cigpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG9sZCA9IHJlcXVpcmUuY2FjaGVbbW9kdWxlVXJpXVxuICAgICAgICA7ZGVsZXRlIHJlcXVpcmUuY2FjaGVbbW9kdWxlVXJpXVxuICAgICAgICB2YXIgaW1wbCA9IHJlcXVpcmUobW9kdWxlVXJpKVxuICAgICAgICByZXF1aXJlLmNhY2hlW21vZHVsZVVyaV0gPSBvbGRcbiAgICAgICAgcmV0dXJuIGltcGxcbiAgICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../node_modules/_mock@0.1.1@mock/index.js\n");

/***/ }),

/***/ "./platforms/server/routes/jobs.js":
/*!*****************************************!*\
  !*** ./platforms/server/routes/jobs.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _server_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @server/controller */ \"./platforms/server/controller/index.js\");\n/* harmony import */ var mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mock */ \"../node_modules/_mock@0.1.1@mock/index.js\");\n/* harmony import */ var mock__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mock__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (schemaMap => ({\n  prefix: '/jobs',\n  routers: {\n    'GET /:id': {\n      schema: {},\n      action: _server_controller__WEBPACK_IMPORTED_MODULE_0__[\"Components\"].list,\n      proxy: '/api/v1/resourceGroup/{groupId}/jobs',\n      mock: ''\n    }\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbGF0Zm9ybXMvc2VydmVyL3JvdXRlcy9qb2JzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGxhdGZvcm1zL3NlcnZlci9yb3V0ZXMvam9icy5qcz9iNmE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICdAc2VydmVyL2NvbnRyb2xsZXInO1xuaW1wb3J0IE1vY2sgZnJvbSAnbW9jayc7XG5leHBvcnQgZGVmYXVsdCAoc2NoZW1hTWFwKT0+KHtcbiAgICBwcmVmaXg6ICAgJy9qb2JzJyxcbiAgICByb3V0ZXJzOiB7XG4gICAgICAgICdHRVQgLzppZCc6ICAgICAgICB7IHNjaGVtYToge30sIGFjdGlvbjogQ29tcG9uZW50cy5saXN0LCBwcm94eTogJy9hcGkvdjEvcmVzb3VyY2VHcm91cC97Z3JvdXBJZH0vam9icycsIG1vY2s6ICcnfSxcbiAgICB9XG59KVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUZBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./platforms/server/routes/jobs.js\n");

/***/ }),

/***/ "module":
/*!*************************!*\
  !*** external "module" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"module\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9kdWxlXCI/N2M0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb2R1bGVcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///module\n");

/***/ })

};