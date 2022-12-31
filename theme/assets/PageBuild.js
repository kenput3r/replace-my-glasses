/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectSpread2)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__.default)(arr, i) || (0,_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__.default)(arr, i) || (0,_babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/PrescriptionForm.js":
/*!*********************************!*\
  !*** ./src/PrescriptionForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrescriptionForm": () => (/* binding */ PrescriptionForm)
/* harmony export */ });
/* harmony import */ var _Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


var _jsxFileName = "/Users/kenputer/Apps/replace-my-glasses/src/PrescriptionForm.js";

/* global React */
function generateOptions(start, end, stepSize, numType) {
  var _this = this;

  var values = [];

  for (var i = start; i <= end; i += stepSize) {
    var num = numType === "float" ? parseFloat(i).toFixed(2) : "00".concat(i).slice(-3);
    values.push(num);
  }

  var options = values.map(function (value) {
    var _React$createElement;

    return /*#__PURE__*/React.createElement("option", (_React$createElement = {
      key: value,
      value: value,
      __self: _this
    }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement, "__self", _this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement, "__source", {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }), _React$createElement), value);
  });
  return options;
}

function setEye(state, setState, key, value) {
  var tempState = (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)({}, state);

  tempState[key] = value;
  setState(tempState);
}

function PrescriptionForm(_ref) {
  var _React$createElement2, _React$createElement3, _React$createElement4, _React$createElement5, _React$createElement6, _React$createElement7, _React$createElement8, _React$createElement9, _React$createElement10, _React$createElement11, _React$createElement12, _React$createElement13, _React$createElement14, _React$createElement15, _React$createElement16, _React$createElement17, _React$createElement18, _React$createElement19, _React$createElement20, _React$createElement21, _React$createElement22, _React$createElement23, _React$createElement24, _React$createElement25, _React$createElement26, _React$createElement27, _React$createElement28, _React$createElement29, _React$createElement30, _React$createElement31, _React$createElement32, _React$createElement33, _React$createElement34, _React$createElement35, _React$createElement36, _React$createElement37, _React$createElement38, _React$createElement39, _React$createElement40, _React$createElement41, _React$createElement42, _React$createElement43, _React$createElement44, _React$createElement45, _React$createElement46, _React$createElement47, _React$createElement48, _React$createElement49, _React$createElement50, _React$createElement51, _React$createElement52, _React$createElement53, _React$createElement54, _React$createElement55, _React$createElement56, _React$createElement57, _React$createElement58, _React$createElement59, _React$createElement60, _React$createElement61, _React$createElement62, _React$createElement63, _React$createElement64, _React$createElement65, _React$createElement66, _React$createElement67, _React$createElement68;

  var setFile = _ref.setFile,
      file = _ref.file,
      leftEye = _ref.leftEye,
      setLeftEye = _ref.setLeftEye,
      rightEye = _ref.rightEye,
      setRightEye = _ref.setRightEye;
  return /*#__PURE__*/React.createElement("div", (_React$createElement68 = {
    className: "prescription-form",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement68, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement68, "__source", {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }), _React$createElement68), /*#__PURE__*/React.createElement("div", (_React$createElement4 = {
    className: "group",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement4, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement4, "__source", {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 7
  }), _React$createElement4), /*#__PURE__*/React.createElement("div", (_React$createElement2 = {
    className: "h4",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement2, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement2, "__source", {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }), _React$createElement2), "Right Eye (OD)"), /*#__PURE__*/React.createElement("div", (_React$createElement3 = {
    className: "h4",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement3, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement3, "__source", {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }), _React$createElement3), "Left Eye (OS)")), /*#__PURE__*/React.createElement("div", (_React$createElement15 = {
    className: "group",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement15, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement15, "__source", {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 7
  }), _React$createElement15), /*#__PURE__*/React.createElement("div", (_React$createElement9 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement9, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement9, "__source", {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }), _React$createElement9), /*#__PURE__*/React.createElement("label", (_React$createElement8 = {
    htmlFor: "RightSPH",
    "aria-label": "SPH for Right eye",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement8, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement8, "__source", {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 11
  }), _React$createElement8), /*#__PURE__*/React.createElement("span", (_React$createElement5 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement5, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement5, "__source", {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 13
  }), _React$createElement5), "SPH"), /*#__PURE__*/React.createElement("select", (_React$createElement7 = {
    id: "RightSPH",
    onChange: function onChange(e) {
      return setEye(rightEye, setRightEye, "SPH", e.target.value);
    },
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement7, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement7, "__source", {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 13
  }), _React$createElement7), /*#__PURE__*/React.createElement("option", (_React$createElement6 = {
    "default": true,
    value: "",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement6, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement6, "__source", {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 15
  }), _React$createElement6), " "), generateOptions(-20.0, 20.0, 0.25, "float")))), /*#__PURE__*/React.createElement("div", (_React$createElement14 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement14, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement14, "__source", {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 9
  }), _React$createElement14), /*#__PURE__*/React.createElement("label", (_React$createElement13 = {
    htmlFor: "LeftSPH",
    "aria-label": "SPH for Left eye",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement13, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement13, "__source", {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 11
  }), _React$createElement13), /*#__PURE__*/React.createElement("span", (_React$createElement10 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement10, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement10, "__source", {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 13
  }), _React$createElement10), "SPH"), /*#__PURE__*/React.createElement("select", (_React$createElement12 = {
    id: "LeftSPH",
    onChange: function onChange(e) {
      return setEye(leftEye, setLeftEye, "SPH", e.target.value);
    },
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement12, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement12, "__source", {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 13
  }), _React$createElement12), /*#__PURE__*/React.createElement("option", (_React$createElement11 = {
    "default": true,
    value: "",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement11, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement11, "__source", {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 15
  }), _React$createElement11), " "), generateOptions(-20.0, 20.0, 0.25, "float"))))), /*#__PURE__*/React.createElement("div", (_React$createElement26 = {
    className: "group",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement26, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement26, "__source", {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 7
  }), _React$createElement26), /*#__PURE__*/React.createElement("div", (_React$createElement20 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement20, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement20, "__source", {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 9
  }), _React$createElement20), /*#__PURE__*/React.createElement("label", (_React$createElement19 = {
    htmlFor: "RightCYL",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement19, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement19, "__source", {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 11
  }), _React$createElement19), /*#__PURE__*/React.createElement("span", (_React$createElement16 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement16, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement16, "__source", {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 13
  }), _React$createElement16), "CYL"), /*#__PURE__*/React.createElement("select", (_React$createElement18 = {
    id: "RightCYL",
    "aria-label": "CYL for Right eye",
    onChange: function onChange(e) {
      return setEye(rightEye, setRightEye, "CYL", e.target.value);
    },
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement18, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement18, "__source", {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 13
  }), _React$createElement18), /*#__PURE__*/React.createElement("option", (_React$createElement17 = {
    "default": true,
    value: "",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement17, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement17, "__source", {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 15
  }), _React$createElement17), " "), generateOptions(-20.0, 20.0, 0.25, "float")))), /*#__PURE__*/React.createElement("div", (_React$createElement25 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement25, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement25, "__source", {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 9
  }), _React$createElement25), /*#__PURE__*/React.createElement("label", (_React$createElement24 = {
    htmlFor: "LeftCYL",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement24, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement24, "__source", {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 11
  }), _React$createElement24), /*#__PURE__*/React.createElement("span", (_React$createElement21 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement21, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement21, "__source", {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 13
  }), _React$createElement21), "CYL"), /*#__PURE__*/React.createElement("select", (_React$createElement23 = {
    id: "LeftCYL",
    "aria-label": "CYL for Left eye",
    onChange: function onChange(e) {
      return setEye(leftEye, setLeftEye, "CYL", e.target.value);
    },
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement23, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement23, "__source", {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 13
  }), _React$createElement23), /*#__PURE__*/React.createElement("option", (_React$createElement22 = {
    "default": true,
    value: "",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement22, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement22, "__source", {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 15
  }), _React$createElement22), " "), generateOptions(-20.0, 20.0, 0.25, "float"))))), /*#__PURE__*/React.createElement("div", (_React$createElement39 = {
    className: "group",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement39, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement39, "__source", {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 7
  }), _React$createElement39), /*#__PURE__*/React.createElement("div", (_React$createElement32 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement32, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement32, "__source", {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 9
  }), _React$createElement32), /*#__PURE__*/React.createElement("label", (_React$createElement31 = {
    htmlFor: "RightAxis",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement31, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement31, "__source", {
    fileName: _jsxFileName,
    lineNumber: 111,
    columnNumber: 11
  }), _React$createElement31), /*#__PURE__*/React.createElement("span", (_React$createElement27 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement27, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement27, "__source", {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 13
  }), _React$createElement27), "Axis"), /*#__PURE__*/React.createElement("select", (_React$createElement30 = {
    id: "RightAxis",
    "aria-label": "Axis for Right eye",
    onChange: function onChange(e) {
      return setEye(rightEye, setRightEye, "Axis", e.target.value);
    },
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement30, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement30, "__source", {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 13
  }), _React$createElement30), /*#__PURE__*/React.createElement("option", (_React$createElement28 = {
    "default": true,
    value: "",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement28, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement28, "__source", {
    fileName: _jsxFileName,
    lineNumber: 120,
    columnNumber: 15
  }), _React$createElement28), " "), /*#__PURE__*/React.createElement("option", (_React$createElement29 = {
    value: "blank/0",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement29, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement29, "__source", {
    fileName: _jsxFileName,
    lineNumber: 123,
    columnNumber: 15
  }), _React$createElement29), "blank/0"), generateOptions(1, 180, 1)))), /*#__PURE__*/React.createElement("div", (_React$createElement38 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement38, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement38, "__source", {
    fileName: _jsxFileName,
    lineNumber: 129,
    columnNumber: 9
  }), _React$createElement38), /*#__PURE__*/React.createElement("label", (_React$createElement37 = {
    htmlFor: "LeftAxis",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement37, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement37, "__source", {
    fileName: _jsxFileName,
    lineNumber: 130,
    columnNumber: 11
  }), _React$createElement37), /*#__PURE__*/React.createElement("span", (_React$createElement33 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement33, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement33, "__source", {
    fileName: _jsxFileName,
    lineNumber: 131,
    columnNumber: 13
  }), _React$createElement33), "Axis"), /*#__PURE__*/React.createElement("select", (_React$createElement36 = {
    id: "LeftAxis",
    "aria-label": "Axis for Left eye",
    onChange: function onChange(e) {
      return setEye(leftEye, setLeftEye, "Axis", e.target.value);
    },
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement36, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement36, "__source", {
    fileName: _jsxFileName,
    lineNumber: 132,
    columnNumber: 13
  }), _React$createElement36), /*#__PURE__*/React.createElement("option", (_React$createElement34 = {
    "default": true,
    value: "",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement34, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement34, "__source", {
    fileName: _jsxFileName,
    lineNumber: 139,
    columnNumber: 15
  }), _React$createElement34), " "), /*#__PURE__*/React.createElement("option", (_React$createElement35 = {
    value: "blank/0",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement35, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement35, "__source", {
    fileName: _jsxFileName,
    lineNumber: 142,
    columnNumber: 15
  }), _React$createElement35), "blank/0"), generateOptions(1, 180, 1))))), /*#__PURE__*/React.createElement("div", (_React$createElement50 = {
    className: "group",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement50, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement50, "__source", {
    fileName: _jsxFileName,
    lineNumber: 149,
    columnNumber: 7
  }), _React$createElement50), /*#__PURE__*/React.createElement("div", (_React$createElement44 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement44, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement44, "__source", {
    fileName: _jsxFileName,
    lineNumber: 150,
    columnNumber: 9
  }), _React$createElement44), /*#__PURE__*/React.createElement("label", (_React$createElement43 = {
    htmlFor: "RightAdd",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement43, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement43, "__source", {
    fileName: _jsxFileName,
    lineNumber: 151,
    columnNumber: 11
  }), _React$createElement43), /*#__PURE__*/React.createElement("span", (_React$createElement40 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement40, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement40, "__source", {
    fileName: _jsxFileName,
    lineNumber: 152,
    columnNumber: 13
  }), _React$createElement40), "Add"), /*#__PURE__*/React.createElement("select", (_React$createElement42 = {
    id: "RightAdd",
    "aria-label": "Add for Right eye",
    onChange: function onChange(e) {
      return setEye(rightEye, setRightEye, "Add", e.target.value);
    },
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement42, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement42, "__source", {
    fileName: _jsxFileName,
    lineNumber: 153,
    columnNumber: 13
  }), _React$createElement42), /*#__PURE__*/React.createElement("option", (_React$createElement41 = {
    "default": true,
    value: "",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement41, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement41, "__source", {
    fileName: _jsxFileName,
    lineNumber: 160,
    columnNumber: 15
  }), _React$createElement41), " "), generateOptions(0.25, 3.5, 0.25, "float")))), /*#__PURE__*/React.createElement("div", (_React$createElement49 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement49, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement49, "__source", {
    fileName: _jsxFileName,
    lineNumber: 168,
    columnNumber: 9
  }), _React$createElement49), /*#__PURE__*/React.createElement("label", (_React$createElement48 = {
    htmlFor: "LeftAdd",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement48, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement48, "__source", {
    fileName: _jsxFileName,
    lineNumber: 169,
    columnNumber: 11
  }), _React$createElement48), /*#__PURE__*/React.createElement("span", (_React$createElement45 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement45, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement45, "__source", {
    fileName: _jsxFileName,
    lineNumber: 170,
    columnNumber: 13
  }), _React$createElement45), "Add"), /*#__PURE__*/React.createElement("select", (_React$createElement47 = {
    id: "LeftAdd",
    "aria-label": "Add for Left eye",
    onChange: function onChange(e) {
      return setEye(leftEye, setLeftEye, "Add", e.target.value);
    },
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement47, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement47, "__source", {
    fileName: _jsxFileName,
    lineNumber: 171,
    columnNumber: 13
  }), _React$createElement47), /*#__PURE__*/React.createElement("option", (_React$createElement46 = {
    "default": true,
    value: "",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement46, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement46, "__source", {
    fileName: _jsxFileName,
    lineNumber: 176,
    columnNumber: 15
  }), _React$createElement46), " "), generateOptions(0.25, 3.5, 0.25, "float"))))), /*#__PURE__*/React.createElement("div", (_React$createElement61 = {
    className: "group",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement61, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement61, "__source", {
    fileName: _jsxFileName,
    lineNumber: 185,
    columnNumber: 7
  }), _React$createElement61), /*#__PURE__*/React.createElement("div", (_React$createElement55 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement55, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement55, "__source", {
    fileName: _jsxFileName,
    lineNumber: 186,
    columnNumber: 9
  }), _React$createElement55), /*#__PURE__*/React.createElement("label", (_React$createElement52 = {
    htmlFor: "RightPD",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement52, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement52, "__source", {
    fileName: _jsxFileName,
    lineNumber: 188,
    columnNumber: 11
  }), _React$createElement52), "Pupilary Distance ", /*#__PURE__*/React.createElement("span", (_React$createElement51 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement51, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement51, "__source", {
    fileName: _jsxFileName,
    lineNumber: 189,
    columnNumber: 31
  }), _React$createElement51), "Right")), /*#__PURE__*/React.createElement("select", (_React$createElement54 = {
    id: "RightPD",
    "aria-label": "PD for Right eye",
    onChange: function onChange(e) {
      return setEye(rightEye, setRightEye, "PD", e.target.value);
    },
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement54, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement54, "__source", {
    fileName: _jsxFileName,
    lineNumber: 191,
    columnNumber: 11
  }), _React$createElement54), /*#__PURE__*/React.createElement("option", (_React$createElement53 = {
    "default": true,
    value: "",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement53, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement53, "__source", {
    fileName: _jsxFileName,
    lineNumber: 196,
    columnNumber: 13
  }), _React$createElement53), " "), generateOptions(40, 75, 0.5, "float"))), /*#__PURE__*/React.createElement("div", (_React$createElement60 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement60, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement60, "__source", {
    fileName: _jsxFileName,
    lineNumber: 203,
    columnNumber: 9
  }), _React$createElement60), /*#__PURE__*/React.createElement("label", (_React$createElement57 = {
    htmlFor: "LeftPD",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement57, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement57, "__source", {
    fileName: _jsxFileName,
    lineNumber: 205,
    columnNumber: 11
  }), _React$createElement57), "Pupilary Distance ", /*#__PURE__*/React.createElement("span", (_React$createElement56 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement56, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement56, "__source", {
    fileName: _jsxFileName,
    lineNumber: 206,
    columnNumber: 31
  }), _React$createElement56), "Left")), /*#__PURE__*/React.createElement("select", (_React$createElement59 = {
    id: "LeftPD",
    "aria-label": "PD for Left eye",
    onChange: function onChange(e) {
      return setEye(leftEye, setLeftEye, "PD", e.target.value);
    },
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement59, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement59, "__source", {
    fileName: _jsxFileName,
    lineNumber: 208,
    columnNumber: 11
  }), _React$createElement59), /*#__PURE__*/React.createElement("option", (_React$createElement58 = {
    "default": true,
    value: "",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement58, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement58, "__source", {
    fileName: _jsxFileName,
    lineNumber: 213,
    columnNumber: 13
  }), _React$createElement58), " "), generateOptions(40, 75, 0.5, "float")))), /*#__PURE__*/React.createElement("div", (_React$createElement66 = {
    className: "file-group",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement66, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement66, "__source", {
    fileName: _jsxFileName,
    lineNumber: 221,
    columnNumber: 7
  }), _React$createElement66), /*#__PURE__*/React.createElement("label", (_React$createElement62 = {
    htmlFor: "PrescriptionPhoto",
    className: "h4",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement62, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement62, "__source", {
    fileName: _jsxFileName,
    lineNumber: 223,
    columnNumber: 9
  }), _React$createElement62), "OR UPLOAD A PHOTO OF YOUR PRESCRIPTION"), /*#__PURE__*/React.createElement("div", (_React$createElement65 = {
    className: "file-input-wrapper",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement65, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement65, "__source", {
    fileName: _jsxFileName,
    lineNumber: 226,
    columnNumber: 9
  }), _React$createElement65), /*#__PURE__*/React.createElement("button", (_React$createElement63 = {
    type: "button",
    className: "btn",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement63, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement63, "__source", {
    fileName: _jsxFileName,
    lineNumber: 227,
    columnNumber: 11
  }), _React$createElement63), "CHOOSE FILE"), /*#__PURE__*/React.createElement("input", (_React$createElement64 = {
    id: "PrescriptionPhoto",
    type: "file",
    accept: "image/*,.pdf",
    onChange: function onChange(e) {
      return setFile(e.target.files[0]);
    },
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement64, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement64, "__source", {
    fileName: _jsxFileName,
    lineNumber: 230,
    columnNumber: 11
  }), _React$createElement64)))), /*#__PURE__*/React.createElement("p", (_React$createElement67 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement67, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement67, "__source", {
    fileName: _jsxFileName,
    lineNumber: 238,
    columnNumber: 7
  }), _React$createElement67), (file === null || file === void 0 ? void 0 : file.name) ? file.name : "No file selected"));
}

