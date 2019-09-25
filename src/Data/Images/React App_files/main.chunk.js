(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".field-position {\n  border: 1px solid black;\n  height: 20em;\n  background-color: white;\n}\n\n.current-turn-side {\n  background-color: rgb(237, 252, 215);\n}\n\n.field {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n  grid-gap: 1em;\n}\n\n.dot {\n  height: 25px;\n  width: 25px;\n  background-color: rgb(148, 43, 43);\n  border-radius: 50%;\n  display: inline-block;\n  position: absolute;\n}\n\n.filled-mana-crystal {\n  height: 25px;\n  width: 25px;\n  background-color: rgb(55, 90, 204);\n  border-radius: 50%;\n  display: inline-block;\n}\n.empty-mana-crystal {\n  height: 25px;\n  width: 25px;\n  background-color: rgb(173, 173, 173);\n  border-radius: 50%;\n  display: inline-block;\n}\n\n\n.damaged {\n  color: rgb(175, 16, 16);\n}\n.hand {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n  grid-gap: 1em;\n  \n}\n\n.portrait {\n  height: 6em;\n}\n\n#drag-object {\n  position: absolute;\n}\n\n.usable {\n  outline: 4px solid green;\n}\n\n\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_Board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Board */ "./src/Components/Board.js");
var _jsxFileName = "/Users/tmmm4/Desktop/Projects/hearthstone-redux/src/App.js";




function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Board__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Components/Board.js":
/*!*********************************!*\
  !*** ./src/Components/Board.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hero */ "./src/Components/Hero.js");
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Field */ "./src/Components/Field.js");
/* harmony import */ var _Hand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Hand */ "./src/Components/Hand.js");
/* harmony import */ var _TurnButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TurnButton */ "./src/Components/TurnButton.js");
/* harmony import */ var _Mana__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Mana */ "./src/Components/Mana.js");
/* harmony import */ var _gameplayHandlers_combatHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../gameplayHandlers/combatHandler */ "./src/gameplayHandlers/combatHandler.js");
/* harmony import */ var _gameplayHandlers_deadHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../gameplayHandlers/deadHandler */ "./src/gameplayHandlers/deadHandler.js");
/* harmony import */ var _gameplayHandlers_playCardHandler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../gameplayHandlers/playCardHandler */ "./src/gameplayHandlers/playCardHandler.js");
/* harmony import */ var _gameplayHandlers_startTurnHandler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../gameplayHandlers/startTurnHandler */ "./src/gameplayHandlers/startTurnHandler.js");
/* harmony import */ var _gameplayHandlers_heroPowerHandler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../gameplayHandlers/heroPowerHandler */ "./src/gameplayHandlers/heroPowerHandler.js");
/* harmony import */ var _dragAndDrop_onMouseDownHandler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../dragAndDrop/onMouseDownHandler */ "./src/dragAndDrop/onMouseDownHandler.js");
/* harmony import */ var _dragAndDrop_onMouseMoveHandler__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../dragAndDrop/onMouseMoveHandler */ "./src/dragAndDrop/onMouseMoveHandler.js");
/* harmony import */ var _dragAndDrop_onMouseUpHandler__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../dragAndDrop/onMouseUpHandler */ "./src/dragAndDrop/onMouseUpHandler.js");
var _jsxFileName = "/Users/tmmm4/Desktop/Projects/hearthstone-redux/src/Components/Board.js";
 //
















class Board extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.handlePlaceCard = dragging => {
      const outcome = Object(_gameplayHandlers_playCardHandler__WEBPACK_IMPORTED_MODULE_9__["default"])(dragging.originIdentity, dragging.originPlayerId, dragging.originHandFieldId, dragging.destinationIdentity, dragging.destinationPlayerId, dragging.destinationHandFieldId);
      return null;
    };

    this.handleCombat = dragging => {
      const outcome = Object(_gameplayHandlers_combatHandler__WEBPACK_IMPORTED_MODULE_7__["default"])(dragging.originIdentity, dragging.originPlayerId, dragging.originHandFieldId, dragging.destinationIdentity, dragging.destinationPlayerId, dragging.destinationHandFieldId);
      Object(_gameplayHandlers_deadHandler__WEBPACK_IMPORTED_MODULE_8__["default"])();
      console.log(outcome);
      return null;
    };

    this.state = {};
    this.dragging = null;
  }

  componentDidMount() {
    Object(_gameplayHandlers_startTurnHandler__WEBPACK_IMPORTED_MODULE_10__["default"])(0);
    document.addEventListener("mousedown", e => {
      this.dragging = Object(_dragAndDrop_onMouseDownHandler__WEBPACK_IMPORTED_MODULE_12__["default"])(e, document, this.dragging, this.props.players);

      if (this.dragging) {
        if (this.dragging.originIdentity === "hero-power") {
          const outcome = Object(_gameplayHandlers_heroPowerHandler__WEBPACK_IMPORTED_MODULE_11__["default"])(this.dragging.originPlayerId, this.dragging.playerClass);
          console.log(outcome.message);
          this.dragging = null;
        }
      }
    });
    document.addEventListener("mousemove", e => {
      this.dragging = Object(_dragAndDrop_onMouseMoveHandler__WEBPACK_IMPORTED_MODULE_13__["default"])(e, document, this.dragging, this.props.players);
    });
    document.addEventListener("mouseup", () => {
      this.dragging = Object(_dragAndDrop_onMouseUpHandler__WEBPACK_IMPORTED_MODULE_14__["default"])(document, this.dragging);

      if (this.dragging) {
        switch (this.dragging.originIdentity) {
          case "hand":
            this.dragging = this.handlePlaceCard(this.dragging);
            break;

          case "field":
            this.dragging = this.handleCombat(this.dragging);
            break;

          default:
        }
      }

      this.dragging = null;
    });
  }

  render() {
    const playerSide = this.props.currentTurn === this.props.playerId ? "current-turn-side" : null;
    const enemySide = this.props.currentTurn === this.props.enemyId ? "current-turn-side" : null;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "board",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: enemySide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hero__WEBPACK_IMPORTED_MODULE_2__["default"], {
      health: this.props.enemyHealth,
      playerId: this.props.enemyId,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Mana__WEBPACK_IMPORTED_MODULE_6__["default"], {
      currentMana: this.props.enemyCurrentMana,
      totalMana: this.props.enemyTotalMana,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hand__WEBPACK_IMPORTED_MODULE_4__["default"], {
      hand: this.props.enemyHand,
      playerId: this.props.enemyId,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Field__WEBPACK_IMPORTED_MODULE_3__["default"], {
      field: this.props.enemyField,
      playerId: this.props.enemyId,
      currentTurn: this.props.currentTurn,
      yourField: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TurnButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: playerSide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Field__WEBPACK_IMPORTED_MODULE_3__["default"], {
      field: this.props.yourField,
      playerId: this.props.playerId,
      currentTurn: this.props.currentTurn,
      yourAsset: true,
      currentMana: this.props.yourCurrentMana,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hand__WEBPACK_IMPORTED_MODULE_4__["default"], {
      hand: this.props.yourHand,
      playerId: this.props.playerId,
      currentMana: this.props.yourCurrentMana,
      currentTurn: this.props.currentTurn,
      yourAsset: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Mana__WEBPACK_IMPORTED_MODULE_6__["default"], {
      currentMana: this.props.yourCurrentMana,
      totalMana: this.props.yourTotalMana,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hero__WEBPACK_IMPORTED_MODULE_2__["default"], {
      health: this.props.yourHealth,
      playerId: this.props.playerId,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    })));
  }

}

const mapStateToProps = ({
  playerId,
  enemyId,
  currentTurn,
  players
}) => ({
  yourHand: players[playerId].hand,
  yourField: players[playerId].field,
  yourCurrentMana: players[playerId].currentMana,
  yourTotalMana: players[playerId].totalMana,
  enemyHand: players[enemyId].hand,
  enemyField: players[enemyId].field,
  enemyCurrentMana: players[enemyId].currentMana,
  enemyTotalMana: players[enemyId].totalMana,
  playerId,
  enemyId,
  currentTurn,
  players,
  enemyHealth: players[enemyId].health,
  yourHealth: players[playerId].health
});

const mapDispatchToProps = dispatch => ({});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Board));

/***/ }),

