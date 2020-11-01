const CustomError = require("../extensions/custom-error");

const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
class VigenereCipheringMachine {
  constructor(isRev) {
    if (isRev === undefined) {
        this.isRev = true;
    } else {
        this.isRev = isRev;
    }
  }


  encrypt(message, key) {
    if (!message || !key) {
      throw new Error();
    }

    let arrText = message.toLowerCase().split('');
    let arrKey = key.toLowerCase().split('');
    let arrDifference = [];
    let result = [];
    for (let i = 0; i < arrText.length; i++) {
      if (abc.includes(arrText[i])) {
        if (arrKey.length < arrText.length) {
          arrKey.push(arrKey[i]);
        }
        if (((abc.indexOf(arrText[i])) + (abc.indexOf(arrKey[i])) >= 26)) {
          arrDifference.push(((abc.indexOf(arrText[i])) + (abc.indexOf(arrKey[i]))) - 26);
        } else {
          arrDifference.push(((abc.indexOf(arrText[i])) + (abc.indexOf(arrKey[i]))));
        }
        result.push(abc[arrDifference[i]]);
      } else {
        result.push(arrText[i]);
        arrKey.splice(i, 0, ' ');
        arrDifference.splice(i, 0, arrText[i]);
      }
    }
    return this.isRev ? result.join('').toUpperCase() : result.reverse().join('').toUpperCase();

  } 
  
  
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error();
    }
    let arrEncr = encryptedMessage.toLowerCase().split('');
    let arrKey = key.toLowerCase().split('');
    let arrDifference = [];
    let result = [];
    for (let i = 0; i < arrEncr.length; i++) {
      if (abc.includes(arrEncr[i])) {
        if (arrKey.length < arrEncr.length) {
          arrKey.push(arrKey[i]);
        }
        if (abc.indexOf(arrEncr[i]) < abc.indexOf(arrKey[i])) {
          arrDifference.push(abc.indexOf(arrEncr[i]) - abc.indexOf(arrKey[i]) + 27);
        } else {
          arrDifference.push(abc.indexOf(arrEncr[i]) - abc.indexOf(arrKey[i]) + 1);
        }
        result.push(abc[arrDifference[i] - 1]);
      } else {
        result.push(arrEncr[i]);
        arrKey.splice(i, 0, ' ');
        arrDifference.splice(i, 0, arrEncr[i]);
      }
    } return this.isRev ? result.join('').toUpperCase() : result.reverse().join('').toUpperCase();
  } 
}

module.exports = VigenereCipheringMachine;
