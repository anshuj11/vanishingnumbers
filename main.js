/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./vanishing_nums.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./constants.js":
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst COLOR_ARR = [\n  \"#A3E4D7\",\n  \"#EBDEF0\",\n  \"#FCF3CF\",\n  \"#E5E7E9\",\n  \"#AEB6BF\",\n  \"#839192\",\n  \"#E6B0AA\",\n  \"#7FB3D5\",\n  \"#EDBB99\",\n  \"#D2B4DE\"\n];\n\nconst OPERATOR_ARR = [\"+\", \"-\", \"*\", \"/\"];\nconst BACKGROUND_COLOR = \"#EEE\";\nconst TEXT_COLOR = \"#FFFFFF\";\nconst EQN_COLOR = \"#000000\";\nconst PANEL_COLOR = \"#0F0E0F\";\nconst TEXT_FONT = \"30px Arial\";\nconst SQR_SIZE = 50;\nconst TOTAL_ROWS = 12;\nconst TOTAL_COLS = 16;\nconst MAX_ROW_NUM = 11;\nconst MAX_COL_NUM = 15;\nconst DELTA = 5;\nconst ORIGIN_X = 100;\nconst ORIGIN_Y = 100;\nconst MAX_X = ORIGIN_X + 800;\nconst MAX_Y = ORIGIN_Y + 600;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  COLOR_ARR,\n  OPERATOR_ARR,\n  BACKGROUND_COLOR,\n  TEXT_COLOR,\n  EQN_COLOR,\n  PANEL_COLOR,\n  TEXT_FONT,\n  SQR_SIZE,\n  TOTAL_ROWS,\n  TOTAL_COLS,\n  MAX_ROW_NUM,\n  MAX_COL_NUM,\n  DELTA,\n  ORIGIN_X,\n  ORIGIN_Y,\n  MAX_X,\n  MAX_Y\n});\n\n\n//# sourceURL=webpack:///./constants.js?");

/***/ }),

/***/ "./drawing.js":
/*!********************!*\
  !*** ./drawing.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ \"./constants.js\");\n\nconst { BACKGROUND_COLOR } = _constants_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\nconst draw_rect = function(x, y, width, height, color = BACKGROUND_COLOR) {\n  let canvas = document.getElementById(\"myCanvas\");\n  let ctx = canvas.getContext(\"2d\");\n  ctx.beginPath();\n  ctx.rect(x, y, width, height);\n  ctx.fillStyle = color;\n  ctx.fill();\n};\n\nconst draw_triangle = function() {\n  let canvas = document.getElementById(\"myCanvas\");\n  let ctx = canvas.getContext(\"2d\");\n  ctx.beginPath();\n  ctx.fillStyle = \"#FF0000\";\n  ctx.moveTo(830, 100);\n  ctx.lineTo(830, 180);\n  ctx.lineTo(865, 140);\n  ctx.fill();\n  ctx.closePath();\n};\n\nconst draw_circle = function() {\n  var canvas = document.getElementById(\"myCanvas\");\n  var ctx = canvas.getContext(\"2d\");\n  ctx.beginPath();\n  ctx.fillStyle = \"#FF0000\";\n  ctx.arc(850, 300, 25, 0, 2 * Math.PI);\n  ctx.fill();\n  ctx.stroke();\n  ctx.closePath();\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({ draw_rect, draw_triangle, draw_circle });\n\n\n//# sourceURL=webpack:///./drawing.js?");

/***/ }),