/***/ "./src/Components/Card.js":
/*!********************************!*\
  !*** ./src/Components/Card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/tmmm4/Desktop/Projects/hearthstone-redux/src/Components/Card.js";


function Card({
  cardData,
  playerId,
  id,
  currentMana,
  currentTurn,
  yourAsset
}) {
  const usable = cardData.cost <= currentMana && playerId === currentTurn && yourAsset ? "usable responsive-img" : "responsive-img";
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    "data-identity": 'hand',
    "data-playerid": playerId,
    "data-id": id,
    alt: "",
    src: cardData.img,
    className: usable,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./src/Components/Field.js":
/*!*********************************!*\
  !*** ./src/Components/Field.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Minion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Minion */ "./src/Components/Minion.js");
var _jsxFileName = "/Users/tmmm4/Desktop/Projects/hearthstone-redux/src/Components/Field.js";



function Field({
  field,
  playerId,
  currentTurn,
  yourAsset,
  currentMana
}) {
  const content = field.map((card, i) => {
    if (!card) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: i,
        "data-id": i,
        "data-playerid": playerId,
        "data-identity": "field",
        className: "field-position",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      });
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: i,
        "data-id": i,
        "data-playerid": playerId,
        "data-identity": "field",
        className: "field-position",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Minion__WEBPACK_IMPORTED_MODULE_1__["default"], {
        id: i,
        playerId: playerId,
        cardData: card,
        currentTurn: currentTurn,
        currentMana: currentMana,
        yourAsset: yourAsset,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }));
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, content);
}

/* harmony default export */ __webpack_exports__["default"] = (Field);

/***/ }),

/***/ "./src/Components/Hand.js":
/*!********************************!*\
  !*** ./src/Components/Hand.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "./src/Components/Card.js");
var _jsxFileName = "/Users/tmmm4/Desktop/Projects/hearthstone-redux/src/Components/Hand.js";



function Hand({
  hand,
  playerId,
  currentMana,
  currentTurn,
  yourAsset
}) {
  const content = hand.map((card, i) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: i,
      id: i,
      playerId: playerId,
      cardData: card,
      currentMana: currentMana,
      currentTurn: currentTurn,
      yourAsset: yourAsset,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, content);
}

/* harmony default export */ __webpack_exports__["default"] = (Hand);

/***/ }),

/***/ "./src/Components/Hero.js":
/*!********************************!*\
  !*** ./src/Components/Hero.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/tmmm4/Desktop/Projects/hearthstone-redux/src/Components/Hero.js";


function Hero({
  health,
  playerId
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, health), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    "data-identity": "hero",
    "data-id": null,
    "data-playerid": playerId,
    alt: "",
    className: "portrait hero",
    src: "https://gamepedia.cursecdn.com/hearthstone_gamepedia/0/0a/Gul%27dan%28618%29.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "button",
    "data-identity": "hero-power",
    "data-playerid": playerId,
    value: "Hero Power",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./src/Components/Mana.js":
/*!********************************!*\
  !*** ./src/Components/Mana.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/tmmm4/Desktop/Projects/hearthstone-redux/src/Components/Mana.js";


function Mana({
  currentMana,
  totalMana
}) {
  let crystals = Array(totalMana).fill();
  let crystalsElement = crystals.map((x, i) => {
    if (i < currentMana) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: i,
        className: "filled-mana-crystal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      });
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: i,
        className: "empty-mana-crystal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      });
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "(", currentMana, " / ", totalMana, ")"), crystalsElement);
}

/* harmony default export */ __webpack_exports__["default"] = (Mana);

