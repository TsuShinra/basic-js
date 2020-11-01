const CustomError = require("../extensions/custom-error");

const chainMaker = {
  startChain: [],
  getLength() {
    return this.startChain.length;
  },
  addLink(value) {
    if (arguments.length === 0) {
      this.startChain.push(" ");
    }
    this.startChain.push(value);
    return this;
  },
  removeLink(position) {
    if (
      this.startChain[position - 1] === undefined ||
      typeof position !== "number"
    ) {
      this.startChain = [];
      throw new Error();
    } else {
      this.startChain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.startChain.reverse();
    return this;
  },
  finishChain() {
    let result = this.startChain.reduce((acm, elem, ind) => {
      if (ind === 0) {
        acm += `( ${elem} )`;
        return acm;
      } else {
        acm += `~~( ${elem} )`;
        return acm;
      }
    }, "");
    this.startChain = [];
    return result;
  }
};

module.exports = chainMaker;
