"use strict";

const utils = require("./utils");

const figures = ["!", "@", "#", "$", "%", "^", "&", "*", "=", "+", "-", "_"];

// return random board filled randomly with two copies of each figure
function getRandomBoard() {
  const doubledFigures = [...figures, ...figures];
  const board = [];

  let randomIndex, figure;

  while (doubledFigures.length) {
    randomIndex = utils.randomInt(0, doubledFigures.length);
    [figure] = doubledFigures.splice(randomIndex, 1);

    board.push(figure);
  }

  return board;
}

module.exports = {
  getRandomBoard,
};
