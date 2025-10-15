/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/buscar.js":
/*!***********************!*\
  !*** ./src/buscar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   highlightAndCount: () => (/* binding */ highlightAndCount)\n/* harmony export */ });\nfunction highlightAndCount(text, searchTerm) {\n  if (!searchTerm.trim()) {\n    return {\n      highlighted: text,\n      count: 0\n    };\n  }\n  var regex = new RegExp(\"\\\\b\".concat(searchTerm.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&'), \"\\\\b\"), 'gi');\n  var matches = text.match(regex);\n  var count = matches ? matches.length : 0;\n  var highlighted = text.replace(regex, function (match) {\n    return \"<mark>\".concat(match, \"</mark>\");\n  });\n  return {\n    highlighted: highlighted,\n    count: count\n  };\n}\n\n//# sourceURL=webpack://unidad1/./src/buscar.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _buscar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buscar.js */ \"./src/buscar.js\");\n\nvar searchInput = document.getElementById('searchInput');\nvar searchBtn = document.getElementById('searchBtn');\nvar textArea = document.getElementById('textArea');\nvar countSpan = document.getElementById('count');\nvar highlightedText = document.getElementById('highlightedText');\nfunction performSearch() {\n  var searchTerm = searchInput.value;\n  var text = textArea.value;\n  if (!text.trim()) {\n    highlightedText.innerHTML = '<p style=\"color: #999;\">Ingresa un texto para buscar</p>';\n    countSpan.textContent = '0';\n    return;\n  }\n  var _highlightAndCount = (0,_buscar_js__WEBPACK_IMPORTED_MODULE_0__.highlightAndCount)(text, searchTerm),\n    highlighted = _highlightAndCount.highlighted,\n    count = _highlightAndCount.count;\n  countSpan.textContent = count;\n  highlightedText.innerHTML = highlighted || '<p style=\"color: #999;\">No hay texto que mostrar</p>';\n}\nsearchBtn.addEventListener('click', performSearch);\nsearchInput.addEventListener('keypress', function (e) {\n  if (e.key === 'Enter') {\n    performSearch();\n  }\n});\ntextArea.addEventListener('input', function () {\n  if (searchInput.value.trim()) {\n    performSearch();\n  }\n});\n\n//# sourceURL=webpack://unidad1/./src/index.js?\n}");

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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;