/***/ }),

/***/ "./src/Product.js":
/*!************************!*\
  !*** ./src/Product.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Product": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var _Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

var _jsxFileName = "/Users/kenputer/Apps/replace-my-glasses/src/Product.js";

/* global React */
function Product(_ref) {
  var _product$node$images$,
      _product$node$images$2,
      _React$createElement,
      _React$createElement2,
      _React$createElement3,
      _React$createElement4,
      _React$createElement5,
      _product$node$variant,
      _product$node$variant2,
      _React$createElement6,
      _React$createElement7,
      _React$createElement8,
      _product$node$images$3,
      _product$node$images$4,
      _React$createElement9,
      _React$createElement10,
      _React$createElement11,
      _React$createElement12,
      _React$createElement13,
      _this = this,
      _React$createElement23,
      _React$createElement24;

  var product = _ref.product,
      setState = _ref.setState,
      state = _ref.state;

  var handleChange = function handleChange(e) {
    setState({
      id: e.target.dataset.id,
      title: e.target.dataset.title,
      variantTitle: e.target.dataset.variantTitle,
      price: parseFloat(e.target.dataset.price).toFixed(2)
    });
  };

  var handleClick = function handleClick(e) {
    if (e.target.checked) {
      setState({
        title: "None",
        price: 0,
        id: 0
      });
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, product.node.variants.edges.length === 1 ? /*#__PURE__*/React.createElement("div", (_React$createElement8 = {
    className: "product-option",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement8, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement8, "__source", {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }), _React$createElement8), /*#__PURE__*/React.createElement("img", (_React$createElement = {
    className: "product-image",
    src: (_product$node$images$ = product.node.images.edges[0]) === null || _product$node$images$ === void 0 ? void 0 : _product$node$images$.node.transformedSrc,
    alt: (_product$node$images$2 = product.node.images.edges[0]) === null || _product$node$images$2 === void 0 ? void 0 : _product$node$images$2.node.altText,
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement, "__source", {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 11
  }), _React$createElement)), /*#__PURE__*/React.createElement("div", (_React$createElement5 = {
    className: "product-description",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement5, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement5, "__source", {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 11
  }), _React$createElement5), /*#__PURE__*/React.createElement("h4", (_React$createElement3 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement3, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement3, "__source", {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 13
  }), _React$createElement3), product.node.title, /*#__PURE__*/React.createElement("span", (_React$createElement2 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement2, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement2, "__source", {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 15
  }), _React$createElement2), " ", "($", parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(2), " ", "USD)")), /*#__PURE__*/React.createElement("p", (_React$createElement4 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement4, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement4, "__source", {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 13
  }), _React$createElement4), product.node.description)), /*#__PURE__*/React.createElement("input", (_React$createElement6 = {
    type: "radio",
    name: "".concat(product.node.productType.replace(/\s/g, "")),
    id: "".concat(product.node.id),
    "aria-label": product.node.title,
    checked: state.id === ((_product$node$variant = product.node.variants.edges[0]) === null || _product$node$variant === void 0 ? void 0 : _product$node$variant.node.metafield.id),
    "data-id": (_product$node$variant2 = product.node.variants.edges[0]) === null || _product$node$variant2 === void 0 ? void 0 : _product$node$variant2.node.metafield.id,
    "data-title": product.node.title,
    "data-price": product.node.priceRange.minVariantPrice.amount,
    onClick: handleClick,
    onChange: handleChange,
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement6, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement6, "__source", {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 11
  }), _React$createElement6)), /*#__PURE__*/React.createElement("div", (_React$createElement7 = {
    className: "checkmark",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement7, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement7, "__source", {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 11
  }), _React$createElement7))) : /*#__PURE__*/React.createElement("div", (_React$createElement24 = {
    className: "product-option with-variants",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement24, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement24, "__source", {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 9
  }), _React$createElement24), /*#__PURE__*/React.createElement("img", (_React$createElement9 = {
    className: "product-image",
    src: (_product$node$images$3 = product.node.images.edges[0]) === null || _product$node$images$3 === void 0 ? void 0 : _product$node$images$3.node.transformedSrc,
    alt: (_product$node$images$4 = product.node.images.edges[0]) === null || _product$node$images$4 === void 0 ? void 0 : _product$node$images$4.node.altText,
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement9, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement9, "__source", {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 11
  }), _React$createElement9)), /*#__PURE__*/React.createElement("div", (_React$createElement13 = {
    className: "product-description",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement13, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement13, "__source", {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 11
  }), _React$createElement13), /*#__PURE__*/React.createElement("h4", (_React$createElement11 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement11, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement11, "__source", {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 13
  }), _React$createElement11), product.node.title, /*#__PURE__*/React.createElement("span", (_React$createElement10 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement10, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement10, "__source", {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 15
  }), _React$createElement10), " ", "($", product.node.priceRange.minVariantPrice.amount !== product.node.priceRange.maxVariantPrice.amount ? "".concat(parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(2), " - $").concat(parseFloat(product.node.priceRange.maxVariantPrice.amount).toFixed(2)) : parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(2), " ", "USD)")), /*#__PURE__*/React.createElement("p", (_React$createElement12 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement12, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement12, "__source", {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 13
  }), _React$createElement12), product.node.description)), /*#__PURE__*/React.createElement("ul", (_React$createElement23 = {
    className: "variants",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement23, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement23, "__source", {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 11
  }), _React$createElement23), product.node.variants.edges.map(function (variant) {
    var _variant$node$image, _variant$node$image2, _React$createElement14, _React$createElement15, _React$createElement16, _variant$node$image3, _React$createElement17, _React$createElement18, _React$createElement19, _React$createElement20, _React$createElement21, _React$createElement22;

    return /*#__PURE__*/React.createElement("li", (_React$createElement22 = {
      key: variant.node.id,
      __self: _this
    }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement22, "__self", _this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement22, "__source", {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }), _React$createElement22), /*#__PURE__*/React.createElement("img", (_React$createElement14 = {
      className: "variant-image",
      src: (_variant$node$image = variant.node.image) === null || _variant$node$image === void 0 ? void 0 : _variant$node$image.transformedSrc,
      alt: (_variant$node$image2 = variant.node.image) === null || _variant$node$image2 === void 0 ? void 0 : _variant$node$image2.altText,
      __self: _this
    }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement14, "__self", _this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement14, "__source", {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }), _React$createElement14)), /*#__PURE__*/React.createElement("div", (_React$createElement19 = {
      className: "variant-description",
      __self: _this
    }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement19, "__self", _this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement19, "__source", {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }), _React$createElement19), /*#__PURE__*/React.createElement("h6", (_React$createElement16 = {
      __self: _this
    }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement16, "__self", _this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement16, "__source", {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 19
    }), _React$createElement16), variant.node.title, /*#__PURE__*/React.createElement("small", (_React$createElement15 = {
      __self: _this
    }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement15, "__self", _this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement15, "__source", {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 21
    }), _React$createElement15), " ", "($", parseFloat(variant.node.priceV2.amount).toFixed(2), ")")), /*#__PURE__*/React.createElement("p", (_React$createElement18 = {
      __self: _this
    }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement18, "__self", _this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement18, "__source", {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 19
    }), _React$createElement18), /*#__PURE__*/React.createElement("small", (_React$createElement17 = {
      __self: _this
    }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement17, "__self", _this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement17, "__source", {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }), _React$createElement17), (_variant$node$image3 = variant.node.image) === null || _variant$node$image3 === void 0 ? void 0 : _variant$node$image3.altText))), /*#__PURE__*/React.createElement("input", (_React$createElement20 = {
      type: "radio",
      name: "".concat(product.node.productType.replace(/\s/g, "")),
      id: "".concat(variant.node.id),
      "aria-label": variant.node.title,
      checked: state.id === variant.node.metafield.id,
      "data-id": variant.node.metafield.id,
      "data-title": product.node.title,
      "data-variant-title": variant.node.title,
      "data-price": variant.node.priceV2.amount,
      onChange: handleChange,
      __self: _this
    }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement20, "__self", _this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement20, "__source", {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }), _React$createElement20)), /*#__PURE__*/React.createElement("div", (_React$createElement21 = {
      className: "checkmark",
      __self: _this
    }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement21, "__self", _this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement21, "__source", {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }), _React$createElement21)));
  }))));
}

