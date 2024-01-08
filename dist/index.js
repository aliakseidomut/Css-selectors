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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[2].use[3]!./src/styles/index.scss":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[2].use[3]!./src/styles/index.scss ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/workbook-bg.jpg */ \"./src/assets/workbook-bg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@charset \"UTF-8\";\n.workbook-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 300px;\n}\n\n.workbook {\n  display: inline-flex;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-size: 100%;\n  background-position: center;\n  gap: 20px;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0px 0px 15px black;\n}\n\ncircle {\n  width: 100px;\n  height: 100px;\n  background-color: black;\n  border-radius: 50%;\n  transition: 0.2s;\n}\n\n.blue {\n  background-color: blue;\n}\n\n#red {\n  background-color: red;\n}\n\n*[green=true] {\n  background-color: green;\n}\n\nsquare {\n  width: 100px;\n  height: 100px;\n  background-color: black;\n  transition: 0.2s;\n}\n\n.item-active {\n  transform: scale(0.95, 0.95);\n}\n\n.item-active::after {\n  width: max-content;\n  color: #FFFFFF;\n  background-color: rgba(0, 0, 0, 0.7);\n  border-radius: 6px;\n  content: attr(data-hint);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1em;\n  position: absolute;\n  top: -5px;\n  left: 50%;\n  transform: translate(-50%, -100%);\n  pointer-events: none;\n  transition: opacity 0.2s;\n  padding: 10px;\n}\n\n@keyframes increase-decrease {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(0.85);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.necessary-element {\n  animation: increase-decrease 3s infinite;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  background-color: #9cb9d1;\n  display: flex;\n  justify-content: space-between;\n  height: 100%;\n  font-family: \"Inter\", sans-serif;\n  color: rgb(71, 71, 71);\n}\n\n.game-wrapper {\n  width: 100%;\n  overflow-y: scroll;\n}\n\n.game-wrapper::-webkit-scrollbar {\n  width: 7px;\n  background-color: #9cb9d1;\n}\n\n.game-wrapper::-webkit-scrollbar-thumb {\n  border-radius: 7px;\n  background-color: #548ce0;\n}\n\n.game-wrapper::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);\n  border-radius: 7px;\n  background-color: #9cb9d1;\n}\n\n.level-description {\n  text-align: center;\n  margin-top: 15px;\n  font-size: 45px;\n}\n\n.levels-wrapper {\n  background-color: #759cd8;\n  width: 370px;\n}\n\n.levels__h {\n  font-size: 35px;\n  text-align: center;\n  margin: 7px 0;\n}\n\n.levels__ul {\n  list-style-type: none;\n  font-size: 25px;\n  font-weight: 500;\n  margin: 0 auto;\n}\n\n.levels__li {\n  padding: 2px 10px;\n}\n.levels__li:hover {\n  background-color: #84a1cc;\n  cursor: pointer;\n}\n.levels__li::before {\n  content: \"✔\";\n  margin-right: 5px;\n}\n\n.levels__li_active {\n  background-color: #94aacc;\n}\n\n.levels__li_completed {\n  color: rgb(52, 150, 52);\n}\n\n.editor {\n  display: flex;\n  justify-content: center;\n  font-family: \"M PLUS 1 Code\", sans-serif;\n}\n\n.editor-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 15px;\n  background-color: #24211d;\n}\n.editor-header h2 {\n  font-size: 16px;\n}\n.editor-header h3 {\n  font-size: 14px;\n}\n\n.main {\n  display: flex;\n}\n\n.line-numbers {\n  width: 0;\n  line-height: 150%;\n  font-size: 14px;\n  font-family: \"M PLUS 1 Code\", sans-serif;\n  margin: 0;\n  padding: 10px 0 10px 35px;\n}\n\n.code-area {\n  padding: 10px;\n}\n\n.css-editor .line-numbers {\n  background-color: #e2e2e2;\n  color: #AAA;\n}\n.css-editor .code-area {\n  background-color: white;\n}\n.css-editor input {\n  outline: none;\n  border: none;\n}\n.css-editor .enter-button {\n  background: #ddd;\n  display: block;\n  border-radius: 2px;\n  padding: 2px 7px 2px 7px;\n  color: #666;\n  border: solid 3px #999;\n  border-width: 1px 1px 6px 1px;\n  font-size: 9px;\n  cursor: pointer;\n  top: 7px;\n  right: 7px;\n  z-index: 999999;\n  margin-top: 5px;\n}\n.css-editor .enter-button_active {\n  border-width: 1px 1px 1px 1px;\n  margin-top: 10px;\n}\n\n.html-viewer .line-numbers {\n  background-color: #1d1a16;\n}\n.html-viewer .code-area {\n  background-color: #1d1a16;\n}\n.html-viewer span:hover {\n  cursor: default;\n  color: white;\n}\n.html-viewer .span-active {\n  color: rgb(255, 255, 255);\n}\n\n@keyframes shaking {\n  0% {\n    transform: translateX(0);\n  }\n  10% {\n    transform: translateX(-5px);\n  }\n  20% {\n    transform: translateX(5px);\n  }\n  30% {\n    transform: translateX(-5px);\n  }\n  40% {\n    transform: translateX(5px);\n  }\n  50% {\n    transform: translateX(-5px);\n  }\n  60% {\n    transform: translateX(5px);\n  }\n  70% {\n    transform: translateX(-5px);\n  }\n  80% {\n    transform: translateX(5px);\n  }\n  90% {\n    transform: translateX(-5px);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n.shaking {\n  animation: shaking 1s;\n}\n\nheader {\n  padding: 10px;\n}\n\n.logo {\n  display: flex;\n  gap: 5px;\n}\n.logo h1 {\n  font-size: 20px;\n}\n.logo img {\n  width: 20px;\n}\n\n.workbook-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 300px;\n}\n\n.workbook {\n  display: inline-flex;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-size: 100%;\n  background-position: center;\n  gap: 20px;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0px 0px 15px black;\n}\n\ncircle {\n  width: 100px;\n  height: 100px;\n  background-color: black;\n  border-radius: 50%;\n  transition: 0.2s;\n}\n\n.blue {\n  background-color: blue;\n}\n\n#red {\n  background-color: red;\n}\n\n*[green=true] {\n  background-color: green;\n}\n\nsquare {\n  width: 100px;\n  height: 100px;\n  background-color: black;\n  transition: 0.2s;\n}\n\n.item-active {\n  transform: scale(0.95, 0.95);\n}\n\n.item-active::after {\n  width: max-content;\n  color: #FFFFFF;\n  background-color: rgba(0, 0, 0, 0.7);\n  border-radius: 6px;\n  content: attr(data-hint);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1em;\n  position: absolute;\n  top: -5px;\n  left: 50%;\n  transform: translate(-50%, -100%);\n  pointer-events: none;\n  transition: opacity 0.2s;\n  padding: 10px;\n}\n\n@keyframes increase-decrease {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(0.85);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.necessary-element {\n  animation: increase-decrease 3s infinite;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  background-color: #9cb9d1;\n  display: flex;\n  justify-content: space-between;\n  height: 100%;\n  font-family: \"Inter\", sans-serif;\n  color: rgb(71, 71, 71);\n}\n\n.game-wrapper {\n  width: 100%;\n  overflow-y: scroll;\n}\n\n.game-wrapper::-webkit-scrollbar {\n  width: 7px;\n  background-color: #9cb9d1;\n}\n\n.game-wrapper::-webkit-scrollbar-thumb {\n  border-radius: 7px;\n  background-color: #548ce0;\n}\n\n.game-wrapper::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);\n  border-radius: 7px;\n  background-color: #9cb9d1;\n}\n\n.level-description {\n  text-align: center;\n  margin-top: 15px;\n  font-size: 45px;\n}\n\n.levels-wrapper {\n  background-color: #759cd8;\n  width: 370px;\n}\n\n.levels__h {\n  font-size: 35px;\n  text-align: center;\n  margin: 7px 0;\n}\n\n.levels__ul {\n  list-style-type: none;\n  font-size: 25px;\n  font-weight: 500;\n  margin: 0 auto;\n}\n\n.levels__li {\n  padding: 2px 10px;\n}\n.levels__li:hover {\n  background-color: #84a1cc;\n  cursor: pointer;\n}\n.levels__li::before {\n  content: \"✔\";\n  margin-right: 5px;\n}\n\n.levels__li_active {\n  background-color: #94aacc;\n}\n\n.levels__li_completed {\n  color: rgb(52, 150, 52);\n}\n\n.editor {\n  display: flex;\n  justify-content: center;\n  font-family: \"M PLUS 1 Code\", sans-serif;\n}\n\n.editor-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 15px;\n  background-color: #24211d;\n}\n.editor-header h2 {\n  font-size: 16px;\n}\n.editor-header h3 {\n  font-size: 14px;\n}\n\n.main {\n  display: flex;\n}\n\n.line-numbers {\n  width: 0;\n  line-height: 150%;\n  font-size: 14px;\n  font-family: \"M PLUS 1 Code\", sans-serif;\n  margin: 0;\n  padding: 10px 0 10px 35px;\n}\n\n.code-area {\n  padding: 10px;\n}\n\n.css-editor .line-numbers {\n  background-color: #e2e2e2;\n  color: #AAA;\n}\n.css-editor .code-area {\n  background-color: white;\n}\n.css-editor input {\n  outline: none;\n  border: none;\n}\n.css-editor .enter-button {\n  background: #ddd;\n  display: block;\n  border-radius: 2px;\n  padding: 2px 7px 2px 7px;\n  color: #666;\n  border: solid 3px #999;\n  border-width: 1px 1px 6px 1px;\n  font-size: 9px;\n  cursor: pointer;\n  top: 7px;\n  right: 7px;\n  z-index: 999999;\n  margin-top: 5px;\n}\n.css-editor .enter-button_active {\n  border-width: 1px 1px 1px 1px;\n  margin-top: 10px;\n}\n\n.html-viewer .line-numbers {\n  background-color: #1d1a16;\n}\n.html-viewer .code-area {\n  background-color: #1d1a16;\n}\n.html-viewer span:hover {\n  cursor: default;\n  color: white;\n}\n.html-viewer .span-active {\n  color: rgb(255, 255, 255);\n}\n\n@keyframes shaking {\n  0% {\n    transform: translateX(0);\n  }\n  10% {\n    transform: translateX(-5px);\n  }\n  20% {\n    transform: translateX(5px);\n  }\n  30% {\n    transform: translateX(-5px);\n  }\n  40% {\n    transform: translateX(5px);\n  }\n  50% {\n    transform: translateX(-5px);\n  }\n  60% {\n    transform: translateX(5px);\n  }\n  70% {\n    transform: translateX(-5px);\n  }\n  80% {\n    transform: translateX(5px);\n  }\n  90% {\n    transform: translateX(-5px);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n.shaking {\n  animation: shaking 1s;\n}\n\nheader {\n  padding: 10px;\n}\n\n.logo {\n  display: flex;\n  gap: 5px;\n}\n.logo h1 {\n  font-size: 20px;\n}\n.logo img {\n  width: 20px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://rss-css-selectors/./src/styles/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet%5B1%5D.rules%5B2%5D.use%5B3%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://rss-css-selectors/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://rss-css-selectors/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://rss-css-selectors/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/workbook-icon.png */ \"./src/assets/workbook-icon.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n<head>\\r\\n    <meta charset=\\\"UTF-8\\\">\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n    <link rel=\\\"preconnect\\\" href=\\\"https://fonts.googleapis.com\\\">\\r\\n    <link rel=\\\"preconnect\\\" href=\\\"https://fonts.gstatic.com\\\" crossorigin>\\r\\n    <link href=\\\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&family=M+PLUS+1+Code:wght@300;400;500&display=swap\\\" rel=\\\"stylesheet\\\">\\r\\n    <title>CSS Homework</title>\\r\\n    <link rel=\\\"icon\\\" type=\\\"image/x-icon\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\">\\r\\n</head>\\r\\n<body>\\r\\n    <div class=\\\"game-wrapper\\\">\\r\\n        <header>\\r\\n            <div class=\\\"logo\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"workbook-icon\\\">\\r\\n                <h1>CSS Homework</h1>\\r\\n            </div>\\r\\n        </header>\\r\\n\\r\\n        <main>    \\r\\n            <h2 class=\\\"level-description\\\"></h2>\\r\\n\\r\\n            <div class=\\\"workbook-wrapper\\\">\\r\\n                <div class=\\\"workbook\\\"></div>\\r\\n            </div>\\r\\n        \\r\\n            <div class=\\\"editor\\\">\\r\\n                <div class=\\\"css-editor\\\">\\r\\n                    <div class=\\\"editor-header\\\">\\r\\n                        <h2>CSS Editor</h2>\\r\\n                        <h3>style.css</h3>\\r\\n                    </div>\\r\\n                    <div class=\\\"main\\\">\\r\\n                        <div class=\\\"code-area\\\">\\r\\n                            <input class=\\\"css-editor__input\\\" type=\\\"text\\\" placeholder=\\\"Type in a CSS selector\\\">\\r\\n                            <button class=\\\"enter-button\\\">enter</button>\\r\\n                        </div>\\r\\n                    </div>\\r\\n                </div>\\r\\n                <div class=\\\"html-viewer\\\">\\r\\n                    <div class=\\\"editor-header\\\">\\r\\n                        <h2>HTML Viewer</h2>\\r\\n                        <h3>table.html</h3>\\r\\n                    </div>\\r\\n                    <div class=\\\"main\\\">\\r\\n                        <div class=\\\"code-area\\\"></div>\\r\\n                    </div>\\r\\n                </div>\\r\\n            </div>\\r\\n        \\r\\n        </main>\\r\\n    </div>\\r\\n    <div class=\\\"levels-wrapper\\\"></div>    \\r\\n\\r\\n</body>\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://rss-css-selectors/./src/index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://rss-css-selectors/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_2_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[2].use[3]!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[2].use[3]!./src/styles/index.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_2_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_2_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_2_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_2_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://rss-css-selectors/./src/styles/index.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://rss-css-selectors/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://rss-css-selectors/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://rss-css-selectors/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://rss-css-selectors/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://rss-css-selectors/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://rss-css-selectors/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/scripts/editor.ts":
/*!*******************************!*\
  !*** ./src/scripts/editor.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CSSEditor = exports.HTMLViewer = void 0;\nconst levels_1 = __webpack_require__(/*! ./levels */ \"./src/scripts/levels.ts\");\nconst levels_data_json_1 = __importDefault(__webpack_require__(/*! ../levels-data.json */ \"./src/levels-data.json\"));\nconst workbook_1 = __webpack_require__(/*! ./workbook */ \"./src/scripts/workbook.ts\");\nclass Editor {\n    addLineNumbers(editorClass) {\n        var _a;\n        const ol = document.createElement('ol');\n        ol.className = 'line-numbers';\n        for (let i = 0; i < 20; i++) {\n            ol.append(document.createElement('li'));\n        }\n        (_a = document.querySelector(`.${editorClass} .main`)) === null || _a === void 0 ? void 0 : _a.prepend(ol);\n    }\n}\nclass HTMLViewer extends Editor {\n    drawCodeExample(elements) {\n        const codeContainer = document.querySelector('.html-viewer .code-area');\n        if (codeContainer !== null) {\n            codeContainer.innerHTML = '';\n            codeContainer.innerHTML += '&lt;div class=\"workbook\"&gt;<br>';\n            elements.forEach(el => {\n                codeContainer.append(this.createElementCode(el));\n                codeContainer.innerHTML += '<br>';\n            });\n            codeContainer.innerHTML += '&lt;/div&gt;';\n            codeContainer.addEventListener('mouseover', (event) => {\n                this.codeMouseEventHandler(event);\n            });\n            codeContainer.addEventListener('mouseout', (event) => {\n                this.codeMouseEventHandler(event);\n            });\n        }\n    }\n    codeMouseEventHandler(event) {\n        var _a, _b;\n        const item = event.target;\n        const elCode = item.getAttribute('elCode');\n        if (elCode) {\n            if (event.type === 'mouseover') {\n                (_a = document.querySelector(`.workbook-item[elCode=\"${elCode}\"]`)) === null || _a === void 0 ? void 0 : _a.classList.add('item-active');\n            }\n            else if (event.type === 'mouseout') {\n                (_b = document.querySelector(`.workbook-item[elCode=\"${elCode}\"]`)) === null || _b === void 0 ? void 0 : _b.classList.remove('item-active');\n            }\n        }\n    }\n    createElementCode(item) {\n        const span = document.createElement('span');\n        span.setAttribute('elCode', item.elCode);\n        span.innerHTML = `&nbsp;&nbsp;&lt;${item.tagName} /&gt;`;\n        if (item.class !== null) {\n            span.innerHTML = `&nbsp;&nbsp;&lt;${item.tagName} class=\"${item.class}\" /&gt;`;\n        }\n        else if (item.id !== null) {\n            span.innerHTML = `&nbsp;&nbsp;&lt;${item.tagName} id=\"${item.id}\" /&gt;`;\n        }\n        else if (item.attribute) {\n            span.innerHTML = `&nbsp;&nbsp;&lt;${item.tagName} ${item.attribute} /&gt;`;\n        }\n        return span;\n    }\n}\nexports.HTMLViewer = HTMLViewer;\nclass CSSEditor extends Editor {\n    drawEnterButton() {\n        const enterButton = document.querySelector('.enter-button');\n        if (enterButton !== null) {\n            enterButton.addEventListener('click', () => {\n                this.enterSelectorHandler();\n            });\n        }\n    }\n    enterSelectorHandler() {\n        const button = document.querySelector('.enter-button');\n        button === null || button === void 0 ? void 0 : button.classList.add('enter-button_active');\n        setTimeout(() => {\n            button === null || button === void 0 ? void 0 : button.classList.remove('enter-button_active');\n        }, 100);\n        this.checkSelector();\n    }\n    addInputEvent() {\n        const input = document.querySelector('input');\n        input === null || input === void 0 ? void 0 : input.addEventListener('keyup', (event) => {\n            if (event.key === 'Enter') {\n                this.enterSelectorHandler();\n            }\n        });\n    }\n    checkSelector() {\n        var _a, _b;\n        const workbook = new workbook_1.Workbook();\n        const htmlViewer = new HTMLViewer();\n        const levels = new levels_1.Levels();\n        const input = document.querySelector('input');\n        const inputSelector = input === null || input === void 0 ? void 0 : input.value;\n        let rightSelector = '';\n        const nextLevel = +localStorage.currentLevel + 1;\n        levels_data_json_1.default.forEach(obj => {\n            if (obj.level === localStorage.currentLevel) {\n                rightSelector = obj.rigthSelector;\n            }\n        });\n        if (inputSelector === rightSelector) {\n            if (!localStorage.completedLevels) {\n                localStorage.setItem('completedLevels', `${localStorage.currentLevel},`);\n            }\n            else {\n                localStorage.completedLevels += `${localStorage.currentLevel},`;\n            }\n            localStorage.currentLevel++;\n            (_a = document.querySelector('.levels__li_active')) === null || _a === void 0 ? void 0 : _a.classList.add('levels__li_completed');\n            levels.drawLevelsSection(levels_data_json_1.default);\n            if (levels_data_json_1.default[nextLevel - 1]) {\n                workbook.drawItems(levels_data_json_1.default[localStorage.currentLevel - 1].elements);\n                htmlViewer.drawCodeExample(levels_data_json_1.default[localStorage.currentLevel - 1].elements);\n                levels.drawLevelDescription(levels_data_json_1.default[localStorage.currentLevel - 1]);\n                if (input) {\n                    input.value = '';\n                }\n            }\n        }\n        else {\n            (_b = document.querySelector('.editor')) === null || _b === void 0 ? void 0 : _b.classList.add('shaking');\n            setTimeout(() => {\n                var _a;\n                (_a = document.querySelector('.editor')) === null || _a === void 0 ? void 0 : _a.classList.remove('shaking');\n            }, 1000);\n        }\n    }\n}\nexports.CSSEditor = CSSEditor;\n\n\n//# sourceURL=webpack://rss-css-selectors/./src/scripts/editor.ts?");

