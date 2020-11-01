"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CustomError = require("../extensions/custom-error");

var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var VigenereCipheringMachine =
/*#__PURE__*/
function () {
  function VigenereCipheringMachine(isRev) {
    _classCallCheck(this, VigenereCipheringMachine);

    if (isRev === undefined) {
      this.isRev = true;
    } else {
      this.isRev = isRev;
    }
  }

  _createClass(VigenereCipheringMachine, [{
    key: "encrypt",
    value: function encrypt(message, key) {
      if (!message || !key) {
        throw new Error();
      }

      var arrText = message.toLowerCase().split('');
      var arrKey = key.toLowerCase().split('');
      var arrDifference = [];
      var result = [];

      for (var i = 0; i < arrText.length; i++) {
        if (abc.includes(arrText[i])) {
          if (arrKey.length < arrText.length) {
            arrKey.push(arrKey[i]);
          }

          if (abc.indexOf(arrText[i]) + abc.indexOf(arrKey[i]) >= 26) {
            arrDifference.push(abc.indexOf(arrText[i]) + abc.indexOf(arrKey[i]) - 26);
          } else {
            arrDifference.push(abc.indexOf(arrText[i]) + abc.indexOf(arrKey[i]));
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
  }, {
    key: "decrypt",
    value: function decrypt(encryptedMessage, key) {
      if (!encryptedMessage || !key) {
        throw new Error();
      }

      var arrEncr = encryptedMessage.toLowerCase().split('');
      var arrKey = key.toLowerCase().split('');
      var arrDifference = [];
      var result = [];

      for (var i = 0; i < arrEncr.length; i++) {
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
      }

      return this.isRev ? result.join('').toUpperCase() : result.reverse().join('').toUpperCase();
    }
  }]);

  return VigenereCipheringMachine;
}();

module.exports = VigenereCipheringMachine;