/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Resources/src/js/components.js":
/*!****************************************!*\
  !*** ./Resources/src/js/components.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SampleComponent": function() { return /* reexport safe */ _components_SampleComponent__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _components_SampleComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/SampleComponent */ "./Resources/views/components/SampleComponent/index.js");


/***/ }),

/***/ "./Resources/src/js/main.js":
/*!**********************************!*\
  !*** ./Resources/src/js/main.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./Resources/src/js/components.js\");\n\nvar Loader = window.Loader || {\n  vars: {},\n  methods: {\n    initializeComponents: function initializeComponents() {\n      var componentNodes = Array.from(document.querySelectorAll(\"[data-component]\")) || [];\n      componentNodes.forEach(function (node) {\n        var componentName = node.getAttribute(\"data-component\");\n        var props = node.getAttribute(\"data-props\");\n        if (props) props = JSON.parse(props);\n        /* eslint-disable no-new */\n\n        console.log(node);\n        new _components__WEBPACK_IMPORTED_MODULE_0__[componentName](node, props);\n      });\n    }\n  }\n}; // load/initialize complex js-components\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  return Loader.methods.initializeComponents();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZXNvdXJjZXMvc3JjL2pzL21haW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBLElBQU1DLE1BQU0sR0FBR0MsTUFBTSxDQUFDRCxNQUFQLElBQWlCO0VBQzVCRSxJQUFJLEVBQUUsRUFEc0I7RUFFNUJDLE9BQU8sRUFBRTtJQUNMQyxvQkFBb0IsRUFBRSxnQ0FBTTtNQUN4QixJQUFNQyxjQUFjLEdBQ2hCQyxLQUFLLENBQUNDLElBQU4sQ0FBV0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsQ0FBWCxLQUE2RCxFQURqRTtNQUdBSixjQUFjLENBQUNLLE9BQWYsQ0FBdUIsVUFBQ0MsSUFBRCxFQUFVO1FBQzdCLElBQU1DLGFBQWEsR0FBR0QsSUFBSSxDQUFDRSxZQUFMLENBQWtCLGdCQUFsQixDQUF0QjtRQUVBLElBQUlDLEtBQUssR0FBR0gsSUFBSSxDQUFDRSxZQUFMLENBQWtCLFlBQWxCLENBQVo7UUFDQSxJQUFJQyxLQUFKLEVBQVdBLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdGLEtBQVgsQ0FBUjtRQUVYOztRQUNBRyxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsSUFBWjtRQUNBLElBQUlaLHdDQUFVLENBQUNhLGFBQUQsQ0FBZCxDQUE4QkQsSUFBOUIsRUFBb0NHLEtBQXBDO01BQ0gsQ0FURDtJQVVIO0VBZkk7QUFGbUIsQ0FBaEMsRUFxQkE7O0FBQ0FOLFFBQVEsQ0FBQ1csZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDO0VBQUEsT0FDMUNuQixNQUFNLENBQUNHLE9BQVAsQ0FBZUMsb0JBQWYsRUFEMEM7QUFBQSxDQUE5QyIsInNvdXJjZXMiOlsid2VicGFjazovL1dlYnNpdGVCdW5kbGUvLi9SZXNvdXJjZXMvc3JjL2pzL21haW4uanM/OGQxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjb21wb25lbnRzIGZyb20gXCIuL2NvbXBvbmVudHNcIjtcblxuY29uc3QgTG9hZGVyID0gd2luZG93LkxvYWRlciB8fCB7XG4gICAgdmFyczoge30sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBpbml0aWFsaXplQ29tcG9uZW50czogKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Tm9kZXMgPVxuICAgICAgICAgICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWNvbXBvbmVudF1cIikpIHx8IFtdO1xuXG4gICAgICAgICAgICBjb21wb25lbnROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50TmFtZSA9IG5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb21wb25lbnRcIik7XG5cbiAgICAgICAgICAgICAgICBsZXQgcHJvcHMgPSBub2RlLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvcHNcIik7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzKSBwcm9wcyA9IEpTT04ucGFyc2UocHJvcHMpO1xuXG4gICAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tbmV3ICovXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobm9kZSk7XG4gICAgICAgICAgICAgICAgbmV3IGNvbXBvbmVudHNbY29tcG9uZW50TmFtZV0obm9kZSwgcHJvcHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbi8vIGxvYWQvaW5pdGlhbGl6ZSBjb21wbGV4IGpzLWNvbXBvbmVudHNcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+XG4gICAgTG9hZGVyLm1ldGhvZHMuaW5pdGlhbGl6ZUNvbXBvbmVudHMoKVxuKTtcbiJdLCJuYW1lcyI6WyJjb21wb25lbnRzIiwiTG9hZGVyIiwid2luZG93IiwidmFycyIsIm1ldGhvZHMiLCJpbml0aWFsaXplQ29tcG9uZW50cyIsImNvbXBvbmVudE5vZGVzIiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIm5vZGUiLCJjb21wb25lbnROYW1lIiwiZ2V0QXR0cmlidXRlIiwicHJvcHMiLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Resources/src/js/main.js\n");