/***/ "./equations.js":
/*!**********************!*\
  !*** ./equations.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ \"./constants.js\");\n/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility.js */ \"./utility.js\");\n/* harmony import */ var _drawing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawing */ \"./drawing.js\");\n\n\n\n\nconst { EQN_COLOR, OPERATOR_ARR, TEXT_FONT } = _constants_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nconst { randomIn10, randomIn100 } = _utility_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nconst { draw_rect } = _drawing__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n\nconst generateEquations = function() {\n  draw_rect(350, 0, 150, 100);\n\n  let op1 = randomIn10();\n  let op2 = randomIn10();\n\n  let operator = OPERATOR_ARR[randomIn100() % 4];\n  let canvas = document.getElementById(\"myCanvas\");\n  let ctx = canvas.getContext(\"2d\");\n  ctx.fillStyle = EQN_COLOR;\n  ctx.font = TEXT_FONT;\n  ctx.fillText(`${op1} ${operator} ${op2} = ?`, 350, 30);\n\n  switch (operator) {\n    case \"+\":\n      return op1 + op2 > 9 ? generateEquations() : op1 + op2;\n    case \"-\":\n      return op1 < op2 ? generateEquations() : op1 - op2;\n    case \"*\":\n      return op1 * op2 > 9 ? generateEquations() : op1 * op2;\n    case \"/\":\n      return op2 == 0 ? generateEquations() : Math.floor(op1 / op2);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({ generateEquations });\n\n\n//# sourceURL=webpack:///./equations.js?");

/***/ }),

/***/ "./utility.js":
/*!********************!*\
  !*** ./utility.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ \"./constants.js\");\n\nconst { SQR_SIZE } = _constants_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\nconst randomIn10 = function() {\n  return Math.floor(Math.random() * 10);\n};\n\nconst randomIn100 = function() {\n  return Math.floor(Math.random() * 100);\n};\n\nconst findOrigin = function(num) {\n  //find the highest closest multiple of 50 thats less than this num\n  return num - (num % SQR_SIZE);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({ randomIn10, randomIn100, findOrigin });\n\n\n//# sourceURL=webpack:///./utility.js?");

/***/ }),

