"use strict";

module.exports = class Player {
  constructor(id) {
    this.id = id;
    this.knownCards = [];
    this.score = 0;
  }
};
