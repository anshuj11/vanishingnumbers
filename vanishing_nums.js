const COLOR_ARR = [
  "#A3E4D7",
  "#EBDEF0",
  "#FCF3CF",
  "#E5E7E9",
  "#AEB6BF",
  "#839192",
  "#E6B0AA",
  "#7FB3D5",
  "#EDBB99",
  "#D2B4DE"
];
const OPERATOR_ARR = ["+", "-", "*", "/"];
const BACKGROUND_COLOR = "#EEE";
const TEXT_COLOR = "#FFFFFF";
const EQN_COLOR = "#000000";
const TEXT_FONT = "30px Arial";
const SQR_SIZE = 50;
const TOTAL_ROWS = 12;
const TOTAL_COLS = 16;
const MAX_ROW_NUM = 11;
const MAX_COL_NUM = 15;
const DELTA = 5;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

const draw_sqr = function(x, y, size = SQR_SIZE, fillColor = BACKGROUND_COLOR) {
  ctx.beginPath();
  ctx.rect(x, y, size, size);
  ctx.fillStyle = fillColor;
  ctx.fill();
};

const randomIn10 = function() {
  return Math.floor(Math.random() * 10);
};

const randomIn100 = function() {
  return Math.floor(Math.random() * 100);
};
const findOrigin = function(num) {
  //find the highest closest multiple of 50 thats less than this num
  return num - (num % 50);
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

const draw = function() {
  //Delete the old square
  draw_sqr(i, j - DELTA); //default is background color

  //Redraw the square at the new position
  draw_sqr(i, j, SQR_SIZE, color_choice);

  ctx.fillStyle = TEXT_COLOR;
  ctx.font = TEXT_FONT;
  ctx.fillText(txt, i + 10, j + 25);

  if (j == height_arr[i / SQR_SIZE] - SQR_SIZE) {
    height_arr[i / SQR_SIZE] -= SQR_SIZE;
    column[i / SQR_SIZE].push([txt, color_choice]);
    i = (randomIn100() % TOTAL_COLS) * SQR_SIZE;
    j = 50;
    let color_ind = randomIn10();
    color_choice = COLOR_ARR[color_ind];
    txt = parseInt(randomIn10(), 10);
  }
  j += DELTA;
};

const generateEquations = function() {
  ctx.fillStyle = BACKGROUND_COLOR;
  ctx.fillText(`${op1} ${operator} ${op2} = ?`, 250, 30);
  op1 = randomIn10();
  op2 = randomIn10();
  ctx.fillStyle = EQN_COLOR;
  operator = OPERATOR_ARR[randomIn100() % 4];
  ctx.fillText(`${op1} ${operator} ${op2} = ?`, 250, 30);
  switch (operator) {
    case "+":
      return op1 + op2;
    case "-":
      return op1 - op2;
    case "*":
      return op1 * op2;
    case "/":
      return Math.floor(op1 / op2);
  }
};

canvas.addEventListener(
  "click",
  function(e) {
    x = findOrigin(e.clientX);
    y = findOrigin(e.clientY);
    col = x / SQR_SIZE;
    row = MAX_ROW_NUM - y / SQR_SIZE;

    column[col] = column[col].slice(0, row).concat(column[col].slice(row + 1));

    column[col].forEach((sqr, ind) => {
      draw_sqr(col * SQR_SIZE, 550 - ind * SQR_SIZE, SQR_SIZE, sqr[1]);
      ctx.fillStyle = TEXT_COLOR;
      ctx.fillText(sqr[0], col * SQR_SIZE + 10, 550 - ind * SQR_SIZE + 25);
    });

    new_rows = column[col].length;
    draw_sqr(col * SQR_SIZE, 550 - new_rows * SQR_SIZE);
    height_arr[col] += SQR_SIZE;
  },
  false
);

setInterval(draw, 10);
console.log(setInterval(generateEquations, 2000));
