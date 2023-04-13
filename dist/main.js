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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  border: 0;\\n  box-sizing: border-box;\\n}\\n\\n#content {\\n  display: grid;\\n  grid-template-rows: 80px 1fr 50px;\\n  height: 100vh;\\n}\\n\\n.header {\\n  background-color: rgb(112, 151, 117);\\n  font-family: 'Dancing Script', cursive;\\n  font-size: 2.5rem;\\n  text-align: center;\\n  line-height: 80px;\\n}\\n\\n.background {\\n  background-color: rgb(161, 204, 165);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: column;\\n}\\n\\n.tabs {\\n  list-style-type: none;\\n  display: flex;\\n  gap: 30px;\\n  font-size: 1.8rem;\\n  font-family: 'Dancing Script', cursive;\\n  cursor: pointer;\\n  padding: 0px;\\n  margin-top: 20px;\\n}\\n\\nli {\\n  background-color: rgb(143, 185, 150);\\n  width: 130px;\\n  text-align: center;\\n  border-radius: 20px 20px 0px 0px;\\n}\\n\\n.active-li {\\n  background-color: rgb(112, 151, 117);\\n}\\n\\nli:hover {\\n  background-color: rgb(112, 151, 117);\\n}\\n\\n.content {\\n  background-color: rgb(143, 185, 150);\\n  width: 600px;\\n  height: auto;\\n  margin-bottom: 20px;\\n  border-radius: 50px;\\n  text-align: center;\\n  padding: 0px 15px 0px 15px;\\n}\\n\\n.footer {\\n  background-color: rgb(112, 151, 117);\\n  font-family: 'Chakra Petch', sans-serif;\\n  font-size: 1.3rem;\\n  text-align: center;\\n  line-height: 50px;\\n}\\n\\nimg {\\n  height: 300px;\\n  width: 300px;\\n  margin: 15px 0px 15px 0px;\\n  border-radius: 10%;\\n}\\n\\nh2 {\\n  font-family: 'Dancing Script', cursive;\\n  margin: 25px 0px 5px 0px;\\n}\\n\\ndiv {\\n  font-family: 'Playfair Display', serif;\\n  text-align: justify;\\n}\\n\\n.recipe-card,\\n.contact-card {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n}\\n\\n.recipe-info,\\n.contact-card > div {\\n  padding: 15px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_bob_chef_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/bob_chef.jpg */ \"./src/images/bob_chef.jpg\");\n/* harmony import */ var _images_mana_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/mana.jpeg */ \"./src/images/mana.jpeg\");\n/* harmony import */ var _images_entregador_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/entregador.jpg */ \"./src/images/entregador.jpg\");\n/* harmony import */ var _images_suporte_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/suporte.jpg */ \"./src/images/suporte.jpg\");\n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  const content = document.querySelector('.content');\n  const liHome = document.querySelector('.home');\n  const liMenu = document.querySelector('.menu');\n  const liContact = document.querySelector('.contact');\n  liHome.classList.remove('active-li');\n  liMenu.classList.remove('active-li');\n  liContact.classList.add('active-li');\n\n  const collection = [...content.children];\n  collection.forEach((item) => item.remove());\n\n  const firstContact = document.createElement('div');\n  const firstInfo = document.createElement('div');\n  const firstName = document.createElement('h2');\n  const firstPosition = document.createElement('div');\n  const firstPhone = document.createElement('div');\n  const imgBob = new Image();\n\n  firstContact.classList.add('contact-card');\n  firstName.textContent = 'Bob Susin';\n  firstPosition.textContent = 'Chef principal e proprietário';\n  firstPhone.textContent = '(91) 3100-2173 / (69) 2161-8736';\n  imgBob.src = _images_bob_chef_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  firstInfo.append(firstName, firstPosition, firstPhone);\n  firstContact.append(imgBob, firstInfo);\n\n  const secondContact = document.createElement('div');\n  const secondInfo = document.createElement('div');\n  const secondName = document.createElement('h2');\n  const secondPosition = document.createElement('div');\n  const secondPhone = document.createElement('div');\n  const imgMana = new Image();\n\n  secondContact.classList.add('contact-card');\n  secondName.textContent = 'Mana Gonçalves';\n  secondPosition.textContent = 'Gerente de Plantão';\n  secondPhone.textContent = '(22) 3026-1382';\n  imgMana.src = _images_mana_jpeg__WEBPACK_IMPORTED_MODULE_1__;\n  secondInfo.append(secondName, secondPosition, secondPhone);\n  secondContact.append(imgMana, secondInfo);\n\n  const thirdContact = document.createElement('div');\n  const thirdInfo = document.createElement('div');\n  const thirdName = document.createElement('h2');\n  const thirdPosition = document.createElement('div');\n  const thirdPhone = document.createElement('div');\n  const imgEntregador = new Image();\n\n  thirdContact.classList.add('contact-card');\n  thirdName.textContent = 'Claudinho';\n  thirdPosition.textContent = 'Entregador e quebra galho';\n  thirdPhone.textContent = '(68) 3476-1704 / (79) 2255-4656';\n  imgEntregador.src = _images_entregador_jpg__WEBPACK_IMPORTED_MODULE_2__;\n  thirdInfo.append(thirdName, thirdPosition, thirdPhone);\n  thirdContact.append(imgEntregador, thirdInfo);\n\n  const fourthContact = document.createElement('div');\n  const fourthInfo = document.createElement('div');\n  const fourthName = document.createElement('h2');\n  const fourthPosition = document.createElement('div');\n  const fourthPhone = document.createElement('div');\n  const imgSuporte = new Image();\n\n  fourthContact.classList.add('contact-card');\n  fourthName.textContent = 'Marcos';\n  fourthPosition.textContent = 'Suporte de TI';\n  fourthPhone.textContent = 'dogao_do_ti@hotmail.com';\n  imgSuporte.src = _images_suporte_jpg__WEBPACK_IMPORTED_MODULE_3__;\n  fourthInfo.append(fourthName, fourthPosition, fourthPhone);\n  fourthContact.append(imgSuporte, fourthInfo);\n\n  content.append(firstContact, secondContact, thirdContact, fourthContact);\n}\n\n\n//# sourceURL=webpack://restaurant-webpack/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_bob_chef_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/bob_chef.jpg */ \"./src/images/bob_chef.jpg\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  const content = document.querySelector('.content');\n  const liHome = document.querySelector('.home');\n  const liMenu = document.querySelector('.menu');\n  const liContact = document.querySelector('.contact');\n\n  liHome.classList.add('active-li');\n  liMenu.classList.remove('active-li');\n  liContact.classList.remove('active-li');\n\n  const collection = [...content.children];\n  collection.forEach((item) => item.remove());\n\n  const intro = document.createElement('h2');\n  const introText = document.createElement('div');\n  const history = document.createElement('h2');\n  const historyText = document.createElement('div');\n  const structure = document.createElement('h2');\n  const structureText = document.createElement('div');\n\n  const bobinho = new Image();\n\n  intro.textContent = 'Proposta';\n  introText.textContent =\n    'O Restaurante do Bobinho © foi criado através do sonho de Bob Susin com o propósito de unificar uma série de receitas deliciosas em apenas um estabelecimento. Bob viu uma oportunidade de mercado no norte de Florianópolis e a agarrou sem pensar duas vezes.';\n  history.textContent = 'História';\n  historyText.textContent =\n    'Bob Susin, ou Bobinho (apelido dado por seu avô) começou pequeno, suas primeiras vendas foram realizadas no boca a boca, realizava entregas de porta em porta, no entanto sua vida mudou após ter começado a vender pratos típicos da ilha na praia, para turistas do mundo inteiro. Com um novo rendimento estabelecido, Bob decide então investir no seu próprio restaurante, buscando centralizar a clientela que já o conhecia e tinha apreço pelo seu produto.';\n  structure.textContent = 'Espaço';\n  structureText.textContent =\n    'O Restaurante conta com 200m² e 20 mesas com capacidade para até 4 pessoas. Está localizado em área nobre do bairro Ingleses e mantém um padrão alto de qualidade em todas as suas etapas.';\n  bobinho.src = _images_bob_chef_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  bobinho.classList.add('bob-chef');\n\n  content.append(\n    intro,\n    introText,\n    history,\n    historyText,\n    structure,\n    structureText,\n    bobinho\n  );\n}\n\n\n//# sourceURL=webpack://restaurant-webpack/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _page_structure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-structure.js */ \"./src/page-structure.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\n\n(0,_page_structure_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_home_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n(function () {\n  const home = document.querySelector('.home');\n  const menu = document.querySelector('.menu');\n  const contact = document.querySelector('.contact');\n\n  home.addEventListener('click', () => (0,_home_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n  menu.addEventListener('click', () => (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n  contact.addEventListener('click', () => (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n})();\n\n\n//# sourceURL=webpack://restaurant-webpack/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_pastel_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/pastel.jpeg */ \"./src/images/pastel.jpeg\");\n/* harmony import */ var _images_cenoura_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/cenoura.jpg */ \"./src/images/cenoura.jpg\");\n/* harmony import */ var _images_iscas_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/iscas.jpeg */ \"./src/images/iscas.jpeg\");\n/* harmony import */ var _images_sorvete_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/sorvete.jpg */ \"./src/images/sorvete.jpg\");\n/* harmony import */ var _images_uva_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/uva.jpeg */ \"./src/images/uva.jpeg\");\n/* harmony import */ var _images_bolo_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/bolo.jpg */ \"./src/images/bolo.jpg\");\n/* harmony import */ var _images_caipirinha_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/caipirinha.jpg */ \"./src/images/caipirinha.jpg\");\n/* harmony import */ var _images_suco_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/suco.jpg */ \"./src/images/suco.jpg\");\n/* harmony import */ var _images_vinho_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/vinho.jpg */ \"./src/images/vinho.jpg\");\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  const content = document.querySelector('.content');\n  const liHome = document.querySelector('.home');\n  const liMenu = document.querySelector('.menu');\n  const liContact = document.querySelector('.contact');\n  liHome.classList.remove('active-li');\n  liMenu.classList.add('active-li');\n  liContact.classList.remove('active-li');\n\n  const collection = [...content.children];\n  collection.forEach((item) => item.remove());\n\n  const firstGroup = document.createElement('h2');\n  firstGroup.textContent = 'Pratos Principais';\n\n  const recipeCard1 = document.createElement('div');\n  const recipeInfo1 = document.createElement('div');\n  const name1 = document.createElement('h3');\n  const desc1 = document.createElement('div');\n\n  name1.textContent = 'Pastel';\n  desc1.textContent =\n    'Bob descobriu essa iguaria quando sua vovó esqueceu um pastel em cima da mesa, neste momento foi amor a primeira mordida.';\n  const imgPastel = new Image();\n  imgPastel.src = _images_pastel_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n  recipeCard1.classList.add('recipe-card');\n  recipeInfo1.classList.add('recipe-info');\n  recipeInfo1.append(name1, desc1);\n  recipeCard1.append(imgPastel, recipeInfo1);\n\n  const recipeCard2 = document.createElement('div');\n  const recipeInfo2 = document.createElement('div');\n  const name2 = document.createElement('h3');\n  const desc2 = document.createElement('div');\n\n  name2.textContent = 'Cenoura Refogada';\n  desc2.textContent =\n    'Desde pequeno Bob possui uma ligação muito forte com cenoura picada em rodelas, ultimamente tem preferido ela ralada em suas refeições pessoais mas faz de acordo com o gosto de cada cliente.';\n  const imgCenoura = new Image();\n  imgCenoura.src = _images_cenoura_jpg__WEBPACK_IMPORTED_MODULE_1__;\n  recipeCard2.classList.add('recipe-card');\n  recipeInfo2.classList.add('recipe-info');\n  recipeInfo2.append(name2, desc2);\n  recipeCard2.append(imgCenoura, recipeInfo2);\n\n  const recipeCard3 = document.createElement('div');\n  const recipeInfo3 = document.createElement('div');\n  const name3 = document.createElement('h3');\n  const desc3 = document.createElement('div');\n\n  name3.textContent = 'Iscas de Frango';\n  desc3.textContent =\n    'Bob aprendeu essa receita com sua vovó, ela nunca separa um pedaço pra ele mas seu vovô sempre dá um jeitinho';\n  const imgIscas = new Image();\n  imgIscas.src = _images_iscas_jpeg__WEBPACK_IMPORTED_MODULE_2__;\n  recipeInfo3.classList.add('recipe-info');\n  recipeCard3.classList.add('recipe-card');\n  recipeInfo3.append(name3, desc3);\n  recipeCard3.append(imgIscas, recipeInfo3);\n\n  const secondGroup = document.createElement('h2');\n  secondGroup.textContent = 'Sobremesas';\n\n  const recipeCard4 = document.createElement('div');\n  const recipeInfo4 = document.createElement('div');\n  const name4 = document.createElement('h3');\n  const desc4 = document.createElement('div');\n\n  name4.textContent = 'Sorvete de Baunilha';\n  desc4.textContent =\n    'Bob aprendeu sua receita de Sorvete em uma viagem realizada a China, onde a sobremesa foi inventada.';\n  const imgSorvete = new Image();\n  imgSorvete.src = _images_sorvete_jpg__WEBPACK_IMPORTED_MODULE_3__;\n  recipeInfo4.classList.add('recipe-info');\n  recipeCard4.classList.add('recipe-card');\n  recipeInfo4.append(name4, desc4);\n  recipeCard4.append(imgSorvete, recipeInfo4);\n\n  const recipeCard5 = document.createElement('div');\n  const recipeInfo5 = document.createElement('div');\n  const name5 = document.createElement('h3');\n  const desc5 = document.createElement('div');\n\n  name5.textContent = 'Uva Congelada';\n  desc5.textContent =\n    'Bob desenvolveu um apreço pela fruta graças à sua irmã de criação, a Mana. Ela sempre deixa uvas cairem \"acidentalmente\" para que ele possa comer.';\n  const imgUva = new Image();\n  imgUva.src = _images_uva_jpeg__WEBPACK_IMPORTED_MODULE_4__;\n  recipeInfo5.classList.add('recipe-info');\n  recipeCard5.classList.add('recipe-card');\n  recipeInfo5.append(name5, desc5);\n  recipeCard5.append(imgUva, recipeInfo5);\n\n  const recipeCard6 = document.createElement('div');\n  const recipeInfo6 = document.createElement('div');\n  const name6 = document.createElement('h3');\n  const desc6 = document.createElement('div');\n\n  name6.textContent = 'Bolo de Chocolate';\n  desc6.textContent =\n    'Bob decidiu aprender a fazer um bolo de chocolate após comer um bolo feito por sua vovó que estava duro como pedra, há males que vem para o bem.';\n  const imgBolo = new Image();\n  imgBolo.src = _images_bolo_jpg__WEBPACK_IMPORTED_MODULE_5__;\n  recipeInfo6.classList.add('recipe-info');\n  recipeCard6.classList.add('recipe-card');\n  recipeInfo6.append(name6, desc6);\n  recipeCard6.append(imgBolo, recipeInfo6);\n\n  const thirdGroup = document.createElement('h2');\n  thirdGroup.textContent = 'Bebidas';\n\n  const recipeCard7 = document.createElement('div');\n  const recipeInfo7 = document.createElement('div');\n  const name7 = document.createElement('h3');\n  const desc7 = document.createElement('div');\n\n  name7.textContent = 'Caipirinha';\n  desc7.textContent =\n    'Esse drink foi um presente dado por seu vovô, que é apaixonado pela bebida. Bob costuma fazê-la nos finais de semana.';\n  const imgCaipirinha = new Image();\n  imgCaipirinha.src = _images_caipirinha_jpg__WEBPACK_IMPORTED_MODULE_6__;\n  recipeInfo7.classList.add('recipe-info');\n  recipeCard7.classList.add('recipe-card');\n  recipeInfo7.append(name7, desc7);\n  recipeCard7.append(imgCaipirinha, recipeInfo7);\n\n  const recipeCard8 = document.createElement('div');\n  const recipeInfo8 = document.createElement('div');\n  const name8 = document.createElement('h3');\n  const desc8 = document.createElement('div');\n\n  name8.textContent = 'Suco Vegano';\n  desc8.textContent =\n    'Inspirado por Narcisa Tamborindeguy, Bob desenvolveu um suco vegano com vegetais e frutas de capacidade antioxidante.';\n  const imgSuco = new Image();\n  imgSuco.src = _images_suco_jpg__WEBPACK_IMPORTED_MODULE_7__;\n  recipeInfo8.classList.add('recipe-info');\n  recipeCard8.classList.add('recipe-card');\n  recipeInfo8.append(name8, desc8);\n  recipeCard8.append(imgSuco, recipeInfo8);\n\n  const recipeCard9 = document.createElement('div');\n  const recipeInfo9 = document.createElement('div');\n  const name9 = document.createElement('h3');\n  const desc9 = document.createElement('div');\n\n  name9.textContent = 'Vinho da Casa';\n  desc9.textContent =\n    'Para agradar sua titia, Bob também planta uvas e fabrica o próprio vinho, apenas ele pode esmagar as uvas com as patas.';\n  const imgVinho = new Image();\n  imgVinho.src = _images_vinho_jpg__WEBPACK_IMPORTED_MODULE_8__;\n  recipeInfo9.classList.add('recipe-info');\n  recipeCard9.classList.add('recipe-card');\n  recipeInfo9.append(name9, desc9);\n  recipeCard9.append(imgVinho, recipeInfo9);\n\n  content.append(firstGroup, recipeCard1, recipeCard2, recipeCard3);\n  content.append(secondGroup, recipeCard4, recipeCard5, recipeCard6);\n  content.append(thirdGroup, recipeCard7, recipeCard8, recipeCard9);\n}\n\n\n//# sourceURL=webpack://restaurant-webpack/./src/menu.js?");