/***/ }),

/***/ "./src/ProductSkeleton.js":
/*!********************************!*\
  !*** ./src/ProductSkeleton.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductSkeleton": () => (/* binding */ ProductSkeleton)
/* harmony export */ });
/* harmony import */ var _Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

var _jsxFileName = "/Users/kenputer/Apps/replace-my-glasses/src/ProductSkeleton.js";
function ProductSkeleton(variants) {
  var _React$createElement, _React$createElement2, _React$createElement3, _React$createElement4, _React$createElement5;

  return /*#__PURE__*/React.createElement("div", (_React$createElement5 = {
    className: "product-option skeleton",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement5, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement5, "__source", {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }), _React$createElement5), /*#__PURE__*/React.createElement("div", (_React$createElement = {
    className: "product-image",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement, "__source", {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 7
  }), _React$createElement)), /*#__PURE__*/React.createElement("div", (_React$createElement4 = {
    className: "product-description",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement4, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement4, "__source", {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 7
  }), _React$createElement4), /*#__PURE__*/React.createElement("div", (_React$createElement2 = {
    className: "h4",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement2, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement2, "__source", {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }), _React$createElement2)), /*#__PURE__*/React.createElement("p", (_React$createElement3 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement3, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement3, "__source", {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }), _React$createElement3))));
}

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./src/PageBuild.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Product */ "./src/Product.js");
/* harmony import */ var _PrescriptionForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PrescriptionForm */ "./src/PrescriptionForm.js");
/* harmony import */ var _ProductSkeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProductSkeleton */ "./src/ProductSkeleton.js");





