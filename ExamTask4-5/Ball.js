"use strict";

const Position = require("./Position");

module.exports = class Ball {
  constructor(position, vector) {
    this.position = position;
    this.prevPosition = null;
    this.vector = vector;
    this.board = null;
  }

  move() {
    this.board.checkCollision();
    this.prevPosition = new Position(this.position.x, this.position.y);
    this.position.x += this.vector.x;
    this.position.y += this.vector.y;
    this.board.checkRandomDirection();
  }
};