/***/ }),

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

/***/ }),

/***/ "./src/Components/TurnButton.js":
/*!**************************************!*\
  !*** ./src/Components/TurnButton.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _gameplayHandlers_endTurnHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gameplayHandlers/endTurnHandler */ "./src/gameplayHandlers/endTurnHandler.js");
var _jsxFileName = "/Users/tmmm4/Desktop/Projects/hearthstone-redux/src/Components/TurnButton.js";




function TurnButton({
  currentTurn
}) {
  const handleClick = () => {
    Object(_gameplayHandlers_endTurnHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(currentTurn);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "button",
    value: "Turn",
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  });
}

const mapStateToProps = ({
  currentTurn,
  players
}) => ({
  currentTurn
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null)(TurnButton));

/***/ }),

/***/ "./src/Data/Cards.js":
/*!***************************!*\
  !*** ./src/Data/Cards.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Images_ArgentSquire_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Images/ArgentSquire.png */ "./src/Data/Images/ArgentSquire.png");
/* harmony import */ var _Images_ArgentSquire_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Images_ArgentSquire_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Images_DireWolfAlpha_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Images/DireWolfAlpha.png */ "./src/Data/Images/DireWolfAlpha.png");
/* harmony import */ var _Images_DireWolfAlpha_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Images_DireWolfAlpha_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Images_FlameImp_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Images/FlameImp.png */ "./src/Data/Images/FlameImp.png");
/* harmony import */ var _Images_FlameImp_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Images_FlameImp_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Images_Wisp_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Images/Wisp.png */ "./src/Data/Images/Wisp.png");
/* harmony import */ var _Images_Wisp_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Images_Wisp_png__WEBPACK_IMPORTED_MODULE_3__);




const cards = [{
  id: 0,
  name: "Argent Squire",
  img: _Images_ArgentSquire_png__WEBPACK_IMPORTED_MODULE_0___default.a,
  cost: 1,
  initialHealth: 1,
  initialAttack: 1,
  type: 'Minion'
}, {
  id: 1,
  name: "Dire Wolf Alpha",
  img: _Images_DireWolfAlpha_png__WEBPACK_IMPORTED_MODULE_1___default.a,
  cost: 2,
  initialHealth: 2,
  initialAttack: 2,
  type: 'Minion'
}, {
  id: 2,
  name: "Flame Imp",
  img: _Images_FlameImp_png__WEBPACK_IMPORTED_MODULE_2___default.a,
  cost: 1,
  initialHealth: 2,
  initialAttack: 3,
  type: 'Minion'
}, {
  id: 3,
  name: "Wisp",
  img: _Images_Wisp_png__WEBPACK_IMPORTED_MODULE_3___default.a,
  cost: 0,
  initialHealth: 1,
  initialAttack: 1,
  type: 'Minion'
}];
/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./src/Data/Images/ArgentSquire.png":
/*!******************************************!*\
  !*** ./src/Data/Images/ArgentSquire.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ArgentSquire.d05b9f03.png";

/***/ }),

/***/ "./src/Data/Images/DireWolfAlpha.png":
/*!*******************************************!*\
  !*** ./src/Data/Images/DireWolfAlpha.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/DireWolfAlpha.b7ed111a.png";

/***/ }),

/***/ "./src/Data/Images/FlameImp.png":
/*!**************************************!*\
  !*** ./src/Data/Images/FlameImp.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/FlameImp.dfcbd4a7.png";

/***/ }),

/***/ "./src/Data/Images/Wisp.png":
/*!**********************************!*\
  !*** ./src/Data/Images/Wisp.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Wisp.fbac6dcf.png";

/***/ }),

/***/ "./src/Redux/actions.js":
/*!******************************!*\
  !*** ./src/Redux/actions.js ***!
  \******************************/
/*! exports provided: setHand, setTurn, setTotalMana, setCurrentMana, placeCard, setHealthOfMinion, removeMinionFromField, setHealthOfHero, setChargeOfMinion, drawCard, setTapped */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHand", function() { return setHand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTurn", function() { return setTurn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTotalMana", function() { return setTotalMana; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentMana", function() { return setCurrentMana; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placeCard", function() { return placeCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHealthOfMinion", function() { return setHealthOfMinion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeMinionFromField", function() { return removeMinionFromField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHealthOfHero", function() { return setHealthOfHero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setChargeOfMinion", function() { return setChargeOfMinion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawCard", function() { return drawCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTapped", function() { return setTapped; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/Redux/types.js");

const setHand = hand => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_HAND"],
  payload: hand
});
const setTurn = playerId => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_TURN"],
  payload: playerId
});
const setTotalMana = (playerId, newTotalMana) => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_TOTAL_MANA"],
  payload: {
    playerId,
    newTotalMana
  }
});
const setCurrentMana = (playerId, newCurrentMana) => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_CURRENT_MANA"],
  payload: {
    playerId,
    newCurrentMana
  }
});
const placeCard = (playerId, cardId, positionId, handId) => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["PLACE_CARD"],
  payload: {
    playerId,
    cardId,
    positionId,
    handId
  }
});
const setHealthOfMinion = (playerId, fieldId, newHealth) => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_HEALTH_OF_MINION"],
  payload: {
    playerId,
    fieldId,
    newHealth
  }
});
const removeMinionFromField = (playerId, fieldId) => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["REMOVE_MINION_FROM_FIELD"],
  payload: {
    playerId,
    fieldId
  }
});
const setHealthOfHero = (playerId, newHealth) => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_HEALTH_OF_HERO"],
  payload: {
    playerId,
    newHealth
  }
});
const setChargeOfMinion = (playerId, fieldId, charge) => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_CHARGE_OF_MINION"],
  payload: {
    playerId,
    fieldId,
    charge
  }
});
const drawCard = (playerId, quantity) => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["DRAW_CARD"],
  payload: {
    playerId,
    quantity
  }
});
const setTapped = (playerId, value) => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_TAPPED"],
  payload: {
    playerId,
    value
  }
});