var _jsxFileName = "/Users/kenputer/Apps/replace-my-glasses/src/PageBuild.js",
    _React$createElement71;

/* global React */

/* global ReactDOM */


 // to do
// Handle image too large for cloudinary

var endpoint = "https://replace-my-glasses.myshopify.com/api/2022-10/graphql.json";
var query = "{\n  collectionByHandle(handle: \"lens-customization\") {\n    products(first: 50) {\n      edges {\n        node {\n          id\n          description\n          images(first: 1) {\n            edges {\n              node {\n                altText\n                transformedSrc(maxWidth: 100, crop: CENTER)\n              }\n            }\n          }\n          productType\n          priceRange {\n            minVariantPrice {\n              amount\n              currencyCode\n            }\n            maxVariantPrice {\n              amount\n              currencyCode\n            }\n          }\n          variants(first: 50) {\n            edges {\n              node {\n                id\n                image {\n                  altText\n                  transformedSrc(maxWidth: 200, crop: CENTER)\n                }\n                title\n                priceV2 {\n                  amount\n                  currencyCode\n                }\n                selectedOptions {\n                  name\n                  value\n                }\n                metafield(namespace: \"rmg\", key: \"v_id\") {\n                  id: value\n                }\n              }\n            }\n          }\n          title\n        }\n      }\n    }\n  }\n}";
var headers = {
  "Content-type": "application/json",
  Accept: "application/json",
  "X-Shopify-Storefront-Access-Token": "6727c35651abace6c08f41b720d37b23"
};

