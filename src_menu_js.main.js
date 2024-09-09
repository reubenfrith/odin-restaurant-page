"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["src_menu_js"],{

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _assets_bakery_goods_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/bakery_goods_1.jpg */ \"./src/assets/bakery_goods_1.jpg\");\n\n\nfunction home() {\n  const content = document.getElementById(\"content\")\n  // clear content\n  content.innerHTML = \"\"\n  const bakery = document.createElement(\"div\")\n  bakery.id = \"bakery\"\n  bakery.innerHTML = `\n  <h1>Welcome to the Bakery!</h1>\n  <p>This is the menu!</p>\n  ` \n  content.appendChild(bakery)\n\n  // insert image \n  const img1 = document.createElement(\"img\")\n  img1.src = _assets_bakery_goods_1_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  content.appendChild(img1)\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

}]);