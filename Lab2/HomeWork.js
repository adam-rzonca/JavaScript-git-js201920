// // 1) Create a function that returns the sum of all elements passed in array as parameter. Function (array)=>number
// let items = [1, 6, 23, 8, 4, 8, 3, 7];

// console.log(items.reduce(sumAll, 0));

// function sumAll(total, currentVal) {
//   return total + currentVal;
// }

// // 2) Create a function that returns sum of first and last elements of given array.
// let items = [1, 6, 23, 8, 4, 8, 3, 7];

// console.log(sumFirstAndLast(items));

// function sumFirstAndLast(items) {
//   return items[0] + items[items.length - 1];
// }

// // 3) Create a function that takes a number and return factorial of that number.
// let number = 7;
// console.log(factorial(number));

// function factorial(n) {
//   if (n > 0) {
//     return n * factorial(n - 1);
//   } else {
//     return 1;
//   }
// }

// // 4) Create a function that returns given array in reverse order. No build in functions
// let items = [1, 6, 23, 8, 4, 8, 3, 7];
// console.log(reverseItems(items));

// function reverseItems(items) {
//   let result = [];
//   for (let i = items.length - 1; i >= 0; i--) {
//     result.push(items[i]);
//   }
//   return result;
// }

// // 5) Create a function that based on given array returns new array in pattern [a,b,c,d,e,f] -> [a+b, c+d, e+f]    [1,3,4,1,0,3] => [4,5,3] function(array)=>array
// let items = [1, 6, 23, 8, 4, 8, 3, 7];

// console.log(retNewArray(items));

// function retNewArray(items) {
//   let result = [];
//   for (let i = 0; i < items.length; i += 2) {
//     result.push(items[i] + items[i + 1]);
//   }
//   return result;
// }

// // 6) For time of this example remove last element from the given array.
// // Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]
// let items = [1, 6, 23, 8, 4, 8, 3];

// console.log(retNewArray(items));

// function retNewArray(items) {
//   let result = [];
//   for (let i = 0; i < items.length; i += 2) {
//     if (i + 1 < items.length) {
//       result.push(items[i] + items[i + 1]);
//     } else {
//       result.push(items[i] * 2);
//     }
//   }
//   return result;
// }

// // 7) Create a function the return one random element from given array. // use random function
// const myFunctions = require("./myFunctions.js");

// let items = [1, 6, 23, 8, 4, 8, 3, 7];

// console.log("Value:", myFunctions.retRandomValFromArray(items));

// // 8) Create a function that takes two parameters: array and number off attempts.
// // Based on number of attempts choose a random number from table that many times and return lowest one.
// const myFunctions = require("./myFunctions.js");

// let items = [1, 6, 23, 8, 4, 8, 3, 7];
// let attemps = 5;
// console.log(retMinFromRandomNumbers(items, attemps));

// function retMinFromRandomNumbers(items, attemps) {
//   let randomNumbers = [];
//   for (let i = 0; i < attemps; i++) {
//     randomNumbers.push(myFunctions.retRandomValFromArray(items));
//   }

//   let minVal = randomNumbers[0];
//   for (let i = 0; i < randomNumbers.length; i++) {
//     let number = randomNumbers[i];
//     if (number < minVal) {
//       minVal = number;
//     }
//   }
//   return minVal;
// }

// 9) Create a function that takes given array. Then takes a random element, removes it from the array
// and pushes it to result arrays. This takes place as long as there are elements in source array.
// const myFunctions = require("./myFunctions.js");

// let items = [1, 6, 23, 8, 4, 8, 3, 7];
// let result = [];
// while (items.length) {
//   let randomIndex = myFunctions.getRandomInt(0, items.length - 1);
//   result.push(items[randomIndex]);
//   items.splice(randomIndex, 1);
// }

// console.log(result);

// // 10) Create a function that on given array will perform operation of adding or subtracting elements.
// // Operation is to be chosen at random. And return a result.[a,b,c,d] =>(((a+-b)+-c)+-d)
// const myFunctions = require("./myFunctions.js");

// let items = [1, 6, 23, 8, 4, 8, 3, 7];
// console.log(items.reduce(performRandomOperation, 0));

// function performRandomOperation(total, currentVal) {
//   let operation = myFunctions.getRandomInt(0, 1);
//   console.log((operation ? "+" : "-") + currentVal);
//   return total + (operation ? currentVal : -currentVal);
// }

// // 11) Create a function that will return the current day name in Polish.
// console.log(retPolishDayName());

// function retPolishDayName() {
//   let days = [
//     "Niedziela",
//     "Poniedziałek",
//     "Wtorek",
//     "Środa",
//     "Czwartek",
//     "Piątek",
//     "Sobota"
//   ];

//   return days[new Date().getDay()];
// }

// // 12) Create a function that tells us how many days till Friday
// console.log(piatekPiateczekPiatunio());

// function piatekPiateczekPiatunio() {
//   return 5 - new Date().getDay();
// }

// // 13) Create a function that take two numbers and return the object with 4 fields.
// // Result on 4 basic arithmetic operations.
// let x = 4,
//   y = 5;

// console.log(createObject(x, y));

// function createObject(x, y) {
//   return { add: x + y, sub: x - y, mul: x * y, div: x / y };
// }
