import Const from "./constants.js";
const { BACKGROUND_COLOR } = Const;

const draw_rect = function(x, y, width, height) {
  let canvas = document.getElementById("myCanvas");
  let ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.rect(x, y, width, height);
  ctx.fillStyle = BACKGROUND_COLOR;
  ctx.fill();
};

const draw_triangle = function () {
    ctx.beginPath();
    ctx.fillStyle = "#FF0000";
    ctx.moveTo(200, 200);
    ctx.lineTo(200, 500);
    ctx.lineTo(350, 350);
    ctx.fill();
    ctx.closePath();
}
export default { draw_rect };
