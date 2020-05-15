"use strict";

const Cell = require("./Cell");
const cellSymbols = require("./CellSymbols");

module.exports = class GameOfLife {
  constructor(inputStates) {
    this.cells = [];

    // 1. Tworzyny jednowymairową tablicę komórek:
    for (let i = 0; i < inputStates.length; i++) {
      // Analizujemy wejściową tablicę wiersz po wierszu:
      const row = inputStates[i];

      const result = row.map((elem, index) => {
        return new Cell(i, index, elem === cellSymbols.alive ? true : false);
      });

      this.cells.push(...result);
    }

    // 2. Każdej komórce tworzymy tablicę jej sąsaidów
    this.cells.forEach((cell) => {
      for (let i = cell.x - 1; i <= cell.x + 1; i++) {
        for (let j = cell.y - 1; j <= cell.y + 1; j++) {
          // Nie dopisujemy do sąsiedztwa komórki jej samej
          if (i !== cell.x || j !== cell.y) {
            let neighbourCell = this.cells.find((elem) => {
              return elem.x === i && elem.y === j;
            });

            if (neighbourCell) {
              cell.neighbours.push(neighbourCell);
            }
          }
        }
      }
    });
  }

  getCurrentState() {
    return this.cells;
  }

  setNextState() {}
};
