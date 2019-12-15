module.exports = class Sudoku {
  constructor(inutArray) {
    this.sudoku = inutArray;
  }

  solve() {
    do {} while (!this.isSolved());
  }

  isValid() {
    // Czy sumy wszystkich wierszy = 45
    let result;
    let rowsResult;
    rowsResult = this.sudoku.every(row => {
      result =
        row.reduce((a, b) => {
          return a + b;
        }) == 45;
      //console.log(result);
      return result;
    });

    //console.log("rowsResult", rowsResult);

    if (!rowsResult) return false;

    // function arrayColumn(arr, n) {
    //   return arr.map(x => x[n]);
    // }

    // Czy sumy wszystkich kolumn = 45

    return true;
  }

  isSolved() {
    // Sprawdzamy, czy są zera w wierszach

    let sudokuResult;

    sudokuResult = this.sudoku.every(row => {
      // Analizujemy kolejno wiersze sudoku
      let rowResult = row.every(number => {
        return number != 0;
      });

      //console.log("rowResult", rowResult);
      // Jeśli wiersz ma zero, to sudoku jest nierozwiazane
      return rowResult;
    });

    //console.log("sudokuResult", sudokuResult);

    return sudokuResult;
  }

  print() {
    console.table(this.sudoku, [0, 1, 2, 3, 4, 5, 6, 7, 8]);
  }
};
