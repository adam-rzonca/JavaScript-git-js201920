// // 1) Create a function that returns the sum of all elements passed in array as parameter. Function (array)=>number
// let items = [1, 6, 23, 8, 4, 8, 3, 7];
// function sumAll(total, currentVal) {
//   return total + currentVal;
// }
// console.log(items.reduce(sumAll, 0));

// // 2) Create a function that returns sum of first and last elements of given array.
// let items = [1, 6, 23, 8, 4, 8, 3, 7];
// function sumFirstAndLast(items) {
//   return items[0] + items[items.length - 1];
// }
// console.log(sumFirstAndLast(items));

// // 3) Create a function that takes a number and return factorial of that number.
// function factorial(n) {
//   if (n > 0) {
//     return n * factorial(n - 1);
//   } else {
//     return 1;
//   }
// }
// console.log(factorial(7));

// // 4) Create a function that returns given array in reverse order. No build in functions
// let items = [1, 6, 23, 8, 4, 8, 3, 7];

// function reverseItems(items) {
//   let result = [];
//   for (let i = items.length - 1; i >= 0; i--) {
//     result.push(items[i]);
//   }
//   return result;
// }
// console.log(reverseItems(items));

// // 5) Create a function that based on given array returns new array in pattern [a,b,c,d,e,f] -> [a+b, c+d, e+f]    [1,3,4,1,0,3] => [4,5,3] function(array)=>array
// let items = [1, 6, 23, 8, 4, 8, 3, 7];

// function retNewArray(items) {
//   let result = [];
//   for (let i = 0; i < items.length; i += 2) {
//     result.push(items[i] + items[i + 1]);
//   }
//   return result;
// }
// console.log(retNewArray(items));

// // 6) For time of this example remove last element from the given array.
// // Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]
// let items = [1, 6, 23, 8, 4, 8, 3];

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
// console.log(retNewArray(items));

// // 7) Create a function the return one random element from given array. // use random function
// let items = [1, 6, 23, 8, 4, 8, 3, 7];

// function retRandomValFromArray(items) {
//   let randomIndex = getRandomInt(0, items.length - 1);
//   console.log("Index:", randomIndex);
//   return items[randomIndex];
// }

// // Przykład z dokumentacji https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// function getRandomInt(min, max) {
//   min = Math.ceil(min); // Zaokrąglenie liczby w górę
//   max = Math.floor(max); // Zaokrąglenie liczby w dół
//   return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
// }

// console.log("Value:", retRandomValFromArray(items));

// // 8) Create a function that takes two parameters: array and number off attempts.
// // Based on number of attempts choose a random number from table that many times and return lowest one.
// let items = [1, 6, 23, 8, 4, 8, 3, 7];

// function retMinFromRandomNumbers(items, attemps) {
//   let randomNumbers = [];
//   for (let i = 0; i < attemps; i++) {
//     randomNumbers.push(retRandomValFromArray(items));
//   }

//   let minVal = randomNumbers[0];
//   for (let i = 0; i < randomNumbers; i++) {
//     let number = randomNumbers[i];
//     if (number < minVal) {
//       minVal = number;
//     }
//   }
//   return minVal;
// }

// let attemps = 5;
// console.log(retMinFromRandomNumbers(items, attemps));

// function retRandomValFromArray(items) {
//   let randomIndex = getRandomInt(0, items.length - 1);
//   console.log("Index:", randomIndex);
//   return items[randomIndex];
// }

// // Przykład z dokumentacji https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// function getRandomInt(min, max) {
//   min = Math.ceil(min); // Zaokrąglenie liczby w górę
//   max = Math.floor(max); // Zaokrąglenie liczby w dół
//   return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
// }
