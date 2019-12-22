// Sudoku, to tablica obiektów w postaci:
// SudokuField
// {
// 	value: 0-9,
// 	row: 0-8,
// 	col: 0-8,
// 	square: 0-8
// }
// Gdzie:
// value: wartość komórki; jeśli 0 - to nie wypełniona
// row, col - współrzędne komórki
// square - jeden z dziewięciu kwadratów
const ld = require("lodash");

module.exports = class Sudoku {
  constructor(inutArray) {
    this.counter = 0; // Licznik, ile razy sprawdzaliśmy, czy w komórkę można wpisać liczbę
    this.sudoku = [];

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        let elem = this.sudoku.push(new SudokuField(i, j, inutArray[i][j]));
      }
    }
  }

  solve() {
    do {
      // Analizuję po kolei wszystkie komórki z tablicy obiektów SudokuField
      for (let i = 0; i < 81; i++) {
        let cell = this.sudoku[i];

        if (cell.value > 0) continue;
        // Sprawdzam, jakie liczby można wpisać w bieżącą komórkę
        let possibleNumbers = [];
        for (let j = 1; j <= 9; j++) {
          this.counter++;

          // Sprawdzam wiersz
          if (this.getRow(cell.row).includes(j)) {
            continue;
          }

          // Sprawdzam kolumnę
          if (this.getColumn(cell.col).includes(j)) {
            continue;
          }

          // Sprawdzam kwadrat
          if (this.getSquare(cell.square).includes(j)) {
            continue;
          }

          // Ta liczba jest możliwa do wpisania w komórkę
          possibleNumbers.push(j);
        }

        // Jesli w komórkę można wpisać tylko jedną liczbę, to ją wpisujemy
        if (possibleNumbers.length == 1) {
          [cell.value] = possibleNumbers;
        }
      }
    } while (!this.isSolved());
  }

  // Sudoku uznajemy za rozwiązne prawidłowo, jeśli
  // - wiersze nie zawierają powtórzeń
  // - kolumny nie zawierają powtórzeń
  // - kwadraty nie zawierają powtórzeń
  isValid() {
    for (let i = 0; i < 9; i++) {
      // Sprawdzamy, czy i-ty wiersz ma unikalne wartości
      let row = this.getRow(i);

      if (isNotFiled(row) || isDuplicated(row)) {
        return false;
      }

      // Sprawdzamy, czy i-ta kolumna ma unikalne wartości
      let col = this.getColumn(i);

      if (isNotFiled(col) || isDuplicated(col)) {
        return false;
      }

      // Sprawdzamy, czy i-ta kolumna ma unikalne wartości
      let square = this.getSquare(i);

      if (isNotFiled(square) || isDuplicated(square)) {
        return false;
      }
    }

    return true;

    // Funkcja sprawdza, czy value wszystkich pól z tablicy obiektów typu SudokuField
    // jest większa od 0
    function isNotFiled(sudokuFieldArray) {
      return sudokuFieldArray.every(elem => {
        return elem == 0;
      });
    }

    // Funkcja sprawdza, czy tablica liczb zawiera unikalne wartości
    function isDuplicated(sudokuFieldArray) {
      // Sprawdzamy, czy array zawiera unikalne wartości
      // Porównując długość array z długością tablicy zawierjącej unikalne wartości z tablicy array

      return sudokuFieldArray.length != ld.uniq(sudokuFieldArray).length;
    }
  }

  // Sudoku uznajemy za rozwiązane, gdy wszsytie komórki
  // zawierają jedną liczbę
  isSolved() {
    let isSolved = this.sudoku.every(cell => {
      return cell.value != 0;
    });

    return isSolved;
  }

  print() {
    this.sudoku.forEach(elem => {
      elem.print();
    });
  }

  getRow(i) {
    let row = this.sudoku.filter(cell => {
      return cell.row == i;
    });
    return row.map(elem => elem.value);
  }

  getColumn(i) {
    let column = this.sudoku.filter(cell => {
      return cell.col == i;
    });
    return column.map(elem => elem.value);
  }

  getSquare(i) {
    let square = this.sudoku.filter(cell => {
      return cell.square == i;
    });
    return square.map(elem => elem.value);
  }
};

class SudokuField {
  constructor(i, j, value) {
    this.value = value;
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