/***/ }),

/***/ "./src/scripts/index.ts":
/*!******************************!*\
  !*** ./src/scripts/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ../../src/index.html */ \"./src/index.html\");\n__webpack_require__(/*! ../styles/index.scss */ \"./src/styles/index.scss\");\nconst levels_1 = __webpack_require__(/*! ./levels */ \"./src/scripts/levels.ts\");\nconst levels_data_json_1 = __importDefault(__webpack_require__(/*! ../levels-data.json */ \"./src/levels-data.json\"));\nconst workbook_1 = __webpack_require__(/*! ./workbook */ \"./src/scripts/workbook.ts\");\nconst editor_1 = __webpack_require__(/*! ./editor */ \"./src/scripts/editor.ts\");\nconst workbook = new workbook_1.Workbook();\nconst levels = new levels_1.Levels();\nconst htmlViewer = new editor_1.HTMLViewer();\nconst cssEditor = new editor_1.CSSEditor();\nif (!localStorage.currentLevel) {\n    localStorage.setItem('currentLevel', '1');\n}\nworkbook.drawItems(levels_data_json_1.default[localStorage.currentLevel - 1].elements);\nlevels.drawLevelDescription(levels_data_json_1.default[localStorage.currentLevel - 1]);\nlevels.drawLevelsSection(levels_data_json_1.default);\nhtmlViewer.addLineNumbers('html-viewer');\nhtmlViewer.drawCodeExample(levels_data_json_1.default[localStorage.currentLevel - 1].elements);\ncssEditor.drawEnterButton();\ncssEditor.addLineNumbers('css-editor');\ncssEditor.addInputEvent();\n\n\n//# sourceURL=webpack://rss-css-selectors/./src/scripts/index.ts?");

