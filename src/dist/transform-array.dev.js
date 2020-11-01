"use strict";

var CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  var transArr = arr;
  var resultArr = [];

  if (!Array.isArray(arr)) {
    throw new Error();
  }

  var saveItem = '';

  for (var i = 0; i < arr.length; i++) {
    if (transArr[i] === '--discard-next') {
      if (i == arr.length - 1) {
        resultArr.push(transArr[i]);
        saveItem = resultArr.pop();
      } else {
        resultArr.push(transArr[i]);
        saveItem = resultArr.pop();
        i += 1;
      }
    } else if (transArr[i] === '--discard-prev') {
      if (resultArr.length === undefined || i == 0) {
        resultArr.push(transArr[i]);
        saveItem = resultArr.pop();
      } else if (saveItem === '--discard-next') {
        resultArr.push(transArr[i]);
        saveItem = resultArr.pop();
      } else {
        resultArr.pop();
        resultArr.push(transArr[i]);
        saveItem = resultArr.pop();
      }
    } else if (transArr[i] === '--double-next') {
      if (i == arr.length - 1) {
        resultArr.push(transArr[i]);
        saveItem = resultArr.pop();
      } else {
        resultArr.push(transArr[i + 1]);
        resultArr.push(transArr[i]);
        saveItem = resultArr.pop();
      }
    } else if (transArr[i] === '--double-prev') {
      if (i == 0 || resultArr.length == 0) {
        resultArr.push(transArr[i]);
        saveItem = resultArr.pop(transArr[i]);
      } else if (saveItem == '--discard-next') {
        resultArr.push(transArr[i]);
        saveItem = resultArr.pop();
      } else {
        resultArr.push(transArr[i - 1]);
        resultArr.push(transArr[i]);
        saveItem = resultArr.pop();
      }
    } else {
      saveItem = resultArr.push(transArr[i]);
    }
  }

  return resultArr;
};