// // 1) From years in array check for leap years [1974, 1900, 1985, 2000]
// let years = [1974, 1900, 1985, 2000];
// for (let i = 0; i < years.length; i++) {
//   let year = years[i];
//   if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
//     console.log(year);
//   }
// }

// // 2) Calculate factorial of 7.
// let result = 1;
// for (let i = 1; i <= 7; i++) {
//   result *= i;
// }
// console.log(result);

// // 3) Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]
// let sum = 0,
//   items = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// for (let i = 0; i < items.length; i++) {
//   let item = items[i];
//   if (item % 2 != 0) {
//     sum += item;
//   }
// }
// console.log(sum);

// // 4) Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run.
// let items = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// let minVal = items[0],
//   maxVal = items[0];
// for (let i = 0; i < items.length; i++) {
//   let item = items[i];
//   if (item < minVal) {
//     minVal = item;
//   }

//   if (item > maxVal) {
//     maxVal = item;
//   }
// }
// console.log("Min: " + minVal);
// console.log("Max: " + maxVal);

// // 5) Choose longest string from the array. [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’].
// let items = ["Karol", "Adam", "Rogowski", "Politechnika", "Super", "Weekend"];
// let result = items[0];
// for (let i = 0; i < items.length; i++) {
//   let item = items[i];
//   if (item.length > result.length) {
//     result = item;
//   }
// }
// console.log(result);

// // 6) Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98].
// let items = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// let maxVal = items[0];
// for (let i = 0; i < items.length; i++) {
//   let item = items[i];
//   if (item > maxVal) {
//     maxVal = item;
//   }
// }

// for (i = 0; i < items.length; i++) {
//   if (items[i] === maxVal) {
//     console.log(i);
//   }
// }

// // 7) Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]
// let items = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// let result = 0,
//   itemsNum = 0;
// for (let i = 0; i < items.length; i++) {
//   let item = items[i];
//   if (item % 2 === 0) {
//     result += item;
//     itemsNum++;
//   }
// }
// result /= itemsNum;
// console.log(result);

// // 8) Calculate average value of items at even indexes. Zero is not considered to be even number. [1,6,23,8,4,98,3,7,3,98,4,98]
// let items = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// let result = 0,
//   itemsNum = 0;
// for (let i = 0; i < items.length; i++) {
//   let index = i;
//   if (index != 0 && index % 2 === 0) {
//     result += items[i];
//     itemsNum++;
//   }
// }
// result /= itemsNum;
// console.log(result);

// // 9) With a given start value of 0. Iterate the array and add even items and subtract odd ones. [1,6,23,8,4,98,3,7,3,98,4,98]
// let items = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// let result = 0;
// for (let i = 0; i < items.length; i++) {
//   let item = items[i];
//   if (item % 2 === 0) {
//     result += item;
//   } else {
//     result -= item;
//   }
// }
// console.log(result);