/***/ }),

/***/ "./src/scripts/levels.ts":
/*!*******************************!*\
  !*** ./src/scripts/levels.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Levels = void 0;\nconst editor_1 = __webpack_require__(/*! ./editor */ \"./src/scripts/editor.ts\");\nconst workbook_1 = __webpack_require__(/*! ./workbook */ \"./src/scripts/workbook.ts\");\nclass Levels {\n    drawLevelsSection(data) {\n        const levelsWrapper = document.querySelector('.levels-wrapper');\n        if (levelsWrapper) {\n            levelsWrapper.innerHTML = '';\n        }\n        const levelsH = document.createElement('h2');\n        levelsH.className = 'levels__h';\n        levelsH.textContent = 'Level';\n        const levelsUl = document.createElement('ul');\n        levelsUl.className = 'levels__ul';\n        data.forEach(el => {\n            const levelsLi = document.createElement('li');\n            levelsLi.textContent = el.level;\n            levelsLi.className = 'levels__li';\n            if (el.level === localStorage.currentLevel) {\n                levelsLi.classList.add('levels__li_active');\n            }\n            if (localStorage.completedLevels && localStorage.completedLevels.split(',').includes(el.level)) {\n                levelsLi.classList.add('levels__li_completed');\n            }\n            levelsLi.addEventListener('click', () => {\n                this.levelsClickHandler(el);\n                document.querySelectorAll('.levels__li').forEach(el => {\n                    el.classList.remove('levels__li_active');\n                });\n                levelsLi.classList.add('levels__li_active');\n                localStorage.setItem('currentLevel', el.level);\n            });\n            levelsUl.append(levelsLi);\n        });\n        levelsWrapper === null || levelsWrapper === void 0 ? void 0 : levelsWrapper.append(levelsH, levelsUl);\n    }\n    levelsClickHandler(el) {\n        const workbook = new workbook_1.Workbook();\n        const workbookContainer = document.querySelector('.workbook');\n        const htmlViewer = new editor_1.HTMLViewer();\n        if (workbookContainer !== null) {\n            workbookContainer.innerHTML = '';\n        }\n        workbook.drawItems(el.elements);\n        htmlViewer.drawCodeExample(el.elements);\n        this.drawLevelDescription(el);\n    }\n    drawLevelDescription(data) {\n        const levelDescription = document.querySelector('.level-description');\n        if (levelDescription !== null) {\n            levelDescription.textContent = data.description;\n        }\n    }\n}\nexports.Levels = Levels;\n\n\n//# sourceURL=webpack://rss-css-selectors/./src/scripts/levels.ts?");

