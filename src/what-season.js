const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if ((typeof date) === 'undefined') {
    return 'Unable to determine the time of year!';
  } else if (Object.prototype.toString.call(date) !== '[object Date]' || (typeof date) !== "object") {
    throw new Error();
  }
  
  let season = function(month) {
    if ([0, 1, 11].includes(month)) {return 'winter';}
    else if ([2, 3, 4].includes(month)) {return 'spring';}
    else if ([5, 6, 7].includes(month)) {return 'summer';}
    else if ([8, 9, 10].includes(month)) {return 'autumn';}
    else {return false;}
  }

  const currentMonth = date.getMonth();
  return season(currentMonth);

};
