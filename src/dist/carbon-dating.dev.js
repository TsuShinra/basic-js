"use strict";

var CustomError = require("../extensions/custom-error");

var MODERN_ACTIVITY = 15;
var HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != 'string') {
    return false;
  }

  var checkA = parseFloat(sampleActivity);

  if (isNaN(checkA) || checkA > 15 || checkA <= 0) {
    return false;
  }

  var age = Math.ceil(MODERN_ACTIVITY / checkA) / (0.693 / HALF_LIFE_PERIOD);
  return age;
};