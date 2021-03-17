const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return Array.isArray(arr) ? ( arr.length != 0 ? 1+Math.max(...arr.map(t=>this.calculateDepth(t))): 1) : 0
  }
};