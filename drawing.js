import Const from "./constants.js";
const { BACKGROUND_COLOR } = Const;

const draw_rect = function(x, y, width, height, color = BACKGROUND_COLOR) {
  let canvas = document.getElementById("myCanvas");
  let ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.rect(x, y, width, height);
  ctx.fillStyle = color;
  ctx.fill();
};

const draw_triangle = function() {
  let canvas = document.getElementById("myCanvas");
  let ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.fillStyle = "#FF0000";
  ctx.moveTo(830, 100);
  ctx.lineTo(830, 180);
  ctx.lineTo(865, 140);
  ctx.fill();
  ctx.closePath();
};

const draw_circle = function() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.fillStyle = "#FF0000";
  ctx.arc(850, 300, 25, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
};
export default { draw_rect, draw_triangle, draw_circle };
