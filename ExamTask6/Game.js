"use strict";

const GameOfLife = require("./GameOfLife");
const inputStates = require("./input1");
const cellSymbols = require("./CellSymbols");

module.exports = class Game {
  constructor() {
    this.gameOfLife = new GameOfLife(inputStates);

    // Tablica do przechowywania stanu gry w życie
    // Musi mieć rozmiar zgodny z tablicą wejściową
    this.gameResult = new Array(inputStates.length);
    for (let i = 0; i < this.gameResult.length; i++) {
      this.gameResult[i] = new Array(inputStates[0].length);
    }
  }

  play() {
    this.draw();
    do {
      this.setNextState();
      this.draw();
    } while (!this.endGame());
  }

  draw() {
    // Pobieramy aktualny stan gry w życie
    const state = this.gameOfLife.getCurrentState();

    //  Wypełniamy tablicę z aktualnym stanem gry
    state.forEach((cell) => {
      this.gameResult[cell.x][cell.y] = cell.state;
    });

    // Wypisujemy tablicę z aktualnym stanem gry w konsoli
    console.clear();
    for (let i = 0; i < this.gameResult.length; i++) {
      const row = this.gameResult[i]
        .map((elem) => {
          return elem === true ? cellSymbols.alive : cellSymbols.dead;
        })
        .join();
      console.log(row);
    }
  }
  setNextState() {
    this.gameOfLife.setNextState();
  }
  endGame() {
    return false;
  }
};
