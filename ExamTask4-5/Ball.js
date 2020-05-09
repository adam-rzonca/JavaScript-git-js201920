"use strict";

module.exports = class Ball {
  constructor(position, vector) {
    this.position = position;
    this.vector = vector;
    this.board = null;
  }

  move() {
    this.board.checkCollision();
    this.position.x += this.vector.x;
    this.position.y += this.vector.y;
  }
};