/***/ "./vanishing_nums.js":
/*!***************************!*\
  !*** ./vanishing_nums.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ \"./constants.js\");\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility */ \"./utility.js\");\n/* harmony import */ var _equations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equations */ \"./equations.js\");\n/* harmony import */ var _drawing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drawing */ \"./drawing.js\");\n\nconst {\n  COLOR_ARR,\n  OPERATOR_ARR,\n  BACKGROUND_COLOR,\n  TEXT_COLOR,\n  EQN_COLOR,\n  PANEL_COLOR,\n  TEXT_FONT,\n  SQR_SIZE,\n  TOTAL_ROWS,\n  TOTAL_COLS,\n  MAX_ROW_NUM,\n  MAX_COL_NUM,\n  DELTA,\n  ORIGIN_X,\n  ORIGIN_Y,\n  MAX_X,\n  MAX_Y\n} = _constants_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n\nconst { randomIn10, randomIn100, findOrigin } = _utility__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\n\nconst { generateEquations } = _equations__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n\n\nconst { draw_rect, draw_triangle, draw_circle } = _drawing__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n\nvar canvas = document.getElementById(\"myCanvas\");\nvar ctx = canvas.getContext(\"2d\");\nvar paused = 1; //For play Pause button\n\nconst draw_sqr = function(x, y, size = SQR_SIZE, fillColor = BACKGROUND_COLOR) {\n  ctx.beginPath();\n  ctx.rect(x, y, size, size);\n  ctx.fillStyle = fillColor;\n  ctx.fill();\n};\n\nconst draw_text_in_sqr = function(txt, locX, locY, color = TEXT_COLOR) {\n  ctx.fillStyle = color;\n  ctx.font = TEXT_FONT;\n  ctx.fillText(txt, locX, locY);\n};\n\nvar i = 0;\nvar j = 0;\nvar op1 = 0;\nvar op2 = 0;\nvar operator = \"+\";\nvar height_arr = [];\nvar myVar = 0;\nfor (let m = 0; m < TOTAL_COLS; m++) {\n  height_arr[m] = 600;\n}\nvar column = [];\nfor (let n = 0; n < TOTAL_COLS; n++) {\n  column[n] = [];\n}\nvar color_choice = COLOR_ARR[randomIn10()];\nvar txt = parseInt(randomIn10(), 10);\nvar res = generateEquations();\nconst draw = function() {\n  //Delete the old square\n  draw_sqr(i, j - DELTA); //default is background color\n\n  //Redraw the square at the new position\n  draw_sqr(i, j, SQR_SIZE, color_choice);\n\n  //Write the num inside the square\n  draw_text_in_sqr(txt, i + 10, j + 25);\n\n  let col = i / SQR_SIZE;\n  if (j == height_arr[col] - SQR_SIZE) {\n    //console.log(\"J: \", j);\n    height_arr[col] -= SQR_SIZE;\n    column[col].push([txt, color_choice]); //This 3D array has value, color of each cell\n\n    //pick another column randomly for next square\n    i = (randomIn100() % TOTAL_COLS) * SQR_SIZE;\n    j = 50;\n    color_choice = COLOR_ARR[randomIn10()]; //pick a random color from COLOR_ARR\n    txt = parseInt(randomIn10(), 10); //pick a random num between 0 - 9\n  }\n  if (j > height_arr[col] - SQR_SIZE) {\n    draw_text_in_sqr(\"GAME OVER!\", MAX_X / 2 - 100, MAX_Y / 2, \"#FF0000\");\n    clearInterval(myVar);\n  }\n\n  j += DELTA;\n};\n\ncanvas.addEventListener(\n  \"click\",\n  function(e) {\n    let x = e.clientX;\n    let y = e.clientY;\n    //We hit the play button\n    if (x > 930 && x < 965 && y >= 200 && y < 280) {\n      if (paused) {\n        //repaint the panel\n        draw_rect(800, 0, 100, 600, PANEL_COLOR);\n        //Change play to pause button\n        draw_rect(840, 100, 5, 50, BACKGROUND_COLOR); //, \"#FF0000\");\n        draw_rect(860, 100, 5, 50, BACKGROUND_COLOR); //, \"#FF0000\");\n        draw_circle();\n        myVar = setInterval(draw, 2);\n        paused = 0;\n      } else {\n        draw_rect(800, 0, 100, 600, PANEL_COLOR);\n        draw_triangle();\n        draw_circle();\n        clearInterval(myVar);\n        paused = 1;\n      }\n    } else if (x > 920 && x < 980 && y >= 300 && y < 420) {\n      draw_rect(0, 0, 800, 600);\n      for (let m = 0; m < TOTAL_COLS; m++) {\n        height_arr[m] = 600;\n      }\n      for (let n = 0; n < TOTAL_COLS; n++) {\n        column[n] = [];\n      }\n      draw_rect(800, 0, 100, 600, PANEL_COLOR);\n      draw_triangle();\n      draw_circle();\n      clearInterval(myVar);\n      res = generateEquations();\n      paused = 1;\n    } else {\n      let x = findOrigin(e.clientX);\n      let y = findOrigin(e.clientY);\n      x -= ORIGIN_X;\n      y -= ORIGIN_Y;\n      let col = x / SQR_SIZE;\n      let row = MAX_ROW_NUM - y / SQR_SIZE; //rows start at 0 on top\n      if (column[col][row][0] == parseInt(res, 10)) {\n        column[col] = column[col]\n          .slice(0, row)\n          .concat(column[col].slice(row + 1));\n\n        column[col].forEach((sqr, ind) => {\n          draw_sqr(col * SQR_SIZE, 550 - ind * SQR_SIZE, SQR_SIZE, sqr[1]);\n          draw_text_in_sqr(\n            sqr[0],\n            col * SQR_SIZE + 10,\n            550 - ind * SQR_SIZE + 25\n          );\n        });\n        //Draw a square with background color to delete the topmost sqr on the stack\n        let new_rows = column[col].length;\n        draw_sqr(col * SQR_SIZE, 550 - new_rows * SQR_SIZE);\n        height_arr[col] += SQR_SIZE; //Adds margin for another square in height_arr\n        res = generateEquations();\n      }\n    }\n  },\n  false\n);\ndraw_rect(800, 0, 100, 600, PANEL_COLOR);\ndraw_triangle();\ndraw_circle();\n//var myVar = setInterval(draw, 2);\n\n\n//# sourceURL=webpack:///./vanishing_nums.js?");

/***/ })

/******/ });