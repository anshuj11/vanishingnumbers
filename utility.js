import Const from "./constants.js";
const { SQR_SIZE } = Const;

const randomIn10 = function() {
  return Math.floor(Math.random() * 10);
};

const randomIn100 = function() {
  return Math.floor(Math.random() * 100);
};

const findOrigin = function(num) {
  //find the highest closest multiple of 50 thats less than this num
  return num - (num % SQR_SIZE);
};

export default { randomIn10, randomIn100, findOrigin };