/***/ }),

/***/ "./src/Redux/reducer.js":
/*!******************************!*\
  !*** ./src/Redux/reducer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_tmmm4_Desktop_Projects_hearthstone_redux_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Data_Cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Data/Cards */ "./src/Data/Cards.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./src/Redux/types.js");



const initialState = {
  playerId: 0,
  enemyId: 1,
  currentTurn: 0,
  players: [{
    id: 0,
    deck: _Data_Cards__WEBPACK_IMPORTED_MODULE_1__["default"],
    hand: _Data_Cards__WEBPACK_IMPORTED_MODULE_1__["default"],
    field: [null, null, null, null, null, null, null],
    currentMana: 0,
    totalMana: 0,
    health: 30,
    class: 'Warlock',
    tapped: false
  }, {
    id: 1,
    hand: _Data_Cards__WEBPACK_IMPORTED_MODULE_1__["default"],
    deck: _Data_Cards__WEBPACK_IMPORTED_MODULE_1__["default"],
    field: [null, null, null, null, null, null, null],
    currentMana: 0,
    totalMana: 0,
    health: 30,
    class: 'Warlock',
    tapped: false
  }]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_2__["SET_TURN"]:
      {
        return Object(_Users_tmmm4_Desktop_Projects_hearthstone_redux_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          currentTurn: action.payload
        });
      }

    case _types__WEBPACK_IMPORTED_MODULE_2__["SET_TOTAL_MANA"]:
      {
        const players = state.players;
        const temp = [...players];
        const _action$payload = action.payload,
              playerId = _action$payload.playerId,
              newTotalMana = _action$payload.newTotalMana;
        temp[playerId].totalMana = newTotalMana;
        return Object(_Users_tmmm4_Desktop_Projects_hearthstone_redux_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          players: [...temp]
        });
      }

    case _types__WEBPACK_IMPORTED_MODULE_2__["SET_CURRENT_MANA"]:
      {
        const players = state.players;
        const temp = [...players];
        const _action$payload2 = action.payload,
              playerId = _action$payload2.playerId,
              newCurrentMana = _action$payload2.newCurrentMana;
        temp[playerId].currentMana = newCurrentMana;
        return Object(_Users_tmmm4_Desktop_Projects_hearthstone_redux_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          players: [...temp]
        });
      }

    case _types__WEBPACK_IMPORTED_MODULE_2__["PLACE_CARD"]:
      {
        const players = state.players;
        const _action$payload3 = action.payload,
              playerId = _action$payload3.playerId,
              cardId = _action$payload3.cardId,
              positionId = _action$payload3.positionId,
              handId = _action$payload3.handId;
        const temp = [Object(_Users_tmmm4_Desktop_Projects_hearthstone_redux_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, players[0], {
          field: [...players[0].field],
          hand: [...players[0].hand]
        }), Object(_Users_tmmm4_Desktop_Projects_hearthstone_redux_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, players[1], {
          field: [...players[1].field],
          hand: [...players[1].hand]
        })];
        temp[playerId].field[positionId] = Object(_Users_tmmm4_Desktop_Projects_hearthstone_redux_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _Data_Cards__WEBPACK_IMPORTED_MODULE_1__["default"][cardId], {
          health: _Data_Cards__WEBPACK_IMPORTED_MODULE_1__["default"][cardId].initialHealth,
          attack: _Data_Cards__WEBPACK_IMPORTED_MODULE_1__["default"][cardId].initialAttack,
          charge: false
        });
        temp[playerId].hand.splice(handId, 1);
        temp[playerId].currentMana = temp[playerId].currentMana - _Data_Cards__WEBPACK_IMPORTED_MODULE_1__["default"][cardId].cost;
        return Object(_Users_tmmm4_Desktop_Projects_hearthstone_redux_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          players: [...temp]
        });
      }

    case _types__WEBPACK_IMPORTED_MODULE_2__["SET_HEALTH_OF_MINION"]:
      {
        const players = state.players;
        const _action$payload4 = action.payload,
              playerId = _action$payload4.playerId,
              fieldId = _action$payload4.fieldId,
              newHealth = _action$payload4.newHealth;
        const temp = [Object(_Users_tmmm4_Desktop_Projects_hearthstone_redux_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, players[0], {
          field: [...players[0].field],
          hand: [...players[0].hand]
        }), Object(_Users_tmmm4_Desktop_Projects_hearthstone_redux_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, players[1], {
          field: [...players[1].field],
          hand: [...players[1].hand]
        })];
        temp[playerId].field[fieldId] = Object(_Users_tmmm4_Desktop_Projects_hearthstone_redux_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, temp[playerId].field[fieldId], {
          health: newHealth
        });
        return Object(_Users_tmmm4_Desktop_Projects_hearthstone_redux_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          players: [...temp]
        });
      }

    case _types__WEBPACK_IMPORTED_MODULE_2__["REMOVE_MINION_FROM_FIELD"]:
      {
        const players = state.players;
        const _action$payload5 = action.payload,
              playerId = _action$payload5.playerId,
              fieldId = _action$payload5.fieldId;
        const temp = [Object(_Users_tmmm4_Desktop_Projects_hearthstone_redux_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, players[0], {
          field: [...players[0].field],
          hand: [...players[0].hand]
        }), Object(_Users_tmmm4_Desktop_Projects_hearthstone_redux_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, players[1], {
          field: [...players[1].field],
          hand: [...players[1].hand]
        })];
        temp[playerId].field[fieldId] = null;
        return Object(_Users_tmmm4_Desktop_Projects_hearthstone_redux_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          players: [...temp]
        });
      }

    case _types__WEBPACK_IMPORTED_MODULE_2__["SET_HEALTH_OF_HERO"]:
      {
        const players = state.players;
        const temp = [Object(_Users_tmmm4_Desktop_Projects_hearthstone_redux_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, players[0]), Object(_Users_tmmm4_Desktop_Projects_hearthstone_redux_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, players[1])];
        const _action$payload6 = action.payload,
              playerId = _action$payload6.playerId,
              newHealth = _action$payload6.newHealth;
        temp[playerId].health = newHealth;
        return Object(_Users_tmmm4_Desktop_Projects_hearthstone_redux_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          players: [...temp]
        });
      }

    case _types__WEBPACK_IMPORTED_MODULE_2__["SET_CHARGE_OF_MINION"]:
      {
        const players = state.players;
        const _action$payload7 = action.payload,
              playerId = _action$payload7.playerId,
              fieldId = _action$payload7.fieldId,
              charge = _action$payload7.charge;
        const temp = [Object(_Users_tmmm4_Desktop_Projects_hearthstone_redux_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, players[0], {
          field: [...players[0].field],
          hand: [...players[0].hand]
        }), Object(_Users_tmmm4_Desktop_Projects_hearthstone_redux_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, players[1], {
          field: [...players[1].field],
          hand: [...players[1].hand]
        })];
        temp[playerId].field[fieldId] = Object(_Users_tmmm4_Desktop_Projects_hearthstone_redux_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, temp[playerId].field[fieldId], {
          charge: charge
        });
        return Object(_Users_tmmm4_Desktop_Projects_hearthstone_redux_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          players: [...temp]
        });
      }

    case _types__WEBPACK_IMPORTED_MODULE_2__["DRAW_CARD"]:
      {
        const players = state.players;
        const _action$payload8 = action.payload,
              playerId = _action$payload8.playerId,
              quantity = _action$payload8.quantity;
        const temp = [Object(_Users_tmmm4_Desktop_Projects_hearthstone_redux_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, players[0], {
          deck: [...players[0].deck],
          hand: [...players[0].hand]
        }), Object(_Users_tmmm4_Desktop_Projects_hearthstone_redux_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, players[1], {
          deck: [...players[1].deck],
          hand: [...players[1].hand]
        })];

        for (let i = 0; i < quantity; i++) {
          if (temp[playerId].deck.length > i) {
            const card = temp[playerId].deck.pop();
            temp[playerId].hand = [...temp[playerId].hand, card];
          }
        }

        return Object(_Users_tmmm4_Desktop_Projects_hearthstone_redux_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          players: [...temp]
        });
      }

    case _types__WEBPACK_IMPORTED_MODULE_2__["SET_TAPPED"]:
      {
        const players = state.players;
        const _action$payload9 = action.payload,
              playerId = _action$payload9.playerId,
              value = _action$payload9.value;
        const temp = [Object(_Users_tmmm4_Desktop_Projects_hearthstone_redux_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, players[0], {
          deck: [...players[0].deck],
          hand: [...players[0].hand]
        }), Object(_Users_tmmm4_Desktop_Projects_hearthstone_redux_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, players[1], {
          deck: [...players[1].deck],
          hand: [...players[1].hand]
        })];
        temp[playerId].tapped = value;
        return Object(_Users_tmmm4_Desktop_Projects_hearthstone_redux_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          players: [...temp]
        });
      }

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./src/Redux/store.js":
/*!****************************!*\
  !*** ./src/Redux/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./src/Redux/reducer.js");


const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducer__WEBPACK_IMPORTED_MODULE_1__["default"], window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/Redux/types.js":
/*!****************************!*\
  !*** ./src/Redux/types.js ***!
  \****************************/