/***/ }),

/***/ "./src/page-structure.js":
/*!*******************************!*\
  !*** ./src/page-structure.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  const contentId = document.querySelector('#content');\n\n  const header = document.createElement('header');\n  const background = document.createElement('div');\n  const ul = document.createElement('ul');\n  const liHome = document.createElement('li');\n  const liMenu = document.createElement('li');\n  const liContact = document.createElement('li');\n  const content = document.createElement('div');\n  const footer = document.createElement('footer');\n\n  header.textContent = 'Restaurante do Bobinho';\n  liHome.textContent = 'Início';\n  liMenu.textContent = 'Cardápio';\n  liContact.textContent = 'Contato';\n  footer.textContent = 'vitmonjo - 2023';\n\n  header.classList.add('header');\n  background.classList.add('background');\n  ul.classList.add('tabs');\n  liHome.classList.add('active-li');\n  liHome.classList.add('home');\n  liMenu.classList.add('menu');\n  liContact.classList.add('contact');\n  content.classList.add('content');\n  footer.classList.add('footer');\n  /*\n  liHome.addEventListener('click', () => {\n    const collection = [...content.children];\n    collection.forEach((item) => item.remove());\n  });\n\n  liMenu.addEventListener('click', () => {\n    const collection = [...content.children];\n    collection.forEach((item) => item.remove());\n  });\n\n  liContact.addEventListener('click', () => {\n    const collection = [...content.children];\n    collection.forEach((item) => item.remove());\n  });\n*/\n  ul.append(liHome, liMenu, liContact);\n  background.append(ul, content);\n  contentId.append(header, background, footer);\n}\n\n\n//# sourceURL=webpack://restaurant-webpack/./src/page-structure.js?");

