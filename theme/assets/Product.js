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
/*!************************!*\
  !*** ./src/Product.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Product": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var _Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

var _jsxFileName = "/Users/kenlyerly/Apps/replace-my-glasses/src/Product.js";

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
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement8, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement8, "__source", {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }), _React$createElement8), /*#__PURE__*/React.createElement("img", (_React$createElement = {
    className: "product-image",
    src: (_product$node$images$ = product.node.images.edges[0]) === null || _product$node$images$ === void 0 ? void 0 : _product$node$images$.node.transformedSrc,
    alt: (_product$node$images$2 = product.node.images.edges[0]) === null || _product$node$images$2 === void 0 ? void 0 : _product$node$images$2.node.altText,
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement, "__source", {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 11
  }), _React$createElement)), /*#__PURE__*/React.createElement("div", (_React$createElement5 = {
    className: "product-description",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement5, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement5, "__source", {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 11
  }), _React$createElement5), /*#__PURE__*/React.createElement("h4", (_React$createElement3 = {
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement3, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement3, "__source", {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 13
  }), _React$createElement3), product.node.title, /*#__PURE__*/React.createElement("span", (_React$createElement2 = {
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement2, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement2, "__source", {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 15
  }), _React$createElement2), " ", "($", parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(2), " ", "USD)")), /*#__PURE__*/React.createElement("p", (_React$createElement4 = {
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement4, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement4, "__source", {
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
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement6, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement6, "__source", {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 11
  }), _React$createElement6)), /*#__PURE__*/React.createElement("div", (_React$createElement7 = {
    className: "checkmark",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement7, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement7, "__source", {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 11
  }), _React$createElement7))) : /*#__PURE__*/React.createElement("div", (_React$createElement24 = {
    className: "product-option with-variants",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement24, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement24, "__source", {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 9
  }), _React$createElement24), /*#__PURE__*/React.createElement("img", (_React$createElement9 = {
    className: "product-image",
    src: (_product$node$images$3 = product.node.images.edges[0]) === null || _product$node$images$3 === void 0 ? void 0 : _product$node$images$3.node.transformedSrc,
    alt: (_product$node$images$4 = product.node.images.edges[0]) === null || _product$node$images$4 === void 0 ? void 0 : _product$node$images$4.node.altText,
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement9, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement9, "__source", {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 11
  }), _React$createElement9)), /*#__PURE__*/React.createElement("div", (_React$createElement13 = {
    className: "product-description",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement13, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement13, "__source", {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 11
  }), _React$createElement13), /*#__PURE__*/React.createElement("h4", (_React$createElement11 = {
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement11, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement11, "__source", {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 13
  }), _React$createElement11), product.node.title, /*#__PURE__*/React.createElement("span", (_React$createElement10 = {
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement10, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement10, "__source", {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 15
  }), _React$createElement10), " ", "($", parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(2), " ", "- $", parseFloat(product.node.priceRange.maxVariantPrice.amount).toFixed(2), " ", "USD)")), /*#__PURE__*/React.createElement("p", (_React$createElement12 = {
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement12, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement12, "__source", {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 13
  }), _React$createElement12), product.node.description)), /*#__PURE__*/React.createElement("ul", (_React$createElement23 = {
    className: "variants",
    __self: this
  }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement23, "__self", this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement23, "__source", {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 11
  }), _React$createElement23), product.node.variants.edges.map(function (variant) {
    var _variant$node$image, _variant$node$image2, _React$createElement14, _React$createElement15, _React$createElement16, _variant$node$image3, _React$createElement17, _React$createElement18, _React$createElement19, _React$createElement20, _React$createElement21, _React$createElement22;

    return /*#__PURE__*/React.createElement("li", (_React$createElement22 = {
      key: variant.node.id,
      __self: _this
    }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement22, "__self", _this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement22, "__source", {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }), _React$createElement22), /*#__PURE__*/React.createElement("img", (_React$createElement14 = {
      className: "variant-image",
      src: (_variant$node$image = variant.node.image) === null || _variant$node$image === void 0 ? void 0 : _variant$node$image.transformedSrc,
      alt: (_variant$node$image2 = variant.node.image) === null || _variant$node$image2 === void 0 ? void 0 : _variant$node$image2.altText,
      __self: _this
    }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement14, "__self", _this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement14, "__source", {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }), _React$createElement14)), /*#__PURE__*/React.createElement("div", (_React$createElement19 = {
      className: "variant-description",
      __self: _this
    }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement19, "__self", _this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement19, "__source", {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }), _React$createElement19), /*#__PURE__*/React.createElement("h6", (_React$createElement16 = {
      __self: _this
    }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement16, "__self", _this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement16, "__source", {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 19
    }), _React$createElement16), variant.node.title, /*#__PURE__*/React.createElement("small", (_React$createElement15 = {
      __self: _this
    }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement15, "__self", _this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement15, "__source", {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 21
    }), _React$createElement15), " ($", variant.node.priceV2.amount, ")")), /*#__PURE__*/React.createElement("p", (_React$createElement18 = {
      __self: _this
    }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement18, "__self", _this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement18, "__source", {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 19
    }), _React$createElement18), /*#__PURE__*/React.createElement("small", (_React$createElement17 = {
      __self: _this
    }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement17, "__self", _this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement17, "__source", {
      fileName: _jsxFileName,
      lineNumber: 100,
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
    }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement20, "__self", _this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement20, "__source", {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }), _React$createElement20)), /*#__PURE__*/React.createElement("div", (_React$createElement21 = {
      className: "checkmark",
      __self: _this
    }, (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement21, "__self", _this), (0,_Users_kenlyerly_Apps_replace_my_glasses_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_React$createElement21, "__source", {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }), _React$createElement21)));
  }))));
}
})();

/******/ })()
;
//# sourceMappingURL=Product.js.map