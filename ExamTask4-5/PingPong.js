"use strict";

const Board = require("./Board");
const Ball = require("./Ball");
const Position = require("./Position");
const Vector = require("./Vector");

module.exports = class PingPong {
  constructor(inputBoard) {
    this.board = new Board(inputBoard);

    this.startPosition = this.board.startPosition;
    this.startVector = this.board.startVector;

    // Tworząc obiekt Ball, nie można przekazać this.startPosition oraz this.startVector,
    // ponieważ zostaną one przypisane przez referencję do position i vector oiektu Ball
    // i będą się zmieniać w trakcie działania programu
    this.ball = new Ball(
      new Position(this.startPosition.x, this.startPosition.y),
      new Vector(this.startVector.x, this.startVector.y),
      this.board
    );

    // Uwaga: board i ball odwołuję się do siebie nawzajem w swoich instancjach
    this.board.ball = this.ball;
    this.ball.board = this.board;
  }

  play() {
    do {
      this.board.draw();
      this.board.refreshBeforeMove();
      this.ball.move();
      this.board.refreshAfterMove();
    } while (!this.endGame());
  }

  // Metoda sprawdza, czy pozostały nieodwiedzone pola, jeśli to gra trwa dalej
  endGame() {
    return (
      this.ball.position.x === this.startPosition.x &&
      this.ball.position.y === this.startPosition.y
    );
  }
};
