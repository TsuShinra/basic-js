"use strict";

var CustomError = require("../extensions/custom-error");

var chainMaker = {
  startChain: [],
  getLength: function getLength() {
    return this.startChain.length;
  },
  addLink: function addLink(value) {
    if (arguments.length === 0) {
      this.startChain.push(" ");
    }

    this.startChain.push(value);
    return this;
  },
  removeLink: function removeLink(position) {
    if (this.startChain[position - 1] === undefined || typeof position !== "number") {
      this.startChain = [];
      throw new Error();
    } else {
      this.startChain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain: function reverseChain() {
    this.startChain.reverse();
    return this;
  },
  finishChain: function finishChain() {
    var result = this.startChain.reduce(function (acm, elem, ind) {
      if (ind === 0) {
        acm += "( ".concat(elem, " )");
        return acm;
      } else {
        acm += "~~( ".concat(elem, " )");
        return acm;
      }
    }, "");
    this.startChain = [];
    return result;
  }
};
module.exports = chainMaker;