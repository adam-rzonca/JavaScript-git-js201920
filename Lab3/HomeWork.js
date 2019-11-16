// 1) Create an iffe that returns an object with fields:
// function setValue(), function showValue() and function reverseValue().
// Calling functions either logs the value or reverse it in an object.
// If value was not provided yet or is empty showValue function is to return information about that.
// Value can be type string or number. reverseValue():  If number do (*(-1)), if string reverse it.
// Closure pattern.

// let result = (function() {
//   let x;

//   return {
//     setValue: function(newVal) {
//       if (typeof newVal == "number" || typeof newVal == "string") {
//         x = newVal;
//       } else {
//         console.log("x type should be Number or String");
//         return undefined;
//       }

//       return x;
//     },
//     showValue: function() {
//       if (x == null || x == undefined) {
//         console.log("x not specifed yet");
//         return undefined;
//       }

//       return x;
//     },
//     reverseValue: function() {
//       switch (typeof x) {
//         case "number":
//           x *= -1;
//           break;
//         case "string":
//           let array = x.split("");
//           array = array.reverse();
//           x = array.join("");
//           break;
//         default:
//           console.log("x type should be Number or String");
//       }

//       return x;
//     }
//   };
// })();

// console.log("1:");
// if (result.reverseValue()) {
//   console.log(result.showValue());
// }

// console.log("2:");
// if (result.setValue([])) {
//   console.log(result.reverseValue());
// }

// console.log("3:");
// if (result.setValue({})) {
//   console.log(result.reverseValue());
// }

// console.log("4:");
// if (result.setValue(123)) {
//   console.log(result.showValue());
//   result.reverseValue();
//   console.log(result.showValue());
// }

// console.log("5:");
// if (result.setValue("123")) {
//   console.log(result.showValue());
//   result.reverseValue();
//   console.log(result.showValue());
// }

// console.log("6:");
// if (result.setValue({})) {
//   console.log(result.showValue());
//   result.reverseValue();
//   console.log(result.showValue());
// }
// console.log(result.showValue());

// console.log("7:");
// result.x = 12;
// console.log(result.showValue());

// 2) Create four function definitions. One for every basic math operations and taking two input parameters.
// Create one more function. This function is to return calculation object.
// This object is to have parameters object field that holds two operation parameters inside (x and y).
// Function field that points to a function with math operation (defined at the beginning).
// A function setOperation() that sets the field from previous sentence
// and a Calculate function that makes calculation and returns its value.

// let calculation = (function() {
//   let x, y, operation;

//   return {
//     setOperation: function(newX, newY, newOperation) {
//       x = newX;
//       y = newY;
//       operation = newOperation;
//     },
//     calculate: function() {
//       return operation(x, y);
//     }
//   };
// })();

// let x = 3,
//   y = 4;
// calculation.setOperation(x, y, add);
// console.log(calculation.calculate());

// calculation.setOperation(x, y, sub);
// console.log(calculation.calculate());

// calculation.setOperation(x, y, mult);
// console.log(calculation.calculate());

// calculation.setOperation(x, y, div);
// console.log(calculation.calculate());

// function add(x, y) {
//   return x + y;
// }

// function sub(x, y) {
//   return x - y;
// }

// function mult(x, y) {
//   return x * y;
// }

// function div(x, y) {
//   return x / y;
// }

// 3) Create an array (by hand) of objects and call sum() function in context of each one of them.
// Sum function is to come from this object  BaseObject = { X,y, sum: function (){ return this.x+this.y}}

// Example array: [{x:2,y:3},{x:-1,x:6,{x:0,x:8},…..]

// let BaseObject = {
//   X: 0,
//   y: 0,
//   sum: function() {
//     return this.x + this.y;
//   }
// };

// let myArray = [
//   { x: 2, y: 3 },
//   { x: -1, y: 6 },
//   { x: 0, y: 8 },
//   { x: 5, y: -7 }
// ];

// for (let i = 0; i < myArray.length; i++) {
//   let sumFun = BaseObject.sum.bind(myArray[i]);
//   console.log(sumFun());
// }

// // 4) Given an array of objects, for each object call operation() function in context of next object.
// // If object is last, got back to start of the array for operation function. In loop;
// let myArray = [
//   {
//     x: 1,
//     y: "object one value",
//     //operation1: () => "Object one prefix " + this.x + " " + this.y,
//     operation: function() {
//       return "Object one prefix " + this.x + " " + this.y;
//     }
//   },
//   {
//     x: 2,
//     y: "object two value",
//     //operation1: () => "Object two prefix " + this.x + " " + this.y,
//     operation: function() {
//       return "Object two prefix " + this.x + " " + this.y;
//     }
//   },
//   {
//     x: 3,
//     y: "object three value",
//     //operation1: () => "Object three prefix " + this.x + " " + this.y,
//     operation: function() {
//       return "Object three prefix " + this.x + " " + this.y;
//     }
//   }
// ];

// for (let i = 0; i < myArray.length; i++) {
//   let nextIndex = (i + 1) % 3;

//   let resultOperation = myArray[i].operation.bind(myArray[nextIndex]);
//   console.log(resultOperation());
// }