/*! exports provided: SET_HAND, SET_TURN, SET_TOTAL_MANA, SET_CURRENT_MANA, PLACE_CARD, SET_HEALTH_OF_MINION, REMOVE_MINION_FROM_FIELD, SET_HEALTH_OF_HERO, SET_CHARGE_OF_MINION, DRAW_CARD, SET_TAPPED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_HAND", function() { return SET_HAND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TURN", function() { return SET_TURN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TOTAL_MANA", function() { return SET_TOTAL_MANA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_MANA", function() { return SET_CURRENT_MANA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLACE_CARD", function() { return PLACE_CARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_HEALTH_OF_MINION", function() { return SET_HEALTH_OF_MINION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_MINION_FROM_FIELD", function() { return REMOVE_MINION_FROM_FIELD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_HEALTH_OF_HERO", function() { return SET_HEALTH_OF_HERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CHARGE_OF_MINION", function() { return SET_CHARGE_OF_MINION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRAW_CARD", function() { return DRAW_CARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TAPPED", function() { return SET_TAPPED; });
const SET_HAND = 'SET_HAND';
const SET_TURN = 'NEXT_TURN';
const SET_TOTAL_MANA = 'SET_TOTAL_MANA';
const SET_CURRENT_MANA = 'SET_CURRENT_MANA';
const PLACE_CARD = 'PLACE_CARD';
const SET_HEALTH_OF_MINION = 'SET_HEALTH_OF_MINION';
const REMOVE_MINION_FROM_FIELD = 'REMOVE_MINION_FROM_FIELD';
const SET_HEALTH_OF_HERO = 'SET_HEALTH_OF_HERO';
const SET_CHARGE_OF_MINION = 'SET_CHARGE_OF_MINION';
const DRAW_CARD = 'DRAW_CARD';
const SET_TAPPED = 'SET_TAPPED';

/***/ }),

