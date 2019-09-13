import Const from "./constants.js";
import Util from "./utility.js";
import Drawings from "./drawing";

const { EQN_COLOR, OPERATOR_ARR, TEXT_FONT } = Const;
const { randomIn10, randomIn100 } = Util;
const { draw_rect } = Drawings;

const generateEquations = function(score) {
  draw_rect(350, 0, 400, 100);

  let op1 = randomIn10();
  let op2 = randomIn10();

  let operator = OPERATOR_ARR[randomIn100() % 4];
  let canvas = document.getElementById("myCanvas");
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = EQN_COLOR;
  ctx.font = TEXT_FONT;
  ctx.fillText(`${op1} ${operator} ${op2} = ? | SCORE: ${score}`, 350, 30);

  switch (operator) {
    case "+":
      return op1 + op2 > 9 ? generateEquations(score) : op1 + op2;
    case "-":
      return op1 < op2 ? generateEquations(score) : op1 - op2;
    case "*":
      return op1 * op2 > 9 ? generateEquations(score) : op1 * op2;
    case "/":
      return op2 == 0 ? generateEquations(score) : Math.floor(op1 / op2);
  }
};

export default { generateEquations };
