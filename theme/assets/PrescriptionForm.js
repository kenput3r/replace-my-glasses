/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./src/PrescriptionForm.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrescriptionForm": () => (/* binding */ PrescriptionForm)
/* harmony export */ });
/* harmony import */ var _Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


var _jsxFileName = "/Users/kenlyerly/Apps/replace-my-glasses/src/PrescriptionForm.js";

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
    }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement, "__self", _this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement, "__source", {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }), _React$createElement), value);
  });
  return options;
}

function setEye(state, setState, key, value) {
  var tempState = (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)({}, state);

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
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement68, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement68, "__source", {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }), _React$createElement68), /*#__PURE__*/React.createElement("div", (_React$createElement4 = {
    className: "group",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement4, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement4, "__source", {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 7
  }), _React$createElement4), /*#__PURE__*/React.createElement("div", (_React$createElement2 = {
    className: "h4",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement2, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement2, "__source", {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }), _React$createElement2), "Right Eye (OD)"), /*#__PURE__*/React.createElement("div", (_React$createElement3 = {
    className: "h4",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement3, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement3, "__source", {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }), _React$createElement3), "Left Eye (OS)")), /*#__PURE__*/React.createElement("div", (_React$createElement15 = {
    className: "group",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement15, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement15, "__source", {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 7
  }), _React$createElement15), /*#__PURE__*/React.createElement("div", (_React$createElement9 = {
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement9, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement9, "__source", {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }), _React$createElement9), /*#__PURE__*/React.createElement("label", (_React$createElement8 = {
    htmlFor: "RightSPH",
    "aria-label": "SPH for Right eye",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement8, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement8, "__source", {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 11
  }), _React$createElement8), /*#__PURE__*/React.createElement("span", (_React$createElement5 = {
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement5, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement5, "__source", {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 13
  }), _React$createElement5), "SPH"), /*#__PURE__*/React.createElement("select", (_React$createElement7 = {
    id: "RightSPH",
    onChange: function onChange(e) {
      return setEye(rightEye, setRightEye, "SPH", e.target.value);
    },
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement7, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement7, "__source", {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 13
  }), _React$createElement7), /*#__PURE__*/React.createElement("option", (_React$createElement6 = {
    "default": true,
    value: "",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement6, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement6, "__source", {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 15
  }), _React$createElement6), " "), generateOptions(-20.0, 20.0, 0.25, "float")))), /*#__PURE__*/React.createElement("div", (_React$createElement14 = {
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement14, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement14, "__source", {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 9
  }), _React$createElement14), /*#__PURE__*/React.createElement("label", (_React$createElement13 = {
    htmlFor: "LeftSPH",
    "aria-label": "SPH for Left eye",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement13, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement13, "__source", {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 11
  }), _React$createElement13), /*#__PURE__*/React.createElement("span", (_React$createElement10 = {
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement10, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement10, "__source", {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 13
  }), _React$createElement10), "SPH"), /*#__PURE__*/React.createElement("select", (_React$createElement12 = {
    id: "LeftSPH",
    onChange: function onChange(e) {
      return setEye(leftEye, setLeftEye, "SPH", e.target.value);
    },
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement12, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement12, "__source", {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 13
  }), _React$createElement12), /*#__PURE__*/React.createElement("option", (_React$createElement11 = {
    "default": true,
    value: "",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement11, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement11, "__source", {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 15
  }), _React$createElement11), " "), generateOptions(-20.0, 20.0, 0.25, "float"))))), /*#__PURE__*/React.createElement("div", (_React$createElement26 = {
    className: "group",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement26, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement26, "__source", {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 7
  }), _React$createElement26), /*#__PURE__*/React.createElement("div", (_React$createElement20 = {
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement20, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement20, "__source", {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 9
  }), _React$createElement20), /*#__PURE__*/React.createElement("label", (_React$createElement19 = {
    htmlFor: "RightCYL",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement19, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement19, "__source", {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 11
  }), _React$createElement19), /*#__PURE__*/React.createElement("span", (_React$createElement16 = {
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement16, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement16, "__source", {
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
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement18, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement18, "__source", {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 13
  }), _React$createElement18), /*#__PURE__*/React.createElement("option", (_React$createElement17 = {
    "default": true,
    value: "",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement17, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement17, "__source", {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 15
  }), _React$createElement17), " "), generateOptions(-20.0, 20.0, 0.25, "float")))), /*#__PURE__*/React.createElement("div", (_React$createElement25 = {
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement25, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement25, "__source", {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 9
  }), _React$createElement25), /*#__PURE__*/React.createElement("label", (_React$createElement24 = {
    htmlFor: "LeftCYL",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement24, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement24, "__source", {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 11
  }), _React$createElement24), /*#__PURE__*/React.createElement("span", (_React$createElement21 = {
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement21, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement21, "__source", {
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
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement23, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement23, "__source", {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 13
  }), _React$createElement23), /*#__PURE__*/React.createElement("option", (_React$createElement22 = {
    "default": true,
    value: "",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement22, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement22, "__source", {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 15
  }), _React$createElement22), " "), generateOptions(-20.0, 20.0, 0.25, "float"))))), /*#__PURE__*/React.createElement("div", (_React$createElement39 = {
    className: "group",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement39, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement39, "__source", {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 7
  }), _React$createElement39), /*#__PURE__*/React.createElement("div", (_React$createElement32 = {
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement32, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement32, "__source", {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 9
  }), _React$createElement32), /*#__PURE__*/React.createElement("label", (_React$createElement31 = {
    htmlFor: "RightAxis",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement31, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement31, "__source", {
    fileName: _jsxFileName,
    lineNumber: 111,
    columnNumber: 11
  }), _React$createElement31), /*#__PURE__*/React.createElement("span", (_React$createElement27 = {
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement27, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement27, "__source", {
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
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement30, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement30, "__source", {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 13
  }), _React$createElement30), /*#__PURE__*/React.createElement("option", (_React$createElement28 = {
    "default": true,
    value: "",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement28, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement28, "__source", {
    fileName: _jsxFileName,
    lineNumber: 120,
    columnNumber: 15
  }), _React$createElement28), " "), /*#__PURE__*/React.createElement("option", (_React$createElement29 = {
    value: "blank/0",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement29, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement29, "__source", {
    fileName: _jsxFileName,
    lineNumber: 123,
    columnNumber: 15
  }), _React$createElement29), "blank/0"), generateOptions(1, 180, 1)))), /*#__PURE__*/React.createElement("div", (_React$createElement38 = {
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement38, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement38, "__source", {
    fileName: _jsxFileName,
    lineNumber: 129,
    columnNumber: 9
  }), _React$createElement38), /*#__PURE__*/React.createElement("label", (_React$createElement37 = {
    htmlFor: "LeftAxis",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement37, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement37, "__source", {
    fileName: _jsxFileName,
    lineNumber: 130,
    columnNumber: 11
  }), _React$createElement37), /*#__PURE__*/React.createElement("span", (_React$createElement33 = {
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement33, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement33, "__source", {
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
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement36, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement36, "__source", {
    fileName: _jsxFileName,
    lineNumber: 132,
    columnNumber: 13
  }), _React$createElement36), /*#__PURE__*/React.createElement("option", (_React$createElement34 = {
    "default": true,
    value: "",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement34, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement34, "__source", {
    fileName: _jsxFileName,
    lineNumber: 139,
    columnNumber: 15
  }), _React$createElement34), " "), /*#__PURE__*/React.createElement("option", (_React$createElement35 = {
    value: "blank/0",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement35, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement35, "__source", {
    fileName: _jsxFileName,
    lineNumber: 142,
    columnNumber: 15
  }), _React$createElement35), "blank/0"), generateOptions(1, 180, 1))))), /*#__PURE__*/React.createElement("div", (_React$createElement50 = {
    className: "group",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement50, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement50, "__source", {
    fileName: _jsxFileName,
    lineNumber: 149,
    columnNumber: 7
  }), _React$createElement50), /*#__PURE__*/React.createElement("div", (_React$createElement44 = {
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement44, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement44, "__source", {
    fileName: _jsxFileName,
    lineNumber: 150,
    columnNumber: 9
  }), _React$createElement44), /*#__PURE__*/React.createElement("label", (_React$createElement43 = {
    htmlFor: "RightAdd",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement43, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement43, "__source", {
    fileName: _jsxFileName,
    lineNumber: 151,
    columnNumber: 11
  }), _React$createElement43), /*#__PURE__*/React.createElement("span", (_React$createElement40 = {
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement40, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement40, "__source", {
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
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement42, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement42, "__source", {
    fileName: _jsxFileName,
    lineNumber: 153,
    columnNumber: 13
  }), _React$createElement42), /*#__PURE__*/React.createElement("option", (_React$createElement41 = {
    "default": true,
    value: "",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement41, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement41, "__source", {
    fileName: _jsxFileName,
    lineNumber: 160,
    columnNumber: 15
  }), _React$createElement41), " "), generateOptions(0.25, 3.5, 0.25, "float")))), /*#__PURE__*/React.createElement("div", (_React$createElement49 = {
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement49, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement49, "__source", {
    fileName: _jsxFileName,
    lineNumber: 168,
    columnNumber: 9
  }), _React$createElement49), /*#__PURE__*/React.createElement("label", (_React$createElement48 = {
    htmlFor: "LeftAdd",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement48, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement48, "__source", {
    fileName: _jsxFileName,
    lineNumber: 169,
    columnNumber: 11
  }), _React$createElement48), /*#__PURE__*/React.createElement("span", (_React$createElement45 = {
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement45, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement45, "__source", {
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
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement47, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement47, "__source", {
    fileName: _jsxFileName,
    lineNumber: 171,
    columnNumber: 13
  }), _React$createElement47), /*#__PURE__*/React.createElement("option", (_React$createElement46 = {
    "default": true,
    value: "",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement46, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement46, "__source", {
    fileName: _jsxFileName,
    lineNumber: 176,
    columnNumber: 15
  }), _React$createElement46), " "), generateOptions(0.25, 3.5, 0.25, "float"))))), /*#__PURE__*/React.createElement("div", (_React$createElement61 = {
    className: "group",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement61, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement61, "__source", {
    fileName: _jsxFileName,
    lineNumber: 185,
    columnNumber: 7
  }), _React$createElement61), /*#__PURE__*/React.createElement("div", (_React$createElement55 = {
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement55, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement55, "__source", {
    fileName: _jsxFileName,
    lineNumber: 186,
    columnNumber: 9
  }), _React$createElement55), /*#__PURE__*/React.createElement("label", (_React$createElement52 = {
    htmlFor: "RightPD",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement52, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement52, "__source", {
    fileName: _jsxFileName,
    lineNumber: 188,
    columnNumber: 11
  }), _React$createElement52), "Pupilary Distance ", /*#__PURE__*/React.createElement("span", (_React$createElement51 = {
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement51, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement51, "__source", {
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
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement54, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement54, "__source", {
    fileName: _jsxFileName,
    lineNumber: 191,
    columnNumber: 11
  }), _React$createElement54), /*#__PURE__*/React.createElement("option", (_React$createElement53 = {
    "default": true,
    value: "",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement53, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement53, "__source", {
    fileName: _jsxFileName,
    lineNumber: 196,
    columnNumber: 13
  }), _React$createElement53), " "), generateOptions(40, 75, 0.5, "float"))), /*#__PURE__*/React.createElement("div", (_React$createElement60 = {
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement60, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement60, "__source", {
    fileName: _jsxFileName,
    lineNumber: 203,
    columnNumber: 9
  }), _React$createElement60), /*#__PURE__*/React.createElement("label", (_React$createElement57 = {
    htmlFor: "LeftPD",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement57, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement57, "__source", {
    fileName: _jsxFileName,
    lineNumber: 205,
    columnNumber: 11
  }), _React$createElement57), "Pupilary Distance ", /*#__PURE__*/React.createElement("span", (_React$createElement56 = {
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement56, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement56, "__source", {
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
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement59, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement59, "__source", {
    fileName: _jsxFileName,
    lineNumber: 208,
    columnNumber: 11
  }), _React$createElement59), /*#__PURE__*/React.createElement("option", (_React$createElement58 = {
    "default": true,
    value: "",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement58, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement58, "__source", {
    fileName: _jsxFileName,
    lineNumber: 213,
    columnNumber: 13
  }), _React$createElement58), " "), generateOptions(40, 75, 0.5, "float")))), /*#__PURE__*/React.createElement("div", (_React$createElement66 = {
    className: "file-group",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement66, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement66, "__source", {
    fileName: _jsxFileName,
    lineNumber: 221,
    columnNumber: 7
  }), _React$createElement66), /*#__PURE__*/React.createElement("label", (_React$createElement62 = {
    htmlFor: "PrescriptionPhoto",
    className: "h4",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement62, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement62, "__source", {
    fileName: _jsxFileName,
    lineNumber: 223,
    columnNumber: 9
  }), _React$createElement62), "OR UPLOAD A PHOTO OF YOUR PRESCRIPTION"), /*#__PURE__*/React.createElement("div", (_React$createElement65 = {
    className: "file-input-wrapper",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement65, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement65, "__source", {
    fileName: _jsxFileName,
    lineNumber: 226,
    columnNumber: 9
  }), _React$createElement65), /*#__PURE__*/React.createElement("button", (_React$createElement63 = {
    type: "button",
    className: "btn",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement63, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement63, "__source", {
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
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement64, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement64, "__source", {
    fileName: _jsxFileName,
    lineNumber: 230,
    columnNumber: 11
  }), _React$createElement64)))), /*#__PURE__*/React.createElement("p", (_React$createElement67 = {
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement67, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_React$createElement67, "__source", {
    fileName: _jsxFileName,
    lineNumber: 238,
    columnNumber: 7
  }), _React$createElement67), (file === null || file === void 0 ? void 0 : file.name) ? file.name : "No file selected"));
}
})();

/******/ })()
;
//# sourceMappingURL=PrescriptionForm.js.map