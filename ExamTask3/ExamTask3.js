const Sudoku = require("./sudoku");

let unsolvedArray = [
  [7, 0, 4, 8, 0, 0, 3, 0, 1],
  [8, 2, 0, 5, 0, 0, 0, 4, 0],
  [0, 0, 9, 4, 3, 0, 5, 0, 0],
  [3, 1, 0, 0, 0, 0, 8, 0, 7],
  [0, 8, 0, 0, 0, 0, 0, 1, 0],
  [9, 0, 7, 0, 0, 0, 0, 3, 2],
  [0, 0, 6, 0, 1, 5, 4, 0, 0],
  [0, 7, 0, 0, 0, 9, 0, 6, 5],
  [5, 0, 8, 0, 0, 2, 1, 0, 3]
];

let solvedArray = [
  [1, 4, 9, 3, 6, 8, 5, 7, 2],
  [7, 2, 8, 1, 5, 4, 3, 9, 6],
  [5, 3, 6, 9, 2, 7, 1, 4, 8],
  [2, 5, 4, 6, 7, 3, 8, 1, 9],
  [8, 9, 3, 2, 4, 1, 6, 5, 7],
  [6, 7, 1, 8, 9, 5, 2, 3, 4],
  [9, 8, 5, 7, 3, 6, 4, 2, 1],
  [3, 1, 2, 4, 8, 9, 7, 6, 5],
  [4, 6, 7, 5, 1, 2, 9, 8, 3]
];

let solvedUnsolvedArray = [
  [1, 4, 9, 3, 6, 8, 5, 7, 2],
  [7, 2, 7, 1, 5, 4, 3, 9, 6],
  [5, 3, 6, 9, 2, 7, 1, 4, 8],
  [2, 5, 4, 5, 7, 3, 8, 1, 9],
  [8, 9, 3, 2, 4, 1, 6, 5, 7],
  [6, 7, 1, 8, 9, 3, 2, 3, 4],
  [9, 8, 5, 7, 3, 6, 4, 2, 1],
  [3, 1, 9, 4, 8, 9, 7, 6, 5],
  [4, 6, 7, 5, 1, 2, 9, 8, 3]
];

let mySudoku = new Sudoku(unsolvedArray);
// let mySudoku = new Sudoku(solvedArray);
// let mySudoku = new Sudoku(solvedUnsolvedArray);
console.log("UNSOLVED:");
mySudoku.print();
// console.log(mySudoku.isSolved());

mySudoku.solve();
console.log("SOLVED:");
mySudoku.print();

if (!mySudoku.isValid()) {
  console.log("Rozwiązanie jest nieprawidłowe!");
} else {
  console.log("Rozwiązanie jest prawidłowe!");
}

console.log("Wykonano", mySudoku.counter, "sprawdzeń komórek sudoku");
