"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (typeof date === 'undefined') {
    return 'Unable to determine the time of year!';
  } else if (Object.prototype.toString.call(date) !== '[object Date]' || _typeof(date) !== "object") {
    throw new Error();
  }

  var season = function season(month) {
    if ([0, 1, 11].includes(month)) {
      return 'winter';
    } else if ([2, 3, 4].includes(month)) {
      return 'spring';
    } else if ([5, 6, 7].includes(month)) {
      return 'summer';
    } else if ([8, 9, 10].includes(month)) {
      return 'autumn';
    } else {
      return false;
    }
  };

  var currentMonth = date.getMonth();
  return season(currentMonth);
};