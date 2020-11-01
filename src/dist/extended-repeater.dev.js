"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  var string = str;
  var addition = options.addition;

  if (str === null) {
    string = 'null';
  } else if (_typeof(str) == 'object') {
    var _toString = Object.prototype.toString;

    if (_toString.call(str) != '[object Array]') {
      string = _toString.call(str);
    } else {
      string = str.join(',');
    }
  } else {
    string = str.toString();
  }

  if (options.addition === null) {
    addition = 'null';
  } else if (_typeof(options.addition) == 'object') {
    var _toString2 = Object.prototype.toString;

    if (_toString2.call(options.addition) != '[object Array]') {
      addition = _toString2.call(options.addition);
    } else {
      addition = options.addition.join(',');
    }
  } else if (options.addition == undefined) {
    addition = '';
  } else {
    addition = options.addition.toString();
  }

  var add = '';
  var sepString = '';

  if (addition != undefined || addition !== null) {
    string = string + addition;
  }

  if (options.additionRepeatTimes > 1) {
    if (options.additionSeparator != undefined || options.additionSeparator !== null) {
      add = options.additionSeparator.toString() + addition;

      for (var i = 1; i < options.additionRepeatTimes - 1; i++) {
        add = add + options.additionSeparator.toString() + addition;
      }
    } else {
      add = "||" + addition;

      for (var _i = 1; _i < options.additionRepeatTimes - 1; _i++) {
        add = add + '||' + addition;
      }
    }

    string = string + add;
  }

  if (options.repeatTimes > 1) {
    if (options.separator != undefined || options.separator != null) {
      sepString = options.separator.toString() + string;

      for (var _i2 = 1; _i2 < options.repeatTimes - 1; _i2++) {
        sepString = sepString + options.separator.toString() + string;
      }
    } else {
      sepString = '+' + string;

      for (var _i3 = 1; _i3 < options.repeatTimes - 1; _i3++) {
        sepString = sepString + '+' + string;
      }
    }

    string = string + sepString;
  }

  return string;
};