/***/ }),

/***/ "./src/scripts/workbook.ts":
/*!*********************************!*\
  !*** ./src/scripts/workbook.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Workbook = void 0;\nclass Workbook {\n    drawItems(elements) {\n        const workbook = document.querySelector('.workbook');\n        if (workbook !== null) {\n            workbook.innerHTML = '';\n            elements.forEach(el => workbook.append(this.createItem(el)));\n            workbook.addEventListener('mouseover', (event) => {\n                this.itemMouseEventHandler(event);\n            });\n            workbook.addEventListener('mouseout', (event) => {\n                this.itemMouseEventHandler(event);\n            });\n        }\n    }\n    itemMouseEventHandler(event) {\n        var _a, _b;\n        const item = event.target;\n        const elCode = item.getAttribute('elCode');\n        if (elCode) {\n            if (event.type === 'mouseover') {\n                (_a = document.querySelector(`span[elCode=\"${elCode}\"]`)) === null || _a === void 0 ? void 0 : _a.classList.add('span-active');\n                item.classList.add('item-active');\n            }\n            else if (event.type === 'mouseout') {\n                (_b = document.querySelector(`span[elCode=\"${elCode}\"]`)) === null || _b === void 0 ? void 0 : _b.classList.remove('span-active');\n                item.classList.remove('item-active');\n            }\n        }\n    }\n    createItem(data) {\n        const item = document.createElement(data.tagName);\n        item.setAttribute('elCode', data.elCode);\n        item.setAttribute('data-hint', `<${item.tagName.toLowerCase()}></${item.tagName.toLowerCase()}>`);\n        if (data.class !== null) {\n            item.setAttribute('data-hint', `<${item.tagName.toLowerCase()} class=\"${data.class}\"></${item.tagName.toLowerCase()}>`);\n        }\n        else if (data.id !== null) {\n            item.setAttribute('data-hint', `<${item.tagName.toLowerCase()} id=\"${data.id}\"></${item.tagName.toLowerCase()}>`);\n        }\n        else if (data.attribute) {\n            item.setAttribute('data-hint', `<${item.tagName.toLowerCase()} ${data.attribute}\"></${item.tagName.toLowerCase()}>`);\n        }\n        item.classList.add('workbook-item');\n        if (data.class !== null) {\n            item.classList.add(data.class);\n        }\n        if (data.id !== null) {\n            item.id = data.id;\n        }\n        if (data.animation) {\n            item.classList.add('necessary-element');\n        }\n        if (data.attribute) {\n            item.setAttribute('green', 'true');\n        }\n        return item;\n    }\n}\nexports.Workbook = Workbook;\n\n\n//# sourceURL=webpack://rss-css-selectors/./src/scripts/workbook.ts?");

/***/ }),

