"use strict";

const Position = require("./Position.js");
const utils = require("./utils.js");
const ChessPieceFactory = require("./ChessPieceFactory.js");
const chessPieceTypes = require("./CheesePieceTypes.js");

module.exports = class ChessBoardGame {
  constructor() {
    this.freeFields = []; // Jednowymiarowa tablica zawierająca WOLNE pola na planszy szachowej
    this.chessPieces = []; // Tablica wylosowanych figur szachowych. Zawiere obiekty typu ChessPiece
    this.chessPieceFactory = new ChessPieceFactory();

    // Wypełnienie tablicy 64 elementami zawierajacymi kolejne wspólrzędne pól planszy szachowej
    for (let i = 1; i <= 8; i++) {
      for (let j = 1; j <= 8; j++) {
        this.freeFields.push(new Position(i, j));
      }
    }
  }

  play() {
    const board = [
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
    ];
    console.table(board);

    // Dopóki mamy WOLNE pola na planszy
    while (this.freeFields.length) {
      const randomChessPiece = this.createRandomChessPiece();
      this.chessPieces.push(randomChessPiece);

      board[randomChessPiece.position.x - 1][
        randomChessPiece.position.y - 1
      ] = randomChessPiece.toString();
    }

    console.table(board);
  }

  createRandomChessPiece() {
    let index = utils.randomInt(0, this.freeFields.length); // Wylosowanie indeksu wolnego pola
    const [randomPosition] = this.freeFields.splice(index, 1); // Usunięcie wylosowanego pola z tablicy wolnych pól

    index = utils.randomInt(0, chessPieceTypes.length); // Wylosowanie typu figury
    //index = 0; // Król
    //index = 1; // Królowa
    //index = 2; // Wieża
    //index = 3; // Goniec
    //index = 4; // Koń
    const randomType = chessPieceTypes[index];

    const options = { type: randomType, position: randomPosition };

    console.log(options.type, options.position.toString());

    return this.chessPieceFactory.createChessPiece(options);
  }
};
