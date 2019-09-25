webpackHotUpdate("main",{

/***/ "./src/Components/Minion.js":
/*!**********************************!*\
  !*** ./src/Components/Minion.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/tmmm4/Desktop/Projects/hearthstone-redux/src/Components/Minion.js";


function Minion({
  cardData,
  playerId,
  id,
  currentMana,
  currentTurn,
  yourAsset
}) {
  const usable = playerId === currentTurn && yourAsset && cardData.charge ? "usable responsive-img" : "responsive-img";
  const healthStyle = cardData.health < cardData.initialHealth ? "damaged" : null;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "data-identity": "field",
    "data-playerid": playerId,
    "data-id": id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "",
    "data-identity": "field",
    "data-playerid": playerId,
    "data-id": id,
    className: usable,
    src: cardData.img,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: healthStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Health: ", cardData.health), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Attack: ", cardData.attack)));
}

/* harmony default export */ __webpack_exports__["default"] = (Minion);

/***/ })

})
//# sourceMappingURL=main.1b3e8347ba836ab06cb9.hot-update.js.map