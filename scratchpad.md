        //ctx.clearRect(0, 0, canvas.width, canvas.height);

const confetti = function(x, y) {
for (i = 0; i < 50; i += 10) {
if (i > 0) {
draw_sqr(x + i _ 10 - 10, y, 10);
draw_sqr(x - i _ 10 - 10, y, 10);
draw_sqr(x, y + i _ 10 - 10, 10);
draw_sqr(x, y - i _ 10 - 10, 10);
}
draw_sqr(x + i _ 10, y, 10, "#FF0000");
draw_sqr(x - i _ 10, y, 10, "#FF0000");
draw_sqr(x, y + i _ 10, 10, "#FF0000");
draw_sqr(x, y - i _ 10, 10, "#FF0000");
setTimeout(1000);
}
};
