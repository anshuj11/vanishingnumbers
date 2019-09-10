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
eval("__webpack_require__.r(__webpack_exports__);\nconst COLOR_ARR = [\n  \"#A3E4D7\",\n  \"#EBDEF0\",\n  \"#FCF3CF\",\n  \"#E5E7E9\",\n  \"#AEB6BF\",\n  \"#839192\",\n  \"#E6B0AA\",\n  \"#7FB3D5\",\n  \"#EDBB99\",\n  \"#D2B4DE\"\n];\n\nconst OPERATOR_ARR = [\"+\", \"-\", \"*\", \"/\"];\nconst BACKGROUND_COLOR = \"#EEE\";\nconst TEXT_COLOR = \"#FFFFFF\";\nconst EQN_COLOR = \"#000000\";\nconst TEXT_FONT = \"30px Arial\";\nconst SQR_SIZE = 50;\nconst TOTAL_ROWS = 12;\nconst TOTAL_COLS = 16;\nconst MAX_ROW_NUM = 11;\nconst MAX_COL_NUM = 15;\nconst DELTA = 5;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  COLOR_ARR,\n  OPERATOR_ARR,\n  BACKGROUND_COLOR,\n  TEXT_COLOR,\n  EQN_COLOR,\n  TEXT_FONT,\n  SQR_SIZE,\n  TOTAL_ROWS,\n  TOTAL_COLS,\n  MAX_ROW_NUM,\n  MAX_COL_NUM,\n  DELTA\n});\n\n\n//# sourceURL=webpack:///./constants.js?");

/***/ }),

/***/ "./vanishing_nums.js":
/*!***************************!*\
  !*** ./vanishing_nums.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ \"./constants.js\");\n\nconst {\n  COLOR_ARR,\n  OPERATOR_ARR,\n  BACKGROUND_COLOR,\n  TEXT_COLOR,\n  EQN_COLOR,\n  TEXT_FONT,\n  SQR_SIZE,\n  TOTAL_ROWS,\n  TOTAL_COLS,\n  MAX_ROW_NUM,\n  MAX_COL_NUM,\n  DELTA\n} = _constants_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n// import utils from \"./utility\";\n// const { randomIn10, randomIn100 } = utils;\n\nconst randomIn10 = function() {\n  return Math.floor(Math.random() * 10);\n};\n\nconst randomIn100 = function() {\n  return Math.floor(Math.random() * 100);\n};\n\nvar canvas = document.getElementById(\"myCanvas\");\nvar ctx = canvas.getContext(\"2d\");\n\nconst draw_sqr = function(x, y, size = SQR_SIZE, fillColor = BACKGROUND_COLOR) {\n  ctx.beginPath();\n  ctx.rect(x, y, size, size);\n  ctx.fillStyle = fillColor;\n  ctx.fill();\n};\n\nconst findOrigin = function(num) {\n  //find the highest closest multiple of 50 thats less than this num\n  return num - (num % SQR_SIZE);\n};\n\nvar i = 0;\nvar j = 0;\nvar op1 = 0;\nvar op2 = 0;\nvar operator = \"+\";\nvar height_arr = [];\nfor (let m = 0; m < TOTAL_COLS; m++) {\n  height_arr[m] = 600;\n}\nvar column = [];\nfor (let n = 0; n < TOTAL_COLS; n++) {\n  column[n] = [];\n}\nvar color_choice = COLOR_ARR[randomIn10()];\nvar txt = parseInt(randomIn10(), 10);\n\nconst draw = function() {\n  //Delete the old square\n  draw_sqr(i, j - DELTA); //default is background color\n\n  //Redraw the square at the new position\n  draw_sqr(i, j, SQR_SIZE, color_choice);\n\n  ctx.fillStyle = TEXT_COLOR;\n  ctx.font = TEXT_FONT;\n  ctx.fillText(txt, i + 10, j + 25);\n\n  if (j == height_arr[i / SQR_SIZE] - SQR_SIZE) {\n    height_arr[i / SQR_SIZE] -= SQR_SIZE;\n    column[i / SQR_SIZE].push([txt, color_choice]);\n    i = (randomIn100() % 16) * SQR_SIZE;\n    j = 50;\n    let color_ind = randomIn10();\n    color_choice = COLOR_ARR[color_ind];\n    txt = parseInt(randomIn10(), 10);\n  }\n  j += DELTA;\n};\n\nconst generateEquations = function() {\n  ctx.fillStyle = BACKGROUND_COLOR;\n  ctx.fillText(`${op1} ${operator} ${op2} = ?`, 250, 30);\n  op1 = randomIn10();\n  op2 = randomIn10();\n  ctx.fillStyle = EQN_COLOR;\n  operator = OPERATOR_ARR[randomIn100() % 4];\n  ctx.fillText(`${op1} ${operator} ${op2} = ?`, 250, 30);\n  switch (operator) {\n    case \"+\":\n      return op1 + op2;\n    case \"-\":\n      return op1 - op2;\n    case \"*\":\n      return op1 * op2;\n    case \"/\":\n      return Math.floor(op1 / op2);\n  }\n};\n\ncanvas.addEventListener(\n  \"click\",\n  function(e) {\n    let x = findOrigin(e.clientX);\n    let y = findOrigin(e.clientY);\n    let col = x / SQR_SIZE;\n    let row = MAX_ROW_NUM - y / SQR_SIZE;\n\n    column[col] = column[col].slice(0, row).concat(column[col].slice(row + 1));\n\n    column[col].forEach((sqr, ind) => {\n      draw_sqr(col * SQR_SIZE, 550 - ind * SQR_SIZE, SQR_SIZE, sqr[1]);\n      ctx.fillStyle = TEXT_COLOR;\n      ctx.fillText(sqr[0], col * SQR_SIZE + 10, 550 - ind * SQR_SIZE + 25);\n    });\n\n    let new_rows = column[col].length;\n    draw_sqr(col * SQR_SIZE, 550 - new_rows * SQR_SIZE);\n    height_arr[col] += SQR_SIZE;\n  },\n  false\n);\n\nsetInterval(draw, 10);\nconsole.log(setInterval(generateEquations, 2000));\n\n\n//# sourceURL=webpack:///./vanishing_nums.js?");

/***/ })

/******/ });