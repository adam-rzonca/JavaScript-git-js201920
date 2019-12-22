// Sudoku, to tablica obiektów w postaci:
// SudokuField
// {
// 	value: [1-9, ...] lub [],
// 	row: 0-8,
// 	col: 0-8,
// 	square: 0-8
// }
// Gdzie:
// value: to tablica z liczbami, jakie mogą być w tym polu:
// [] - puste
// [1-9] - wypełnione jedną pasującą liczbą
// [1-9, 1-9, ...] - potencjalnie pasujace liczby
// square - jeden z dziewięciu kwadratów
const ld = require("lodash");

module.exports = class Sudoku {
  constructor(inutArray) {
    this.sudoku = [];

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        let elem = this.sudoku.push(new SudokuField(i, j, inutArray[i][j]));
      }
    }

    console.log(this.sudoku.length);
    this.sudoku.forEach(elem => {
      elem.print();
    });
  }

  solve() {
    do {} while (!this.isSolved());
  }

  // Sudoku uznajemy za rozwiązne prawidłowo, jeśli
  // - wiersze nie zawierają powtórzeń
  // - kolumny nie zawierają powtórzeń
  // - kwadraty nie zawierają powtórzeń
  isValid() {
    for (let i = 0; i < 9; i++) {
      // Sprawdzamy, czy i-ty wiersz ma unikalne wartości
      let row = this.sudoku.filter(cell => {
        return cell.row == i;
      });

      if (isDuplicated(row)) {
        return false;
      }

      // Sprawdzamy, czy i-ta kolumna ma unikalne wartości
      let col = this.sudoku.filter(cell => {
        return cell.col == i;
      });

      if (isDuplicated(col)) {
        return false;
      }

      // Sprawdzamy, czy i-ta kolumna ma unikalne wartości
      let square = this.sudoku.filter(cell => {
        return cell.square == i;
      });

      if (isDuplicated(square)) {
        return false;
      }

      return true;
    }

    // Funkcja sprawdza, czy tablica obiektów typu SudokuField
    // zawiera unikalne wartości
    function isDuplicated(sudokuFieldArray) {
      // Musimy przemapować tablicę obiektów SudokuField
      // na tablicę zwykłych liczb

      let array = sudokuFieldArray.map(cell => {
        return cell.value[0];
      });

      // Sprawdzamy, czy array zawiera unikalne wartości
      // Porównując długość array z długością tablicy zawierjącej unikalne wartości z tablicy array

      return array.length != ld.uniq(array).length;
    }
  }

  // Sudoku uznajemy za rozwiązane, gdy wszsytie komórki
  // zawierają jedną liczbę
  isSolved() {
    let isSolved = this.sudoku.every(cell => {
      return cell.value.length == 1;
    });

    return isSolved;
  }

  print() {}
};

class SudokuField {
  constructor(i, j, value) {
    this.value = value != 0 ? [value] : [];
    this.row = i;
    this.col = j;

    if (this.row < 3) {
      if (this.col < 3) {
        this.square = 0;
      } else if (this.col < 6) {
        this.square = 1;
      } else {
        this.square = 2;
      }
    } else if (this.row < 6) {
      if (this.col < 3) {
        this.square = 3;
      } else if (this.col < 6) {
        this.square = 4;
      } else {
        this.square = 5;
      }
    } else {
      if (this.col < 3) {
        this.square = 6;
      } else if (this.col < 6) {
        this.square = 7;
      } else {
        this.square = 8;
      }
    }
  }

  print() {
    console.log(JSON.stringify(this));
  }
}
