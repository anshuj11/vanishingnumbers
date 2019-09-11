import Const from "./constants.js";
const {
  COLOR_ARR,
  OPERATOR_ARR,
  BACKGROUND_COLOR,
  TEXT_COLOR,
  EQN_COLOR,
  TEXT_FONT,
  SQR_SIZE,
  TOTAL_ROWS,
  TOTAL_COLS,
  MAX_ROW_NUM,
  MAX_COL_NUM,
  DELTA
} = Const;

import Utils from "./utility";
const { randomIn10, randomIn100, findOrigin } = Utils;

import Equations from "./equations";
const { generateEquations } = Equations;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

const draw_sqr = function(x, y, size = SQR_SIZE, fillColor = BACKGROUND_COLOR) {
  ctx.beginPath();
  ctx.rect(x, y, size, size);
  ctx.fillStyle = fillColor;
  ctx.fill();
};

const draw_text_in_sqr = function(txt, locX, locY) {
  ctx.fillStyle = TEXT_COLOR;
  ctx.font = TEXT_FONT;
  ctx.fillText(txt, locX, locY);
};

var i = 0;
var j = 0;
var op1 = 0;
var op2 = 0;
var operator = "+";
var height_arr = [];
for (let m = 0; m < TOTAL_COLS; m++) {
  height_arr[m] = 600;
}
var column = [];
for (let n = 0; n < TOTAL_COLS; n++) {
  column[n] = [];
}
var color_choice = COLOR_ARR[randomIn10()];
var txt = parseInt(randomIn10(), 10);
var res = generateEquations();
const draw = function() {
  //Delete the old square
  draw_sqr(i, j - DELTA); //default is background color

  //Redraw the square at the new position
  draw_sqr(i, j, SQR_SIZE, color_choice);

  //Write the num inside the square
  draw_text_in_sqr(txt, i + 10, j + 25);

  let col = i / SQR_SIZE;
  if (j == height_arr[col] - SQR_SIZE) {
    height_arr[col] -= SQR_SIZE;
    column[col].push([txt, color_choice]); //This 3D array has value, color of each cell

    //pick another column randomly for next square
    i = (randomIn100() % TOTAL_COLS) * SQR_SIZE;
    j = 50;
    color_choice = COLOR_ARR[randomIn10()]; //pick a random color from COLOR_ARR
    txt = parseInt(randomIn10(), 10); //pick a random num between 0 - 9
  }
  j += DELTA;
};

canvas.addEventListener(
  "click",
  function(e) {
    let x = findOrigin(e.clientX);
    let y = findOrigin(e.clientY);
    let col = x / SQR_SIZE;
    let row = MAX_ROW_NUM - y / SQR_SIZE; //rows start at 0 on top
    if (column[col][row][0] == parseInt(res, 10)) {
      column[col] = column[col]
        .slice(0, row)
        .concat(column[col].slice(row + 1));

      column[col].forEach((sqr, ind) => {
        draw_sqr(col * SQR_SIZE, 550 - ind * SQR_SIZE, SQR_SIZE, sqr[1]);
        draw_text_in_sqr(
          sqr[0],
          col * SQR_SIZE + 10,
          550 - ind * SQR_SIZE + 25
        );
      });
      //Draw a square with background color to delete the topmost sqr on the stack
      let new_rows = column[col].length;
      draw_sqr(col * SQR_SIZE, 550 - new_rows * SQR_SIZE);
      height_arr[col] += SQR_SIZE; //Adds margin for another square in height_arr
      res = generateEquations();
    }
  },
  false
);

setInterval(draw, 10);
