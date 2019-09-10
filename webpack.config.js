const path = require("path");

module.exports = {
  entry: "./vanishing_nums.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, ".")
  }
};
