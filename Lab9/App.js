// Create mamory game. Where computer plays with itself. The number of player random 2-4.
// Each player takes turn in revealing board elements.
// Trying to find a pair. Typical memory game.
// Lets make an assumption that players have perfect memory
// but they only remember elements the reveal by them self.
"use strict";

const MemoryGame = require("./MemoryGame");

const playersNumber = 3;
const game = new MemoryGame(playersNumber);

game.play();
