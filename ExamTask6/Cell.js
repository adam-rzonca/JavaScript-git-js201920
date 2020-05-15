"use strict";

module.exports = class Cell {
  constructor(x, y, state) {
    this.x = x;
    this.y = y;
    this.state = state;
    this.neighbours = [];
  }
};
