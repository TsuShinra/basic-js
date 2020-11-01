"use strict";

var CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  var hanoi = new Object();
  var t = Math.pow(2, disksNumber) - 1;
  var s = Math.floor(3600 / turnsSpeed * t);
  hanoi["turns"] = t;
  hanoi["seconds"] = s;
  return hanoi;
};