function getCollection() {
  return _getCollection.apply(this, arguments);
}

function _getCollection() {
  _getCollection = (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
    var response, collection;
    return _Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetch(endpoint, {
              method: "POST",
              headers: headers,
              body: JSON.stringify({
                query: query
              })
            });

          case 2:
            response = _context3.sent;
            _context3.next = 5;
            return response.json();

          case 5:
            collection = _context3.sent;
            return _context3.abrupt("return", collection);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getCollection.apply(this, arguments);
}

function objToString(obj) {
  var string = "";
  var keys = Object.keys(obj);

  for (var i = 0; i < keys.length; i += 1) {
    var key = keys[i];
    string = string.concat("".concat(key, ": ").concat(obj[key]));

    if (i + 1 !== keys.length) {
      string = string.concat(", ");
    }
  }

  return string;
}

function PageBuild(_ref) {
  var _React$createElement,
      _React$createElement2,
      _React$createElement3,
      _React$createElement4,
      _React$createElement5,
      _this = this,
      _React$createElement7,
      _React$createElement8,
      _React$createElement9,
      _React$createElement10,
      _React$createElement11,
      _React$createElement12,
      _React$createElement13,
      _React$createElement14,
      _React$createElement16,
      _React$createElement17,
      _React$createElement18,
      _React$createElement19,
      _React$createElement20,
      _React$createElement21,
      _React$createElement22,
      _React$createElement24,
      _React$createElement25,
      _React$createElement26,
      _React$createElement27,
      _React$createElement28,
      _React$createElement30,
      _React$createElement31,
      _React$createElement32,
      _React$createElement33,
      _React$createElement34,
      _React$createElement35,
      _React$createElement36,
      _React$createElement37,
      _React$createElement38,
      _React$createElement39,
      _React$createElement40,
      _React$createElement41,
      _React$createElement42,
      _React$createElement43,
      _React$createElement44,
      _React$createElement45,
      _React$createElement46,
      _React$createElement47,
      _React$createElement48,
      _React$createElement49,
      _React$createElement50,
      _React$createElement51,
      _React$createElement52,
      _React$createElement53,
      _React$createElement54,
      _React$createElement55,
      _React$createElement56,
      _React$createElement57,
      _React$createElement58,
      _React$createElement59,
      _React$createElement60,
      _React$createElement61,
      _React$createElement62,
      _React$createElement63,
      _React$createElement64,
      _React$createElement65,
      _React$createElement66,
      _React$createElement67,
      _React$createElement68,
      _React$createElement69,
      _React$createElement70;

  var data = _ref.data;

  var _React$useState = React.useState(null),
      _React$useState2 = (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState, 2),
      lensStyles = _React$useState2[0],
      setLensStyles = _React$useState2[1];

  var _React$useState3 = React.useState(null),
      _React$useState4 = (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState3, 2),
      lensTypes = _React$useState4[0],
      setLensTypes = _React$useState4[1];

  var _React$useState5 = React.useState(null),
      _React$useState6 = (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState5, 2),
      lensMaterials = _React$useState6[0],
      setLensMaterials = _React$useState6[1];

  var _React$useState7 = React.useState(null),
      _React$useState8 = (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState7, 2),
      lensExtras = _React$useState8[0],
      setLensExtras = _React$useState8[1];

  var _React$useState9 = React.useState({
    title: "None",
    price: 0,
    id: 0
  }),
      _React$useState10 = (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState9, 2),
      selectedLensStyle = _React$useState10[0],
      setSelectedLensStyle = _React$useState10[1];

  var _React$useState11 = React.useState({
    title: "None",
    price: 0,
    id: 0
  }),
      _React$useState12 = (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState11, 2),
      selectedLensType = _React$useState12[0],
      setSelectedLensType = _React$useState12[1];

  var _React$useState13 = React.useState({
    title: "None",
    price: 0,
    id: 0
  }),
      _React$useState14 = (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState13, 2),
      selectedLensMaterial = _React$useState14[0],
      setSelectedLensMaterial = _React$useState14[1];

  var _React$useState15 = React.useState({
    title: "None",
    price: 0,
    id: 0
  }),
      _React$useState16 = (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState15, 2),
      selectedLensExtras = _React$useState16[0],
      setSelectedLensExtras = _React$useState16[1];

  var _React$useState17 = React.useState({}),
      _React$useState18 = (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState17, 2),
      leftEye = _React$useState18[0],
      setLeftEye = _React$useState18[1];

  var _React$useState19 = React.useState({}),
      _React$useState20 = (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState19, 2),
      rightEye = _React$useState20[0],
      setRightEye = _React$useState20[1];

  var _React$useState21 = React.useState(null),
      _React$useState22 = (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState21, 2),
      file = _React$useState22[0],
      setFile = _React$useState22[1];

  var _React$useState23 = React.useState(false),
      _React$useState24 = (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState23, 2),
      showReview = _React$useState24[0],
      setShowReview = _React$useState24[1];

  var _React$useState25 = React.useState(true),
      _React$useState26 = (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState25, 2),
      isLoading = _React$useState26[0],
      setIsLoading = _React$useState26[1];

  var _React$useState27 = React.useState(false),
      _React$useState28 = (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState27, 2),
      showLoader = _React$useState28[0],
      setShowLoader = _React$useState28[1];

  var scrollToRef = React.useRef(null);

  var centerEl = function centerEl() {
    return scrollToRef.current.scrollIntoView();
  };

  var addToCart = /*#__PURE__*/function () {
    var _ref2 = (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var customizationId, items, properties, cloudName, cloudinaryUrl, formData, uploadResponse, uploadJson, response, Json;
      return _Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setShowLoader(true);
              centerEl();
              customizationId = parseInt(Math.random() * (11000 - 10000) + 10000);
              items = [];
              properties = {
                "Customization ID": customizationId
              };

              if (!file) {
                _context.next = 19;
                break;
              }

              cloudName = "kenput3r1";
              cloudinaryUrl = "https://api.cloudinary.com/v1_1/".concat(cloudName, "/upload");
              formData = new FormData();
              formData.append("file", file);
              formData.append("upload_preset", "oolgpfo2");
              _context.next = 13;
              return fetch(cloudinaryUrl, {
                method: "POST",
                body: formData
              });

            case 13:
              uploadResponse = _context.sent;
              _context.next = 16;
              return uploadResponse.json();

            case 16:
              uploadJson = _context.sent;
              console.log(uploadJson);
              properties.Attachment = uploadJson.secure_url;

            case 19:
              if (leftEye.SPH) {
                properties["Left Eye"] = objToString(leftEye);
                properties["Right Eye"] = objToString(rightEye);
              }

              console.log(properties);
              items.push({
                id: parseInt(selectedLensStyle.id),
                quantity: 1,
                properties: properties
              });
              items.push({
                id: parseInt(selectedLensType.id),
                quantity: 1,
                properties: {
                  "Customization ID": customizationId
                }
              });
              items.push({
                id: parseInt(selectedLensMaterial.id),
                quantity: 1,
                properties: {
                  "Customization ID": customizationId
                }
              });

              if (selectedLensExtras.id) {
                items.push({
                  id: parseInt(selectedLensExtras.id),
                  quantity: 1,
                  properties: {
                    "Customization ID": customizationId
                  }
                });
              }

              console.log("items", items);
              _context.next = 28;
              return fetch("/cart/add.js", {
                method: "POST",
                credentials: "same-origin",
                headers: {
                  "Content-Type": "application/json",
                  "X-Requested-With": "xmlhttprequest"
                },
                body: JSON.stringify({
                  items: items
                })
              });

            case 28:
              response = _context.sent;
              _context.next = 31;
              return response.json();

            case 31:
              Json = _context.sent;
              console.log(Json);

              if (Json.items) {
                window.location.href = "/checkout";
              }

            case 34:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function addToCart() {
      return _ref2.apply(this, arguments);
    };
  }();

  var validatePrescription = function validatePrescription() {
    if (file) {
      return true;
    }

    if (leftEye.SPH && leftEye.CYL && leftEye.Axis && leftEye.PD && rightEye.SPH && rightEye.CYL && rightEye.Axis && rightEye.PD) {
      return true;
    }

    return false;
  };

  var toggleShowReview = function toggleShowReview() {
    if (selectedLensType.id && selectedLensStyle.id && selectedLensMaterial.id && validatePrescription()) {
      setShowReview(true);
      centerEl();
    } else {
      alert("All options are required except Lens Extras. Please make your selections and fill out your prescription or attach a photo of your prescription before proceeding.");
    }
  };

  React.useEffect(function () {
    ;

    (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var collection, products, _lensStyles, _lensTypes, _lensMaterials, _lensExtras;

      return _Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return getCollection();

            case 2:
              collection = _context2.sent;
              products = collection.data.collectionByHandle.products.edges;
              _lensStyles = products.filter(function (product) {
                return product.node.productType === "Lens Style";
              });
              _lensTypes = products.filter(function (product) {
                return product.node.productType === "Lens Type";
              });
              _lensMaterials = products.filter(function (product) {
                return product.node.productType === "Lens Material";
              });
              _lensExtras = products.filter(function (product) {
                return product.node.productType === "Lens Extras";
              });
              setLensStyles(_lensStyles);
              setLensTypes(_lensTypes);
              setLensMaterials(_lensMaterials);
              setLensExtras(_lensExtras);
              setIsLoading(false);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }, []);
  React.useEffect(function () {
    if ((file === null || file === void 0 ? void 0 : file.size) >= 10000000) {
      alert("Your image is too large. Please choose an image that is less than 10MB");
      setFile(null);
    }
  }, [file]);
  if (!showReview) return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", (_React$createElement35 = {
    ref: scrollToRef,
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement35, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement35, "__source", {
    fileName: _jsxFileName,
    lineNumber: 269,
    columnNumber: 9
  }), _React$createElement35), /*#__PURE__*/React.createElement("div", (_React$createElement7 = {
    className: "step",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement7, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement7, "__source", {
    fileName: _jsxFileName,
    lineNumber: 270,
    columnNumber: 11
  }), _React$createElement7), /*#__PURE__*/React.createElement("h3", (_React$createElement2 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement2, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement2, "__source", {
    fileName: _jsxFileName,
    lineNumber: 271,
    columnNumber: 13
  }), _React$createElement2), "Lens Styles ", /*#__PURE__*/React.createElement("img", (_React$createElement = {
    src: data.chevron,
    alt: "below",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement, "__source", {
    fileName: _jsxFileName,
    lineNumber: 272,
    columnNumber: 27
  }), _React$createElement))), isLoading && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_ProductSkeleton__WEBPACK_IMPORTED_MODULE_6__.ProductSkeleton, (_React$createElement3 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement3, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement3, "__source", {
    fileName: _jsxFileName,
    lineNumber: 277,
    columnNumber: 17
  }), _React$createElement3)), /*#__PURE__*/React.createElement(_ProductSkeleton__WEBPACK_IMPORTED_MODULE_6__.ProductSkeleton, (_React$createElement4 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement4, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement4, "__source", {
    fileName: _jsxFileName,
    lineNumber: 278,
    columnNumber: 17
  }), _React$createElement4)), /*#__PURE__*/React.createElement(_ProductSkeleton__WEBPACK_IMPORTED_MODULE_6__.ProductSkeleton, (_React$createElement5 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement5, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement5, "__source", {
    fileName: _jsxFileName,
    lineNumber: 279,
    columnNumber: 17
  }), _React$createElement5))), lensStyles && lensStyles.map(function (product) {
    var _React$createElement6;

    return /*#__PURE__*/React.createElement(_Product__WEBPACK_IMPORTED_MODULE_4__.Product, (_React$createElement6 = {
      key: product.node.id,
      product: product,
      setState: setSelectedLensStyle,
      state: selectedLensStyle,
      __self: _this
    }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement6, "__self", _this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement6, "__source", {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 17
    }), _React$createElement6));
  })), /*#__PURE__*/React.createElement("div", (_React$createElement16 = {
    className: "step",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement16, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement16, "__source", {
    fileName: _jsxFileName,
    lineNumber: 294,
    columnNumber: 11
  }), _React$createElement16), /*#__PURE__*/React.createElement("h3", (_React$createElement9 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement9, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement9, "__source", {
    fileName: _jsxFileName,
    lineNumber: 295,
    columnNumber: 13
  }), _React$createElement9), "Lens Types ", /*#__PURE__*/React.createElement("img", (_React$createElement8 = {
    src: data.chevron,
    alt: "below",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement8, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement8, "__source", {
    fileName: _jsxFileName,
    lineNumber: 296,
    columnNumber: 26
  }), _React$createElement8))), isLoading && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_ProductSkeleton__WEBPACK_IMPORTED_MODULE_6__.ProductSkeleton, (_React$createElement10 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement10, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement10, "__source", {
    fileName: _jsxFileName,
    lineNumber: 301,
    columnNumber: 17
  }), _React$createElement10)), /*#__PURE__*/React.createElement(_ProductSkeleton__WEBPACK_IMPORTED_MODULE_6__.ProductSkeleton, (_React$createElement11 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement11, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement11, "__source", {
    fileName: _jsxFileName,
    lineNumber: 302,
    columnNumber: 17
  }), _React$createElement11)), /*#__PURE__*/React.createElement(_ProductSkeleton__WEBPACK_IMPORTED_MODULE_6__.ProductSkeleton, (_React$createElement12 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement12, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement12, "__source", {
    fileName: _jsxFileName,
    lineNumber: 303,
    columnNumber: 17
  }), _React$createElement12)), /*#__PURE__*/React.createElement(_ProductSkeleton__WEBPACK_IMPORTED_MODULE_6__.ProductSkeleton, (_React$createElement13 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement13, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement13, "__source", {
    fileName: _jsxFileName,
    lineNumber: 304,
    columnNumber: 17
  }), _React$createElement13)), /*#__PURE__*/React.createElement(_ProductSkeleton__WEBPACK_IMPORTED_MODULE_6__.ProductSkeleton, (_React$createElement14 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement14, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement14, "__source", {
    fileName: _jsxFileName,
    lineNumber: 305,
    columnNumber: 17
  }), _React$createElement14))), lensTypes && lensTypes.map(function (product) {
    var _React$createElement15;

    return /*#__PURE__*/React.createElement(_Product__WEBPACK_IMPORTED_MODULE_4__.Product, (_React$createElement15 = {
      key: product.node.id,
      product: product,
      setState: setSelectedLensType,
      state: selectedLensType,
      __self: _this
    }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement15, "__self", _this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement15, "__source", {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 17
    }), _React$createElement15));
  })), /*#__PURE__*/React.createElement("div", (_React$createElement24 = {
    className: "step",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement24, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement24, "__source", {
    fileName: _jsxFileName,
    lineNumber: 320,
    columnNumber: 11
  }), _React$createElement24), /*#__PURE__*/React.createElement("h3", (_React$createElement18 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement18, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement18, "__source", {
    fileName: _jsxFileName,
    lineNumber: 321,
    columnNumber: 13
  }), _React$createElement18), "Lens Materials ", /*#__PURE__*/React.createElement("img", (_React$createElement17 = {
    src: data.chevron,
    alt: "below",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement17, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement17, "__source", {
    fileName: _jsxFileName,
    lineNumber: 322,
    columnNumber: 30
  }), _React$createElement17))), isLoading && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_ProductSkeleton__WEBPACK_IMPORTED_MODULE_6__.ProductSkeleton, (_React$createElement19 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement19, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement19, "__source", {
    fileName: _jsxFileName,
    lineNumber: 327,
    columnNumber: 17
  }), _React$createElement19)), /*#__PURE__*/React.createElement(_ProductSkeleton__WEBPACK_IMPORTED_MODULE_6__.ProductSkeleton, (_React$createElement20 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement20, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement20, "__source", {
    fileName: _jsxFileName,
    lineNumber: 328,
    columnNumber: 17
  }), _React$createElement20)), /*#__PURE__*/React.createElement(_ProductSkeleton__WEBPACK_IMPORTED_MODULE_6__.ProductSkeleton, (_React$createElement21 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement21, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement21, "__source", {
    fileName: _jsxFileName,
    lineNumber: 329,
    columnNumber: 17
  }), _React$createElement21)), /*#__PURE__*/React.createElement(_ProductSkeleton__WEBPACK_IMPORTED_MODULE_6__.ProductSkeleton, (_React$createElement22 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement22, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement22, "__source", {
    fileName: _jsxFileName,
    lineNumber: 330,
    columnNumber: 17
  }), _React$createElement22))), lensMaterials && lensMaterials.map(function (product) {
    var _React$createElement23;

    return /*#__PURE__*/React.createElement(_Product__WEBPACK_IMPORTED_MODULE_4__.Product, (_React$createElement23 = {
      key: product.node.id,
      product: product,
      setState: setSelectedLensMaterial,
      state: selectedLensMaterial,
      __self: _this
    }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement23, "__self", _this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement23, "__source", {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 17
    }), _React$createElement23));
  })), /*#__PURE__*/React.createElement("div", (_React$createElement30 = {
    className: "step",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement30, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement30, "__source", {
    fileName: _jsxFileName,
    lineNumber: 345,
    columnNumber: 11
  }), _React$createElement30), /*#__PURE__*/React.createElement("h3", (_React$createElement26 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement26, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement26, "__source", {
    fileName: _jsxFileName,
    lineNumber: 346,
    columnNumber: 13
  }), _React$createElement26), "Lens Extras (Optional) ", /*#__PURE__*/React.createElement("img", (_React$createElement25 = {
    src: data.chevron,
    alt: "below",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement25, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement25, "__source", {
    fileName: _jsxFileName,
    lineNumber: 347,
    columnNumber: 38
  }), _React$createElement25))), isLoading && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_ProductSkeleton__WEBPACK_IMPORTED_MODULE_6__.ProductSkeleton, (_React$createElement27 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement27, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement27, "__source", {
    fileName: _jsxFileName,
    lineNumber: 352,
    columnNumber: 17
  }), _React$createElement27)), /*#__PURE__*/React.createElement(_ProductSkeleton__WEBPACK_IMPORTED_MODULE_6__.ProductSkeleton, (_React$createElement28 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement28, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement28, "__source", {
    fileName: _jsxFileName,
    lineNumber: 353,
    columnNumber: 17
  }), _React$createElement28))), lensExtras && lensExtras.map(function (product) {
    var _React$createElement29;

    return /*#__PURE__*/React.createElement(_Product__WEBPACK_IMPORTED_MODULE_4__.Product, (_React$createElement29 = {
      key: product.node.id,
      product: product,
      setState: setSelectedLensExtras,
      state: selectedLensExtras,
      __self: _this
    }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement29, "__self", _this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement29, "__source", {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 17
    }), _React$createElement29));
  })), /*#__PURE__*/React.createElement("div", (_React$createElement34 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement34, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement34, "__source", {
    fileName: _jsxFileName,
    lineNumber: 368,
    columnNumber: 11
  }), _React$createElement34), /*#__PURE__*/React.createElement("h3", (_React$createElement32 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement32, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement32, "__source", {
    fileName: _jsxFileName,
    lineNumber: 369,
    columnNumber: 13
  }), _React$createElement32), "Prescription ", /*#__PURE__*/React.createElement("img", (_React$createElement31 = {
    src: data.chevron,
    alt: "below",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement31, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement31, "__source", {
    fileName: _jsxFileName,
    lineNumber: 370,
    columnNumber: 28
  }), _React$createElement31))), /*#__PURE__*/React.createElement(_PrescriptionForm__WEBPACK_IMPORTED_MODULE_5__.PrescriptionForm, (_React$createElement33 = {
    setFile: setFile,
    file: file,
    leftEye: leftEye,
    setLeftEye: setLeftEye,
    rightEye: rightEye,
    setRightEye: setRightEye,
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement33, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement33, "__source", {
    fileName: _jsxFileName,
    lineNumber: 372,
    columnNumber: 13
  }), _React$createElement33)))), /*#__PURE__*/React.createElement("button", (_React$createElement37 = {
    className: "toggle-review",
    type: "button",
    onClick: toggleShowReview,
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement37, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement37, "__source", {
    fileName: _jsxFileName,
    lineNumber: 382,
    columnNumber: 9
  }), _React$createElement37), /*#__PURE__*/React.createElement("span", (_React$createElement36 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement36, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement36, "__source", {
    fileName: _jsxFileName,
    lineNumber: 387,
    columnNumber: 11
  }), _React$createElement36), "REVIEW AND SUBMIT")));
  return /*#__PURE__*/React.createElement("div", (_React$createElement70 = {
    id: "Review",
    ref: scrollToRef,
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement70, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement70, "__source", {
    fileName: _jsxFileName,
    lineNumber: 392,
    columnNumber: 5
  }), _React$createElement70), showLoader ? /*#__PURE__*/React.createElement("div", (_React$createElement40 = {
    className: "loader-container",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement40, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement40, "__source", {
    fileName: _jsxFileName,
    lineNumber: 394,
    columnNumber: 9
  }), _React$createElement40), /*#__PURE__*/React.createElement("img", (_React$createElement38 = {
    src: data.loader,
    alt: "loading",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement38, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement38, "__source", {
    fileName: _jsxFileName,
    lineNumber: 395,
    columnNumber: 11
  }), _React$createElement38)), /*#__PURE__*/React.createElement("p", (_React$createElement39 = {
    className: "h4 text-center",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement39, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement39, "__source", {
    fileName: _jsxFileName,
    lineNumber: 396,
    columnNumber: 11
  }), _React$createElement39), "Building your order")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", (_React$createElement45 = {
    className: "review-option",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement45, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement45, "__source", {
    fileName: _jsxFileName,
    lineNumber: 400,
    columnNumber: 11
  }), _React$createElement45), /*#__PURE__*/React.createElement("div", (_React$createElement41 = {
    className: "title h4",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement41, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement41, "__source", {
    fileName: _jsxFileName,
    lineNumber: 401,
    columnNumber: 13
  }), _React$createElement41), "LENS STYLE"), /*#__PURE__*/React.createElement("div", (_React$createElement44 = {
    className: "values",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement44, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement44, "__source", {
    fileName: _jsxFileName,
    lineNumber: 402,
    columnNumber: 13
  }), _React$createElement44), /*#__PURE__*/React.createElement("span", (_React$createElement42 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement42, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement42, "__source", {
    fileName: _jsxFileName,
    lineNumber: 403,
    columnNumber: 15
  }), _React$createElement42), selectedLensStyle.title), /*#__PURE__*/React.createElement("span", (_React$createElement43 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement43, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement43, "__source", {
    fileName: _jsxFileName,
    lineNumber: 404,
    columnNumber: 15
  }), _React$createElement43), "$", selectedLensStyle.price))), /*#__PURE__*/React.createElement("div", (_React$createElement50 = {
    className: "review-option",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement50, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement50, "__source", {
    fileName: _jsxFileName,
    lineNumber: 408,
    columnNumber: 11
  }), _React$createElement50), /*#__PURE__*/React.createElement("div", (_React$createElement46 = {
    className: "title h4",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement46, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement46, "__source", {
    fileName: _jsxFileName,
    lineNumber: 409,
    columnNumber: 13
  }), _React$createElement46), "LENS TYPE"), /*#__PURE__*/React.createElement("div", (_React$createElement49 = {
    className: "values",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement49, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement49, "__source", {
    fileName: _jsxFileName,
    lineNumber: 410,
    columnNumber: 13
  }), _React$createElement49), /*#__PURE__*/React.createElement("span", (_React$createElement47 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement47, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement47, "__source", {
    fileName: _jsxFileName,
    lineNumber: 411,
    columnNumber: 15
  }), _React$createElement47), selectedLensType.title, selectedLensType.variantTitle && ": ".concat(selectedLensType.variantTitle)), /*#__PURE__*/React.createElement("span", (_React$createElement48 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement48, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement48, "__source", {
    fileName: _jsxFileName,
    lineNumber: 416,
    columnNumber: 15
  }), _React$createElement48), "$", selectedLensType.price))), /*#__PURE__*/React.createElement("div", (_React$createElement55 = {
    className: "review-option",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement55, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement55, "__source", {
    fileName: _jsxFileName,
    lineNumber: 420,
    columnNumber: 11
  }), _React$createElement55), /*#__PURE__*/React.createElement("div", (_React$createElement51 = {
    className: "title h4",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement51, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement51, "__source", {
    fileName: _jsxFileName,
    lineNumber: 421,
    columnNumber: 13
  }), _React$createElement51), "LENS MATERIAL"), /*#__PURE__*/React.createElement("div", (_React$createElement54 = {
    className: "values",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement54, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement54, "__source", {
    fileName: _jsxFileName,
    lineNumber: 422,
    columnNumber: 13
  }), _React$createElement54), /*#__PURE__*/React.createElement("span", (_React$createElement52 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement52, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement52, "__source", {
    fileName: _jsxFileName,
    lineNumber: 423,
    columnNumber: 15
  }), _React$createElement52), selectedLensMaterial.title), /*#__PURE__*/React.createElement("span", (_React$createElement53 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement53, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement53, "__source", {
    fileName: _jsxFileName,
    lineNumber: 424,
    columnNumber: 15
  }), _React$createElement53), "$", selectedLensMaterial.price))), /*#__PURE__*/React.createElement("div", (_React$createElement60 = {
    className: "review-option",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement60, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement60, "__source", {
    fileName: _jsxFileName,
    lineNumber: 428,
    columnNumber: 11
  }), _React$createElement60), /*#__PURE__*/React.createElement("div", (_React$createElement56 = {
    className: "title h4",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement56, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement56, "__source", {
    fileName: _jsxFileName,
    lineNumber: 429,
    columnNumber: 13
  }), _React$createElement56), "LENS EXTRAS"), /*#__PURE__*/React.createElement("div", (_React$createElement59 = {
    className: "values",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement59, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement59, "__source", {
    fileName: _jsxFileName,
    lineNumber: 430,
    columnNumber: 13
  }), _React$createElement59), /*#__PURE__*/React.createElement("span", (_React$createElement57 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement57, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement57, "__source", {
    fileName: _jsxFileName,
    lineNumber: 431,
    columnNumber: 15
  }), _React$createElement57), selectedLensExtras.title), /*#__PURE__*/React.createElement("span", (_React$createElement58 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement58, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement58, "__source", {
    fileName: _jsxFileName,
    lineNumber: 432,
    columnNumber: 15
  }), _React$createElement58), "$", selectedLensExtras.price))), /*#__PURE__*/React.createElement("div", (_React$createElement69 = {
    className: "review-option subtotal",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement69, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement69, "__source", {
    fileName: _jsxFileName,
    lineNumber: 436,
    columnNumber: 11
  }), _React$createElement69), /*#__PURE__*/React.createElement("div", (_React$createElement63 = {
    className: "values text-right",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement63, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement63, "__source", {
    fileName: _jsxFileName,
    lineNumber: 437,
    columnNumber: 13
  }), _React$createElement63), /*#__PURE__*/React.createElement("span", (_React$createElement61 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement61, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement61, "__source", {
    fileName: _jsxFileName,
    lineNumber: 438,
    columnNumber: 15
  }), _React$createElement61), "SUBTOTAL"), /*#__PURE__*/React.createElement("span", (_React$createElement62 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement62, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement62, "__source", {
    fileName: _jsxFileName,
    lineNumber: 439,
    columnNumber: 15
  }), _React$createElement62), "$", (parseFloat(selectedLensStyle.price) + parseFloat(selectedLensType.price) + parseFloat(selectedLensMaterial.price) + parseFloat(selectedLensExtras.price)).toFixed(2))), /*#__PURE__*/React.createElement("div", (_React$createElement68 = {
    className: "buttons",
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement68, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement68, "__source", {
    fileName: _jsxFileName,
    lineNumber: 449,
    columnNumber: 13
  }), _React$createElement68), /*#__PURE__*/React.createElement("button", (_React$createElement65 = {
    type: "button",
    onClick: function onClick() {
      return setShowReview(false);
    },
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement65, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement65, "__source", {
    fileName: _jsxFileName,
    lineNumber: 450,
    columnNumber: 15
  }), _React$createElement65), " ", /*#__PURE__*/React.createElement("span", (_React$createElement64 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement64, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement64, "__source", {
    fileName: _jsxFileName,
    lineNumber: 452,
    columnNumber: 17
  }), _React$createElement64), "\u2190 edit selection")), /*#__PURE__*/React.createElement("button", (_React$createElement67 = {
    type: "button",
    onClick: addToCart,
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement67, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement67, "__source", {
    fileName: _jsxFileName,
    lineNumber: 454,
    columnNumber: 15
  }), _React$createElement67), /*#__PURE__*/React.createElement("span", (_React$createElement66 = {
    __self: this
  }, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement66, "__self", this), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement66, "__source", {
    fileName: _jsxFileName,
    lineNumber: 455,
    columnNumber: 17
  }), _React$createElement66), "add to cart \u2192"))))));
}

var domContainer = document.querySelector("#BuildForm");
var _data = domContainer.dataset;
ReactDOM.render( /*#__PURE__*/React.createElement(PageBuild, (_React$createElement71 = {
  data: _data,
  __self: undefined
}, (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement71, "__self", undefined), (0,_Users_kenputer_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement71, "__source", {
  fileName: _jsxFileName,
  lineNumber: 467,
  columnNumber: 17
}), _React$createElement71)), domContainer);
})();

/******/ })()
;
//# sourceMappingURL=PageBuild.js.map