/***/ }),

/***/ "./src/images/bob_chef.jpg":
/*!*********************************!*\
  !*** ./src/images/bob_chef.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"aba5273f6fc4801ce8e2.jpg\";\n\n//# sourceURL=webpack://restaurant-webpack/./src/images/bob_chef.jpg?");

/***/ }),

/***/ "./src/images/bolo.jpg":
/*!*****************************!*\
  !*** ./src/images/bolo.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5a3a4391ca3ce5473d89.jpg\";\n\n//# sourceURL=webpack://restaurant-webpack/./src/images/bolo.jpg?");

/***/ }),

/***/ "./src/images/caipirinha.jpg":
/*!***********************************!*\
  !*** ./src/images/caipirinha.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8aba89c38f45b58357f5.jpg\";\n\n//# sourceURL=webpack://restaurant-webpack/./src/images/caipirinha.jpg?");

/***/ }),

/***/ "./src/images/cenoura.jpg":
/*!********************************!*\
  !*** ./src/images/cenoura.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"281a93d059568eef2973.jpg\";\n\n//# sourceURL=webpack://restaurant-webpack/./src/images/cenoura.jpg?");

/***/ }),

/***/ "./src/images/entregador.jpg":
/*!***********************************!*\
  !*** ./src/images/entregador.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"215bbdb904a86ac8286f.jpg\";\n\n//# sourceURL=webpack://restaurant-webpack/./src/images/entregador.jpg?");

/***/ }),

