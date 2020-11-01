const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let coolName = '';
  let arr = [];
  let localMems = members;
  if (!Array.isArray(localMems)) {
    return false;
  }
  for (let i = 0; i < localMems.length; i++) {
    if ((typeof localMems[i]) == 'string') {
      localMems[i] = localMems[i].replace(/\s/g, '');
      arr.push(localMems[i][0]);
      }
    }
  coolName = arr.join('').toUpperCase();
  if (coolName === '') { return false;}
  return coolName.split('').sort().join('');
};
