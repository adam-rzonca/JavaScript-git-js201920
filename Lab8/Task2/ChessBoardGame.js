"use strict";

const Position = require("./Position.js");
const utils = require("./utils.js");
const ChessPieceFactory = require("./ChessPieceFactory.js");
const chessPieceTypes = require("./CheesePieceTypes.js");

module.exports = class ChessBoardGame {
  constructor() {
    this.board = []; // Jednowymiarowa tablica zawierająca WOLNE pola na planszy szachowej

    // Wypełnienie tablicy 64 elementami zawierajacymi kolejne wspólrzędne pól planszy szachowej
    for (let i = 1; i <= 8; i++) {
      for (let j = 1; j <= 8; j++) {
        this.board.push(new Position(i, j));
      }
    }
  }

  play() {
    while (this.board.length) {
      const index = utils.randomInt(0, this.board.length); // Wylosowanie indeksu wolnego pola
      const position = this.board.splice(index, 1); // Usunięcie wylosowanego pola z tablicy wolnych pól

      const chessPieceType = utils.randomInt(0, chessPieceTypes.length); // Wylosowanie typu figury

      const piece = chessPieceTypes[chessPieceType];
      console.log(piece, position.toString());
    }
  }
};
