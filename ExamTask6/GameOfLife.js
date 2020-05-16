"use strict";

const Cell = require("./Cell");
const Position = require("./Position");
const cellSymbols = require("./CellSymbols");

module.exports = class GameOfLife {
  constructor(inputStates) {
    this.cells = [];

    // 1. Tworzyny jednowymairową tablicę komórek:
    for (let i = 0; i < inputStates.length; i++) {
      // Analizujemy wejściową tablicę wiersz po wierszu:
      const row = inputStates[i];

      // Wiersz z tablicy wejściowej zamieniamy na tablicę obiektów typu Cell
      const result = row.map((elem, index) => {
        return new Cell(
          new Position(i, index), // Pozycja komórki
          elem === cellSymbols.alive ? true : false, // Stan komórki
          [] // Tablica pozycji sąsiadów komórki
        );
      });

      this.cells.push(...result);
    }

    // 2. Każdej komórce tworzymy tablicę pozycji jej sąsiadów
    this.cells.forEach((cell) => {
      for (let i = cell.position.x - 1; i <= cell.position.x + 1; i++) {
        for (let j = cell.position.y - 1; j <= cell.position.y + 1; j++) {
          if (
            (i !== cell.position.x || j !== cell.position.y) && // Nie dopisujemy do sąsiedztwa komórki jej pozycji
            i >= 0 && // Pomijamy współrzędne ujemne
            j >= 0 && // Pomijamy współrzędne ujemne
            i < inputStates.length && // Pomijamy współrzędne większe od rozmiaru tablicy wejściowej
            j < inputStates[0].length // Pomijamy współrzędne większe od rozmiaru tablicy wejściowej
          ) {
            cell.neighboursPositions.push(new Position(i, j));
          }
        }
      }
    });
  }

  getCurrentState() {
    return this.cells;
  }

  findCellByPosition(position) {
    return this.cells.find((cell) => {
      return cell.position.x === position.x && cell.position.y === position.y;
    });
  }

  setNextState() {
    this.cells = this.cells.map((cell) => {
      const aliveNeighboursNumber = cell.neighboursPositions.filter(
        (position) => {
          const c = this.findCellByPosition(position);
          // Na wszelki wypadek, gdy c będzie undefined,
          // gdy position spoza zakresu tablicy wejściowej będzie...
          return c ? c.state : false;
        }
      ).length;

      let newState = cell.state;

      // Jeśli komórka jest martwa
      if (!cell.state) {
        // i ma trzech żywych sąsiadów
        if (aliveNeighboursNumber === 3) {
          newState = true; // to staje się żywa
        }
      } // Jeśli komórka jest żywa i ma mniej niż dwóch lub więcej niż trzech sąsiadów
      else if (aliveNeighboursNumber < 2 || aliveNeighboursNumber > 3) {
        newState = false; // to umiera
      }

      return new Cell(cell.position, newState, cell.neighboursPositions);
    });
  }
};