/***/ }),

/***/ "./Resources/views/components/SampleComponent/index.js":
/*!*************************************************************!*\
  !*** ./Resources/views/components/SampleComponent/index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SampleComponent; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar SampleComponent = /*#__PURE__*/function () {\n  function SampleComponent(rootNode, props) {\n    _classCallCheck(this, SampleComponent);\n\n    this.root = rootNode;\n    this.init();\n  }\n\n  _createClass(SampleComponent, [{\n    key: \"init\",\n    value: function init() {\n      console.log('SampleComponent initialized: ' + this.root);\n    }\n  }]);\n\n  return SampleComponent;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZXNvdXJjZXMvdmlld3MvY29tcG9uZW50cy9TYW1wbGVDb21wb25lbnQvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFxQkE7RUFDakIseUJBQVlDLFFBQVosRUFBc0JDLEtBQXRCLEVBQTZCO0lBQUE7O0lBQ3pCLEtBQUtDLElBQUwsR0FBWUYsUUFBWjtJQUVBLEtBQUtHLElBQUw7RUFFSDs7OztXQUVELGdCQUFPO01BQ0hDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtDQUFrQyxLQUFLSCxJQUFuRDtJQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vV2Vic2l0ZUJ1bmRsZS8uL1Jlc291cmNlcy92aWV3cy9jb21wb25lbnRzL1NhbXBsZUNvbXBvbmVudC9pbmRleC5qcz8zZDFjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhbXBsZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3Iocm9vdE5vZGUsIHByb3BzKSB7XG4gICAgICAgIHRoaXMucm9vdCA9IHJvb3ROb2RlXG5cbiAgICAgICAgdGhpcy5pbml0KClcblxuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTYW1wbGVDb21wb25lbnQgaW5pdGlhbGl6ZWQ6ICcgKyB0aGlzLnJvb3QpXG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIlNhbXBsZUNvbXBvbmVudCIsInJvb3ROb2RlIiwicHJvcHMiLCJyb290IiwiaW5pdCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Resources/views/components/SampleComponent/index.js\n");

/***/ }),

/***/ "./Resources/src/scss/main.scss":
/*!**************************************!*\
  !*** ./Resources/src/scss/main.scss ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZXNvdXJjZXMvc3JjL3Njc3MvbWFpbi5zY3NzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL1dlYnNpdGVCdW5kbGUvLi9SZXNvdXJjZXMvc3JjL3Njc3MvbWFpbi5zY3NzPzc4ODUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Resources/src/scss/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkWebsiteBundle"] = self["webpackChunkWebsiteBundle"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], function() { return __webpack_require__("./Resources/src/js/main.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], function() { return __webpack_require__("./Resources/src/scss/main.scss"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;