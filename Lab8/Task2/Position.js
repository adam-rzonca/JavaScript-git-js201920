"use strict";

module.exports = class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return "(" + String.fromCharCode(64 + this.x) + this.y + ")";
  }
};
