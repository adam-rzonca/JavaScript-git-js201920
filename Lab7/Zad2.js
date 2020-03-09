// 2) Write a program that finds the longest palindromic substring of a given string.
// 'karakis', 'baerren', 'kajak', 'inni', 'sedes'.

"use strict";

class Palindromic {
  constructor(string) {
    this.string = string;
  }

  find() {
    let result = this.string.substr(0, 1);

    for (let i = 0; i < this.string.length; i++) {
      for (let j = i + 1; j <= this.string.length; j++) {
        let substr = this.string.substr(i, j);

        if (this.isPalindrom(substr) && substr.length > result.length) {
          result = substr;

          if (result.length > this.string.length - j + 1) {
            return result;
          }
        }
      }
    }

    return result;
  }

  isPalindrom(s) {
    return (
      s.toLowerCase() ===
      s
        .toLowerCase()
        .split("")
        .reverse()
        .join("")
    );
  }
}

const strings = ["karakis", "baerren", "kajak", "inni", "sedes"];
// const strings = ["kajak"];

strings.forEach(s => {
  let p = new Palindromic(s);
  console.log(s, p.find());
});