/***/ "./src/dragAndDrop/onMouseDownHandler.js":
/*!***********************************************!*\
  !*** ./src/dragAndDrop/onMouseDownHandler.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const onMouseDownHandler = (e, board, dragging, players) => {
  e.preventDefault();

  if (e.target.dataset.identity) {
    dragging = {
      originIdentity: e.target.dataset.identity,
      originPlayerId: parseInt(e.target.dataset.playerid),
      originHandFieldId: parseInt(e.target.dataset.id),
      destination: null,
      destinationIdentity: null,
      destinationPlayerId: null,
      destinationHandFieldId: null
    };
    const _dragging = dragging,
          originIdentity = _dragging.originIdentity,
          originPlayerId = _dragging.originPlayerId,
          originHandFieldId = _dragging.originHandFieldId;
    console.log(originIdentity);

    switch (originIdentity) {
      case "hand":
        {
          dragging.dragOriginal = e.target;
          dragging.dragObject = e.target.cloneNode(false);
          dragging.xDiff = e.pageX - e.target.offsetLeft;
          dragging.yDiff = e.pageY - e.target.offsetTop;
          const _dragging2 = dragging,
                dragOriginal = _dragging2.dragOriginal,
                dragObject = _dragging2.dragObject;
          dragObject.id = "drag-object";
          dragObject.style.width = dragOriginal.clientWidth + "px";
          dragObject.style.height = dragOriginal.clientHeight + "px";
          return dragging;
        }

      case "field":
        {
          const dragObject = board.createElement("div");
          dragObject.classList.add("dot");
          dragObject.style.left = e.pageX + "px";
          dragObject.style.top = e.pageY + "px";
          dragging.dragObject = dragObject;
          dragObject.id = "drag-object";
          board.getElementById("board").appendChild(dragObject);
          return dragging;
        }

      case "hero-power":
        {
          dragging = {
            originIdentity: originIdentity,
            originPlayerId: originPlayerId,
            playerClass: players[originPlayerId].class
          };
          return dragging;
        }
    }
  }

  return dragging;
};

/* harmony default export */ __webpack_exports__["default"] = (onMouseDownHandler);

/***/ }),

/***/ "./src/dragAndDrop/onMouseMoveHandler.js":
/*!***********************************************!*\
  !*** ./src/dragAndDrop/onMouseMoveHandler.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _withinFieldHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withinFieldHandler */ "./src/dragAndDrop/withinFieldHandler.js");


const onMouseMoveHandler = (e, board, dragging, players) => {
  if (dragging) {
    const _dragging = dragging,
          originIdentity = _dragging.originIdentity,
          originPlayerId = _dragging.originPlayerId,
          originHandFieldId = _dragging.originHandFieldId;

    switch (originIdentity) {
      case "hand":
        {
          let _dragging2 = dragging,
              dragOriginal = _dragging2.dragOriginal,
              dragObject = _dragging2.dragObject,
              xDiff = _dragging2.xDiff,
              yDiff = _dragging2.yDiff;

          if (!board.getElementById("drag-object")) {
            dragOriginal.style.visibility = "hidden";
            board.getElementById("board").appendChild(dragObject);
          }

          dragObject.style.left = e.pageX - xDiff + "px";
          dragObject.style.top = e.pageY - yDiff + "px";
          dragging = colorizeFields(board, dragging, e, "lightblue");
          return dragging;
        }

      case "field":
        {
          dragging.dragObject.style.left = e.pageX + "px";
          dragging.dragObject.style.top = e.pageY + "px";
          dragging = colorizeFields(board, dragging, e, "rgb(250, 157, 157)");
          return dragging;
        }
    }
  }

  return dragging;
};

const colorizeFields = (board, dragging, e, color) => {
  const location = Object(_withinFieldHandler__WEBPACK_IMPORTED_MODULE_0__["default"])(e, board);

  if (location && !dragging.destination) {
    dragging.destination = location;
    dragging.destination.style.backgroundColor = color;
    dragging.destinationIdentity = dragging.destination.dataset.identity;
    dragging.destinationPlayerId = parseInt(dragging.destination.dataset.playerid);
    dragging.destinationHandFieldId = parseInt(dragging.destination.dataset.id);
  } else if (!location && dragging.destination) {
    dragging.destination.style.backgroundColor = null;
    dragging.destination = null;
  }

  return dragging;
}; // if (dragging) {
//   if (dragging.type === "fromHand") {
//     if (!board.getElementById("drag-object")) {
//       dragging.original.style.visibility = "hidden";
//       board.getElementById("board").appendChild(dragging.dragObject);
//     }
//     const drop = withinFieldHandler(e, board);
//     if (!lastLocation && drop) {
//       lastLocation = drop;
//       lastLocation.style.backgroundColor = "lightblue";
//     } else if (lastLocation !== drop) {
//       lastLocation.style.backgroundColor = null;
//       lastLocation = drop;
//       if (lastLocation) {
//         lastLocation.style.backgroundColor = "lightblue";
//       }
//     }
//     dragging.dragObject.style.left = e.pageX - dragging.xDiff + "px";
//     dragging.dragObject.style.top = e.pageY - dragging.yDiff + "px";
//   } else if (dragging.type === "fromField") {
//     const drop = withinFieldHandler(e, board);
//     dragging.dragObject.style.left = e.pageX + "px";
//     dragging.dragObject.style.top = e.pageY + "px";
//     if (!lastLocation && drop) {
//       if (
//         drop.dataset.hero ||
//         players[drop.dataset.playerid].field[drop.dataset.id]
//       ) {
//         dragging.hero = drop.dataset.hero ? true : false;
//         lastLocation = drop;
//         lastLocation.style.backgroundColor = "rgb(243, 191, 191)";
//       }
//     } else if (lastLocation && lastLocation !== drop) {
//       lastLocation.style.backgroundColor = null;
//       lastLocation = drop;
//       if (lastLocation) {
//         lastLocation.style.backgroundColor = "rgb(243, 191, 191)";
//       }
//     }
//   }
// } else {
//   if (board.getElementById("dragObject")) {
//     board.getElementById("board").removeChild(dragging.dragObject);
//   }
// }


/* harmony default export */ __webpack_exports__["default"] = (onMouseMoveHandler);

/***/ }),

