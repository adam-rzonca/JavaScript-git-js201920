// 2) Write a guessing game where the user has to guess a secret number.
// After every guess the program tells the user whether their number was too large or too small.
// At the end the number of tries needed should be printed.
// It counts only as one try if they input the same number multiple times consecutively. Range 1-100.
const ld = require("lodash");
let min = 1,
  max = 100;

const secretNumber = ld.random(min, max);
let triedNumber,
  tryCount = 0;

console.log("Secret number:", secretNumber);

for (tryCount = 1; ; tryCount++) {
  triedNumber = ld.random(min, max);

  if (triedNumber < secretNumber) {
    min = triedNumber + 1;
    console.log(
      triedNumber,
      "- secret number is greater than",
      triedNumber,
      "(min, max)",
      min,
      max
    );
  } else if (triedNumber > secretNumber) {
    max = triedNumber - 1;
    console.log(
      triedNumber,
      "- secret number is lower than",
      triedNumber,
      "(min, max)",
      min,
      max
    );
  } else {
    console.log(triedNumber, "- Secret number is:", triedNumber, "!!!");
    break;
  }
}

console.log("Number of tries:", tryCount);
