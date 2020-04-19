// Chess board. Program is to choose at random one of the chess piece (except the pawn)
// and place it at the random spot on the board.
// After placing any piece (except first one) check all present pieces move ranges and see
// if any can reach other piece. Is so Give that pieces position and quit program.
// FACTORY (with class hierarhy) + SINGLETON pattern
"use strict";

const ChessBoardGame = require("./ChessBoardGame.js");

const chessBoardGame = new ChessBoardGame();
chessBoardGame.play();