/***/ "./src/images/iscas.jpeg":
/*!*******************************!*\
  !*** ./src/images/iscas.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d8fd0abfa0fae207bd08.jpeg\";\n\n//# sourceURL=webpack://restaurant-webpack/./src/images/iscas.jpeg?");

/***/ }),

/***/ "./src/images/mana.jpeg":
/*!******************************!*\
  !*** ./src/images/mana.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"29ccbe45fe9173b18d6b.jpeg\";\n\n//# sourceURL=webpack://restaurant-webpack/./src/images/mana.jpeg?");

/***/ }),

/***/ "./src/images/pastel.jpeg":
/*!********************************!*\
  !*** ./src/images/pastel.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"384f71444a7a39e5d43b.jpeg\";\n\n//# sourceURL=webpack://restaurant-webpack/./src/images/pastel.jpeg?");

/***/ }),

/***/ "./src/images/sorvete.jpg":
/*!********************************!*\
  !*** ./src/images/sorvete.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"30139cad2a49ddefaeab.jpg\";\n\n//# sourceURL=webpack://restaurant-webpack/./src/images/sorvete.jpg?");

/***/ }),

/***/ "./src/images/suco.jpg":
/*!*****************************!*\
  !*** ./src/images/suco.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"27ad8b74243bc4253380.jpg\";\n\n//# sourceURL=webpack://restaurant-webpack/./src/images/suco.jpg?");

/***/ }),

/***/ "./src/images/suporte.jpg":
/*!********************************!*\
  !*** ./src/images/suporte.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"11e759fa19b542eb8ce5.jpg\";\n\n//# sourceURL=webpack://restaurant-webpack/./src/images/suporte.jpg?");

/***/ }),

/***/ "./src/images/uva.jpeg":
/*!*****************************!*\
  !*** ./src/images/uva.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"206d18f589b4355b46ce.jpeg\";\n\n//# sourceURL=webpack://restaurant-webpack/./src/images/uva.jpeg?");

/***/ }),

/***/ "./src/images/vinho.jpg":
/*!******************************!*\
  !*** ./src/images/vinho.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1d235a143a185f22994f.jpg\";\n\n//# sourceURL=webpack://restaurant-webpack/./src/images/vinho.jpg?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;