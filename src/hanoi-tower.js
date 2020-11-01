const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let hanoi = new Object();
  let t = 2**disksNumber - 1;
  let s = Math.floor((3600/turnsSpeed) * t);
  hanoi["turns"] = t;
  hanoi["seconds"] = s;
  
  return hanoi;
  
};
