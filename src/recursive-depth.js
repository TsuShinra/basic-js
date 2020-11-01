const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
  } 
  calculateDepth(arr) {
    let depth = 1;
    let counter = 1;
    for (let part of arr) {
      if (Array.isArray(part)) {
        counter = this.calculateDepth(part) + 1;
      }
      if (counter > depth) {
        depth = counter;
      }
      counter = 1;
    } return depth;
  }

  
}