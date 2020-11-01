const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let string = str;
  let addition = options.addition;
  if (str === null) {
      string = 'null';
  } else if (typeof str == 'object') {
    let toString = Object.prototype.toString;
    if (toString.call(str) != '[object Array]') {
      string = toString.call(str);
    } else {string = str.join(',');}     
  } else {string = str.toString();}

  if (options.addition === null) {
    addition = 'null';
} else if (typeof options.addition == 'object') {
  let toString = Object.prototype.toString;
    if (toString.call(options.addition) != '[object Array]') {
      addition = toString.call(options.addition);
    } else {addition = options.addition.join(',');}
  
} else if(options.addition == undefined) {
  addition = '';
} else {addition = options.addition.toString();}

  let add ='';
  let sepString = '';
  if (addition != undefined || addition !== null) {
    string = string + addition; 
  } 
  if (options.additionRepeatTimes > 1) {
    if (options.additionSeparator != undefined || options.additionSeparator !== null) {
      add = options.additionSeparator.toString() + addition;
      for (let i = 1; i < options.additionRepeatTimes - 1; i++) {
        add = add + options.additionSeparator.toString() + addition;
      }
    } else {
      add = `||` + addition;
      for (let i = 1; i < options.additionRepeatTimes - 1; i++) {
        add = add + '||' + addition;
      }
    }
    string = string + add;

  }
  if (options.repeatTimes > 1) {
    if (options.separator != undefined || options.separator != null) {
        sepString = options.separator.toString() + string;
        for (let i = 1; i < options.repeatTimes - 1; i++) {
          sepString = sepString + options.separator.toString() + string;
      }
    } else {
      sepString = '+' + string;
      for (let i = 1; i < options.repeatTimes - 1; i++) {
        sepString = sepString + '+' + string;
      }
    }
    string = string + sepString;
  }
  return string;
};
  