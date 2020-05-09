"use strict";

const Board = require("./Board");
const Ball = require("./Ball");

const { unvisitedChar } = require("./Chars");

module.exports = class PingPong {
  constructor(inputBoard) {
    this.board = new Board(inputBoard);

    this.startPosition = this.board.startPosition;
    this.startVector = this.board.startVector;

    this.ball = new Ball(this.startPosition, this.startVector, this.board);

    this.board.ball = this.ball;
    this.ball.board = this.board;
  }

  play() {
    while (!this.board.endGame()) {
      this.board.draw();
      this.board.refreshBeforeMove();
      this.ball.move();
      this.board.refreshAfterMove();
    }
  }
};
