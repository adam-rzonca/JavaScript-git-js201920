// 4) Write a code that multiplies two matrices together. Dimension validation required.

"use strict";

class MatrixMultiplier {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  multiply() {
    const aNumRows = this.a.length,
      aNumCols = this.a[0].length,
      bNumCols = this.b[0].length;
    const result = [];

    for (let i = 0; i < aNumRows; i++) {
      let resultRow = [];

      for (let j = 0; j < bNumCols; j++) {
        let resultElem = 0;
        for (let k = 0; k < aNumCols; k++) {
          resultElem += this.a[i][k] * this.b[k][j];
        }
        resultRow.push(resultElem);
      }

      result.push(resultRow);
    }

    return result;
  }

  // Returns true, if matrixes data and diemnsions are correct; else returns error message
  validate() {
    // Check, if input data a and b are arrays
    if (!Array.isArray(this.a)) {
      return "First argument is not a Array!";
    }

    if (!Array.isArray(this.b)) {
      return "Second argument is not a Array!";
    }

    // Check, if input arrays includes only numbers, and if they are max 2D
    let result = this.validateMatrixDataTypesAndDeepth(this.a);
    if (result !== true) {
      return "First argument: " + result;
    }

    result = this.validateMatrixDataTypesAndDeepth(this.b);
    if (result !== true) {
      return "Second argument: " + result;
    }

    // Check, if all matrixes rows are equal
    if (!this.validateMatrixRowLengths(this.a)) {
      return "First argument: " + "All rows length should be equal!";
    }

    if (!this.validateMatrixRowLengths(this.b)) {
      return "Second argument: " + "All rows length should be equal!";
    }

    // Check, if first matrix columns number equals second matrix rows number
    if (this.a[0].length !== this.b.length) {
      return "First matrix columns number should be equal to second matrix rows number!";
    }

    return true;
  }

  // Returns true, if all rows length is equal, else false
  validateMatrixRowLengths(matrix) {
    return matrix.every((row, index, array) => row.length === array[0].length);
  }

  // Returns true, if matrix data types are numbers, and matrix dimension is max 2D;
  // else returns error message
  validateMatrixDataTypesAndDeepth(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      let row = matrix[i];

      if (Array.isArray(row)) {
        for (let j = 0; j < row.length; j++) {
          let elem = row[j];
          if (Array.isArray(elem)) {
            return "Matrix should be max two dimensional!";
          } else if (typeof elem !== "number") {
            return "Matrix should includes only numbers!";
          }
        }
      } else if (typeof row !== "number") {
        return "Matrix should includes only numbers!";
      }
    }

    return true;
  }
}

const arrayA = [
  [2, 1, 3],
  [-1, 4, 0]
];

const arrayB = [
  [1, 3, 2],
  [-2, 0, 1],
  [5, -3, 2]
];

const matrixMultiplier = new MatrixMultiplier(arrayA, arrayB);

let result = matrixMultiplier.validate();
if (result === true) {
  result = matrixMultiplier.multiply();
}
console.log(result);
