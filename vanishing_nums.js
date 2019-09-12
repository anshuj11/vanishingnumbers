import Const from "./constants.js";
const {
  COLOR_ARR,
  OPERATOR_ARR,
  BACKGROUND_COLOR,
  TEXT_COLOR,
  EQN_COLOR,
  PANEL_COLOR,
  TEXT_FONT,
  SQR_SIZE,
  TOTAL_ROWS,
  TOTAL_COLS,
  MAX_ROW_NUM,
  MAX_COL_NUM,
  DELTA,
  ORIGIN_X,
  ORIGIN_Y,
  MAX_X,
  MAX_Y
} = Const;

import Utils from "./utility";
const { randomIn10, randomIn100, findOrigin } = Utils;

import Equations from "./equations";
const { generateEquations } = Equations;

import Drawings from "./drawing";
const { draw_rect, draw_triangle, draw_circle } = Drawings;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var paused = 1; //For play Pause button

const draw_sqr = function(x, y, size = SQR_SIZE, fillColor = BACKGROUND_COLOR) {
  ctx.beginPath();
  ctx.rect(x, y, size, size);
  ctx.fillStyle = fillColor;
  ctx.fill();
};

const draw_text_in_sqr = function(txt, locX, locY, color = TEXT_COLOR) {
  ctx.fillStyle = color;
  ctx.font = TEXT_FONT;
  ctx.fillText(txt, locX, locY);
};

var i = 0;
var j = 0;
var op1 = 0;
var op2 = 0;
var operator = "+";
var height_arr = [];
var myVar = 0;
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
    //console.log("J: ", j);
    height_arr[col] -= SQR_SIZE;
    column[col].push([txt, color_choice]); //This 3D array has value, color of each cell

    //pick another column randomly for next square
    i = (randomIn100() % TOTAL_COLS) * SQR_SIZE;
    j = 50;
    color_choice = COLOR_ARR[randomIn10()]; //pick a random color from COLOR_ARR
    txt = parseInt(randomIn10(), 10); //pick a random num between 0 - 9
  }
  if (j > height_arr[col] - SQR_SIZE) {
    console.log("GAME OVER!");
    draw_text_in_sqr("GAME OVER!", MAX_X / 2 - 100, MAX_Y / 2, "#FF0000");
    clearInterval(myVar);
  }

  // console.log(
  //   "New j: ",
  //   j,
  //   "i: ",
  //   i,
  //   "col",
  //   col,
  //   "height_arr[",
  //   col,
  //   "]: ",
  //   height_arr[col]
  // );
  j += DELTA;
};

canvas.addEventListener(
  "click",
  function(e) {
    let x = e.clientX;
    let y = e.clientY;
    console.log("x: ", x, "y: ", y);
    //We hit the play button
    if (x > 930 && x < 965 && y >= 200 && y < 280) {
      if (paused) {
        //repaint the panel
        draw_rect(800, 0, 100, 600, PANEL_COLOR);
        //Change play to pause button
        draw_rect(840, 100, 5, 50, BACKGROUND_COLOR); //, "#FF0000");
        draw_rect(860, 100, 5, 50, BACKGROUND_COLOR); //, "#FF0000");
        myVar = setInterval(draw, 2);
        paused = 0;
      } else {
        draw_rect(800, 0, 100, 600, PANEL_COLOR);
        draw_triangle();
        clearInterval(myVar);
        paused = 1;
      }
    } else {
      let x = findOrigin(e.clientX);
      let y = findOrigin(e.clientY);
      x -= ORIGIN_X;
      y -= ORIGIN_Y;
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
    }
  },
  false
);
draw_rect(800, 0, 100, 600, PANEL_COLOR);
draw_triangle();
draw_circle();
//var myVar = setInterval(draw, 2);