/***/ "./src/assets/workbook-bg.jpg":
/*!************************************!*\
  !*** ./src/assets/workbook-bg.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/workbook-bg.jpg\";\n\n//# sourceURL=webpack://rss-css-selectors/./src/assets/workbook-bg.jpg?");

/***/ }),

/***/ "./src/assets/workbook-icon.png":
/*!**************************************!*\
  !*** ./src/assets/workbook-icon.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/workbook-icon.png\";\n\n//# sourceURL=webpack://rss-css-selectors/./src/assets/workbook-icon.png?");

/***/ }),

/***/ "./src/levels-data.json":
/*!******************************!*\
  !*** ./src/levels-data.json ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"level\":\"1\",\"description\":\"Select circles\",\"elements\":[{\"tagName\":\"circle\",\"class\":null,\"id\":null,\"animation\":true,\"elCode\":\"el-1_1\"},{\"tagName\":\"circle\",\"class\":null,\"id\":null,\"animation\":true,\"elCode\":\"el-1_2\"}],\"rigthSelector\":\"circle\"},{\"level\":\"2\",\"description\":\"Select blue circle\",\"elements\":[{\"tagName\":\"circle\",\"class\":null,\"id\":null,\"animation\":false,\"elCode\":\"el-2_1\"},{\"tagName\":\"circle\",\"class\":null,\"id\":null,\"animation\":false,\"elCode\":\"el-2_2\"},{\"tagName\":\"circle\",\"class\":\"blue\",\"id\":null,\"animation\":true,\"elCode\":\"el-2_3\"}],\"rigthSelector\":\".blue\"},{\"level\":\"3\",\"description\":\"Select red circle\",\"elements\":[{\"tagName\":\"circle\",\"class\":null,\"id\":null,\"animation\":false,\"elCode\":\"el-3_1\"},{\"tagName\":\"circle\",\"class\":null,\"id\":\"red\",\"animation\":true,\"elCode\":\"el-3_2\"},{\"tagName\":\"circle\",\"class\":null,\"id\":null,\"animation\":false,\"elCode\":\"el-3_3\"}],\"rigthSelector\":\"#red\"},{\"level\":\"4\",\"description\":\"Select squares\",\"elements\":[{\"tagName\":\"circle\",\"class\":null,\"id\":null,\"animation\":false,\"elCode\":\"el-4_1\"},{\"tagName\":\"square\",\"class\":null,\"id\":null,\"animation\":true,\"elCode\":\"el-4_2\"},{\"tagName\":\"square\",\"class\":null,\"id\":null,\"animation\":true,\"elCode\":\"el-4_3\"}],\"rigthSelector\":\"square\"},{\"level\":\"5\",\"description\":\"Select all items\",\"elements\":[{\"tagName\":\"circle\",\"class\":null,\"id\":null,\"animation\":true,\"elCode\":\"el-5_1\"},{\"tagName\":\"square\",\"class\":null,\"id\":null,\"animation\":true,\"elCode\":\"el-5_2\"},{\"tagName\":\"circle\",\"class\":null,\"id\":null,\"animation\":true,\"elCode\":\"el-5_3\"},{\"tagName\":\"square\",\"class\":null,\"id\":null,\"animation\":true,\"elCode\":\"el-5_4\"}],\"rigthSelector\":\"*\"},{\"level\":\"6\",\"description\":\"Select red circle and blue square\",\"elements\":[{\"tagName\":\"circle\",\"class\":null,\"id\":\"red\",\"animation\":true,\"elCode\":\"el-6_1\"},{\"tagName\":\"circle\",\"class\":null,\"id\":null,\"animation\":false,\"elCode\":\"el-6_2\"},{\"tagName\":\"square\",\"class\":\"blue\",\"id\":null,\"animation\":true,\"elCode\":\"el-6_3\"}],\"rigthSelector\":\"#red,.blue\"},{\"level\":\"7\",\"description\":\"Select circle after square\",\"elements\":[{\"tagName\":\"circle\",\"class\":null,\"id\":null,\"animation\":false,\"elCode\":\"el-7_1\"},{\"tagName\":\"square\",\"class\":null,\"id\":null,\"animation\":false,\"elCode\":\"el-7_2\"},{\"tagName\":\"circle\",\"class\":null,\"id\":null,\"animation\":true,\"elCode\":\"el-7_3\"}],\"rigthSelector\":\"square~circle\"},{\"level\":\"8\",\"description\":\"Select all blue items after red item\",\"elements\":[{\"tagName\":\"circle\",\"class\":null,\"id\":\"red\",\"animation\":false,\"elCode\":\"el-8_1\"},{\"tagName\":\"square\",\"class\":\"blue\",\"id\":null,\"animation\":true,\"elCode\":\"el-8_2\"},{\"tagName\":\"circle\",\"class\":\"blue\",\"id\":null,\"animation\":true,\"elCode\":\"el-8_3\"},{\"tagName\":\"circle\",\"class\":null,\"id\":null,\"animation\":false,\"elCode\":\"el-8_4\"}],\"rigthSelector\":\"#red~.blue\"},{\"level\":\"9\",\"description\":\"Select first blue item after red item\",\"elements\":[{\"tagName\":\"circle\",\"class\":null,\"id\":\"red\",\"animation\":false,\"elCode\":\"el-9_1\"},{\"tagName\":\"square\",\"class\":\"blue\",\"id\":null,\"animation\":true,\"elCode\":\"el-9_2\"},{\"tagName\":\"circle\",\"class\":\"blue\",\"id\":null,\"animation\":false,\"elCode\":\"el-9_3\"}],\"rigthSelector\":\"#red+.blue\"},{\"level\":\"10\",\"description\":\"Select green circle\",\"elements\":[{\"tagName\":\"circle\",\"class\":null,\"id\":null,\"animation\":false,\"elCode\":\"el-10_1\"},{\"tagName\":\"circle\",\"class\":null,\"id\":null,\"animation\":true,\"elCode\":\"el-10_2\",\"attribute\":\"green=\\'true\\'\"}],\"rigthSelector\":\"#red+.blue\"}]');\n\n//# sourceURL=webpack://rss-css-selectors/./src/levels-data.json?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.ts");
/******/ 	
/******/ })()
;