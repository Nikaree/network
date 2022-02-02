/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/thirdLink.js":
/*!**************************!*\
  !*** ./src/thirdLink.js ***!
  \**************************/
/***/ (() => {

eval("fetch('./art.json').then(function (response) {\n  response.json().then(function (response) {\n    insert(response.server);\n    insert(response.url);\n    insert(response.base);\n  });\n  console.log('fetch');\n});\n\nfunction insert(imageJSON) {\n  var imageHTML = new Image();\n  imageHTML.src = imageJSON;\n  document.getElementById(\"gg\").appendChild(imageHTML);\n  console.log('insert');\n}\n\n//# sourceURL=webpack://web/./src/thirdLink.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/thirdLink.js"]();
/******/ 	
/******/ })()
;