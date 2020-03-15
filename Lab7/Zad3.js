// 3) Given two strings, write a program that efficiently finds the longest common subsequence (substring).
// 'karol rolki'

"use strict";

var utils = (function() {
  function genString(length) {
    let result = new Array(length).fill("");

    result = result.map(elem => (Math.random() < 0.5 ? "A" : "B"));
    return result.join("");
  }
  return { genString };
})();

class LongestCommonSubstring {
  constructor(str1, str2) {
    this.str1 = str1;
    this.str2 = str2;
  }

  find() {
    if (this.str1.length === 0 || this.str2.length === 0) {
      return "";
    }

    let result = this.str1.charAt(0);

    for (let i = 0; i < this.str1.length; i++) {
      for (let j = i; j < this.str1.length; j++) {
        let substr = this.str1.substr(i, j + 1);

        if (substr.length > result.length && this.str2.includes(substr)) {
          result = substr;
        } else {
          break;
        }
      }
    }

    return result;
  }
}

const strLen = 10;
const str1 = utils.genString(strLen);
const str2 = utils.genString(strLen);

const lcs = new LongestCommonSubstring(str1, str2);
const result = lcs.find();

console.log(str1);
console.log(str2);
console.log(result);