/***/ "./src/dragAndDrop/onMouseUpHandler.js":
/*!*********************************************!*\
  !*** ./src/dragAndDrop/onMouseUpHandler.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const onMouseUpHandler = (board, dragging) => {
  if (dragging) {
    const originIdentity = dragging.originIdentity,
          originPlayerId = dragging.originPlayerId,
          originHandFieldId = dragging.originHandFieldId;

    switch (originIdentity) {
      case "hand":
        {
          const destination = dragging.destination,
                dragOriginal = dragging.dragOriginal,
                dragObject = dragging.dragObject;
          dragOriginal.style.visibility = null;

          if (destination) {
            destination.style.backgroundColor = null;
          }
        }

      case "field":
        {
          if (dragging.destination) {
            dragging.destination.style.backgroundColor = null;
          }
        }
    }

    if (board.getElementById("drag-object")) {
      board.getElementById('board').removeChild(dragging.dragObject);
    }

    return dragging;
  } else {
    return null;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (onMouseUpHandler);

/***/ }),

/***/ "./src/dragAndDrop/withinFieldHandler.js":
/*!***********************************************!*\
  !*** ./src/dragAndDrop/withinFieldHandler.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const withinFieldHandler = (e, board) => {
  const x = e.clientX;
  const y = e.clientY;
  const positions = [...board.querySelectorAll(".field-position"), ...board.querySelectorAll(".hero")];
  let field = null;
  positions.forEach(position => {
    const d = position.getBoundingClientRect();

    if (x >= d.left && x <= d.right && y >= d.top && y <= d.bottom) {
      field = position;
    }
  });
  return field;
};

/* harmony default export */ __webpack_exports__["default"] = (withinFieldHandler);

/***/ }),

/***/ "./src/gameplayHandlers/combatHandler.js":
/*!***********************************************!*\
  !*** ./src/gameplayHandlers/combatHandler.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Redux_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Redux/store */ "./src/Redux/store.js");
/* harmony import */ var _Redux_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Redux/actions */ "./src/Redux/actions.js");



const combatHandler = (originIdentity, originPlayerId, originHandFieldId, destinationIdentity, destinationPlayerId, destinationHandFieldId) => {
  const state = _Redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState();
  const players = state.players;
  let result = {
    success: null,
    message: null
  };
  console.log(originIdentity, originPlayerId, originHandFieldId, destinationIdentity, destinationPlayerId, destinationHandFieldId);

  if (state.currentTurn !== originPlayerId) {
    result = {
      success: false,
      message: "NOT YOUR TURN"
    };
    return result;
  }

  if (originPlayerId === destinationPlayerId) {
    result = {
      success: false,
      message: "CANNOT ATTACK YOURSELF"
    };
    return result;
  }

  if (originIdentity === "field") {
    if (!players[originPlayerId].field[originHandFieldId]) {
      result = {
        success: false,
        message: "NO TARGET FOUND"
      };
      return result;
    }

    if (!players[originPlayerId].field[originHandFieldId].charge) {
      result = {
        success: false,
        message: "MINION IS NOT READY TO ATTACK"
      };
      return result;
    }
  }

  if (originIdentity === "field" && destinationIdentity === "field") {
    if (!players[destinationPlayerId].field[destinationHandFieldId]) {
      result = {
        success: false,
        message: "NO TARGET FOUND"
      };
      return result;
    }

    const attackingMinion = players[originPlayerId].field[originHandFieldId];
    const defendingMinion = players[destinationPlayerId].field[destinationHandFieldId];
    const newAttackingHealth = attackingMinion.health - defendingMinion.attack;
    const newDefendingHealth = defendingMinion.health - attackingMinion.attack;
    _Redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(Object(_Redux_actions__WEBPACK_IMPORTED_MODULE_1__["setHealthOfMinion"])(originPlayerId, originHandFieldId, newAttackingHealth));
    _Redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(Object(_Redux_actions__WEBPACK_IMPORTED_MODULE_1__["setHealthOfMinion"])(destinationPlayerId, destinationHandFieldId, newDefendingHealth));
    _Redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(Object(_Redux_actions__WEBPACK_IMPORTED_MODULE_1__["setChargeOfMinion"])(originPlayerId, originHandFieldId, false));
  }

  if (originIdentity === "field" && destinationIdentity === "hero") {
    const attackingMinion = players[originPlayerId].field[originHandFieldId];
    const defendingHero = players[destinationPlayerId];
    const newDefendingHealth = defendingHero.health - attackingMinion.attack;
    _Redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(Object(_Redux_actions__WEBPACK_IMPORTED_MODULE_1__["setHealthOfHero"])(destinationPlayerId, newDefendingHealth));
    _Redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(Object(_Redux_actions__WEBPACK_IMPORTED_MODULE_1__["setChargeOfMinion"])(originPlayerId, originHandFieldId, false));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (combatHandler);

/***/ }),

/***/ "./src/gameplayHandlers/deadHandler.js":
/*!*********************************************!*\
  !*** ./src/gameplayHandlers/deadHandler.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Redux_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Redux/store */ "./src/Redux/store.js");
/* harmony import */ var _Redux_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Redux/actions */ "./src/Redux/actions.js");



const deadHandler = () => {
  const state = _Redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState();
  const players = state.players;
  players.forEach((player, playerId) => {
    if (player.health <= 0) {
      alert('PLAYER ' + player.id + ' LOST');
    }

    player.field.forEach((position, positionId) => {
      if (position) {
        if (position.health <= 0) {
          _Redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(Object(_Redux_actions__WEBPACK_IMPORTED_MODULE_1__["removeMinionFromField"])(playerId, positionId));
        }
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (deadHandler);

/***/ }),

/***/ "./src/gameplayHandlers/endTurnHandler.js":
/*!************************************************!*\
  !*** ./src/gameplayHandlers/endTurnHandler.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Redux_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Redux/store */ "./src/Redux/store.js");
/* harmony import */ var _Redux_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Redux/actions */ "./src/Redux/actions.js");
/* harmony import */ var _startTurnHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startTurnHandler */ "./src/gameplayHandlers/startTurnHandler.js");




const endTurnHandler = currentTurn => {
  console.log('ending turn');
  let newTurn;

  if (currentTurn === 0) {
    newTurn = 1;
  } else {
    newTurn = 0;
  }

  _Redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(Object(_Redux_actions__WEBPACK_IMPORTED_MODULE_1__["setTurn"])(newTurn));
  Object(_startTurnHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(newTurn);
};

/* harmony default export */ __webpack_exports__["default"] = (endTurnHandler);

/***/ }),

