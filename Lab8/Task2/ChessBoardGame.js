"use strict";

const Position = require("./Position.js");
const ChessPieceFactory = require("./ChessPieceFactory.js");
const utils = require("./utils.js");
const chessPieceTypes = require("./CheesePieceTypes.js");

module.exports = class ChessBoardGame {
  constructor() {
    this.freeFields = []; // Jednowymiarowa tablica zawierająca WOLNE pola na planszy szachowej
    this.chessPieces = []; // Tablica wylosowanych figur szachowych. Zawiere obiekty typu ChessPiece
    this.capturedFields = []; // Bite pola
    this.chessPieceFactory = new ChessPieceFactory();

    // Wypełnienie tablicy 64 elementami zawierajacymi kolejne wspólrzędne pól planszy szachowej
    for (let i = 1; i <= 8; i++) {
      for (let j = 1; j <= 8; j++) {
        this.freeFields.push(new Position(i, j));
      }
    }
  }

  play() {
    // Dopóki mamy WOLNE pola na planszy
    while (this.freeFields.length) {
      const randomChessPiece = this.createRandomChessPiece();
      this.chessPieces.push(randomChessPiece);

      // Aktualizujemy listę bitych pól. Z wylosowanej figury dopisujemy tylko te
      // bite przez nią pola, które jeszcze nie znajdują się na liście bitych pól w grze
      const filteredTab = randomChessPiece.moveOptions.filter((newPosition) => {
        const result = this.capturedFields.findIndex((oldPosition) => {
          return (
            newPosition.x === oldPosition.x && newPosition.y === oldPosition.y
          );
        });

        // Jeśli go nie ma w liście bitych pól, to filtr jest OK - bierzemy to pole
        return result === -1;
      });
      this.capturedFields = this.capturedFields.concat(filteredTab);

      if (this.checkCapture()) {
        break;
      }
    }
  }

  // Metoda sprawdza, czy którakolwiek z wylosowanych przez grę figur
  // znajduje się na liscie bitych pól, a następnie listuje figury ją bijące...
  checkCapture() {
    let capturedPieces = [];

    // Sprawdzamy, które figury (z tablicy chessPieces)
    // mają pozycje na bitych polach (z tablicy capturedFields)
    capturedPieces = this.chessPieces.filter((chessPiece) => {
      const result = this.capturedFields.findIndex((position) => {
        return (
          position.x === chessPiece.position.x &&
          position.y === chessPiece.position.y
        );
      });

      // Jeśli go nie ma w liście bitych pól, to filtr jest OK - bierzemy to pole
      return result !== -1;
    });

    // Jeśli są bite figury, to:
    if (capturedPieces.length) {
      capturedPieces.forEach((capturedPiece) => {
        this.chessPieces.forEach((capturingPiece) => {
          const result = capturingPiece.moveOptions.findIndex((position) => {
            return (
              position.x === capturedPiece.position.x &&
              position.y === capturedPiece.position.y
            );
          });

          if (result !== -1) {
            console.log(
              capturingPiece.toString(),
              "captures",
              capturedPiece.toString()
            );
          }
        });
      });
    }
    return capturedPieces.length;
  }

  createRandomChessPiece() {
    let index = utils.randomInt(0, this.freeFields.length); // Wylosowanie indeksu wolnego pola
    const [randomPosition] = this.freeFields.splice(index, 1); // Usunięcie wylosowanego pola z tablicy wolnych pól

    index = utils.randomInt(0, chessPieceTypes.length); // Wylosowanie typu figury
    const randomType = chessPieceTypes[index];

    const options = { type: randomType, position: randomPosition };

    console.log(options.type, options.position.toString());

    return this.chessPieceFactory.createChessPiece(options);
  }
};
