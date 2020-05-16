"use strict";

const Position = require("./Position");

module.exports = class Cell {
  constructor(position, state, neighboursPositions) {
    this.position = position;
    this.state = state;
    this.neighboursPositions = neighboursPositions;
  }
};
