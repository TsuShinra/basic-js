const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof (sampleActivity) != 'string') {return false;}
  let checkA = parseFloat(sampleActivity);
  if (isNaN(checkA) ||  checkA > 15 || checkA <= 0) {
    return false;
  }

  let age = Math.ceil(MODERN_ACTIVITY / checkA) / (0.693 / HALF_LIFE_PERIOD);
  return age;

};