/***/ "./src/gameplayHandlers/heroPowerHandler.js":
/*!**************************************************!*\
  !*** ./src/gameplayHandlers/heroPowerHandler.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Redux_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Redux/store */ "./src/Redux/store.js");
/* harmony import */ var _Redux_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Redux/actions */ "./src/Redux/actions.js");



const heroPowerHandler = (playerId, playerClass) => {
  const state = _Redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState();
  const players = state.players;
  let result = {
    success: true,
    message: null
  };
  const currentMana = players[playerId].currentMana;
  const newMana = currentMana - 2;

  if (state.currentTurn !== playerId) {
    result = {
      success: false,
      message: "NOT YOUR TURN"
    };
    return result;
  }

  if (players[playerId].tapped) {
    result = {
      success: false,
      message: "ALREADY USED HERO POWER THIS TURN"
    };
    return result;
  }

  if (currentMana < 2) {
    result = {
      success: false,
      message: "INSUFFICIENT MANA"
    };
    return result;
  }

  switch (playerClass) {
    case 'Warlock':
      {
        const newHealth = players[playerId].health - 2;
        _Redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(Object(_Redux_actions__WEBPACK_IMPORTED_MODULE_1__["setHealthOfHero"])(playerId, newHealth));
        _Redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(Object(_Redux_actions__WEBPACK_IMPORTED_MODULE_1__["drawCard"])(playerId, 1));
      }
  }

  _Redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(Object(_Redux_actions__WEBPACK_IMPORTED_MODULE_1__["setTapped"])(playerId, true));
  _Redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(Object(_Redux_actions__WEBPACK_IMPORTED_MODULE_1__["setCurrentMana"])(playerId, newMana));
  return result;
};

/* harmony default export */ __webpack_exports__["default"] = (heroPowerHandler);

/***/ }),

/***/ "./src/gameplayHandlers/playCardHandler.js":
/*!*************************************************!*\
  !*** ./src/gameplayHandlers/playCardHandler.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Redux_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Redux/store */ "./src/Redux/store.js");
/* harmony import */ var _Redux_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Redux/actions */ "./src/Redux/actions.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_2__);




const playCardHandler = (originIdentity, originPlayerId, originHandFieldId, destinationIdentity, destinationPlayerId, destinationHandFieldId) => {
  const state = _Redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState();
  const players = state.players;
  let result = {
    success: null,
    message: null
  };

  if (state.currentTurn !== originPlayerId) {
    result = {
      success: false,
      message: "NOT YOUR TURN"
    };
    return result;
  }

  if (players[originPlayerId].hand[originHandFieldId].type === "Minion" && isNaN(destinationHandFieldId)) {
    result = {
      success: false,
      message: "MINIONS CAN ONLY BE PLAYED ON FIELD"
    };
    return result;
  }

  if (originPlayerId !== destinationPlayerId) {
    result = {
      success: false,
      message: "CANNOT PLAY MINION ON ENEMYS FIELD"
    };
    return result;
  }

  if (players[originPlayerId].field[destinationHandFieldId]) {
    result = {
      success: false,
      message: "POSITION IS ALREADY FILLED"
    };
    return result;
  }

  if (players[originPlayerId].currentMana < players[originPlayerId].hand[originHandFieldId].cost) {
    result = {
      success: false,
      message: "INSUFFICIENT MANA"
    };
    return result;
  }

  _Redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(Object(_Redux_actions__WEBPACK_IMPORTED_MODULE_1__["placeCard"])(originPlayerId, players[originPlayerId].hand[originHandFieldId].id, destinationHandFieldId, originHandFieldId));
  result.success = true;
};

/* harmony default export */ __webpack_exports__["default"] = (playCardHandler);

/***/ }),

/***/ "./src/gameplayHandlers/startTurnHandler.js":
/*!**************************************************!*\
  !*** ./src/gameplayHandlers/startTurnHandler.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Redux_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Redux/store */ "./src/Redux/store.js");
/* harmony import */ var _Redux_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Redux/actions */ "./src/Redux/actions.js");



const startTurnHandler = currentTurn => {
  const state = _Redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState();
  const players = state.players;
  const newTotalMana = players[currentTurn].totalMana + 1;

  if (newTotalMana <= 10) {
    _Redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(Object(_Redux_actions__WEBPACK_IMPORTED_MODULE_1__["setTotalMana"])(currentTurn, newTotalMana));
    _Redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(Object(_Redux_actions__WEBPACK_IMPORTED_MODULE_1__["setCurrentMana"])(currentTurn, newTotalMana));
  } else {
    _Redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(Object(_Redux_actions__WEBPACK_IMPORTED_MODULE_1__["setCurrentMana"])(currentTurn, 10));
  }

  _Redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(Object(_Redux_actions__WEBPACK_IMPORTED_MODULE_1__["setTapped"])(currentTurn, false));
  _Redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(Object(_Redux_actions__WEBPACK_IMPORTED_MODULE_1__["drawCard"])(currentTurn, 1));
  players[currentTurn].field.forEach((minion, fieldId) => {
    if (minion) {
      _Redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(Object(_Redux_actions__WEBPACK_IMPORTED_MODULE_1__["setChargeOfMinion"])(currentTurn, fieldId, true));
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (startTurnHandler);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Redux/store */ "./src/Redux/store.js");
var _jsxFileName = "/Users/tmmm4/Desktop/Projects/hearthstone-redux/src/index.js";







react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
  store: _Redux_store__WEBPACK_IMPORTED_MODULE_6__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/tmmm4/Desktop/Projects/hearthstone-redux/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/tmmm4/Desktop/Projects/hearthstone-redux/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map