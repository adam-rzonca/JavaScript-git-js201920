"use strict";

const chessPieceTypes = require("./CheesePieceTypes.js");

module.exports = class ChessPieceFactory {
  constructor() {}

  createChessPiece(options) {
    switch (options.type) {
      case "king":
        break;
      case "queen":
        break;
      case "rook": // Wieża
        break;
      case "bishop": // Goniec
        break;
      case "knight": // Koń
        break;
      default:
        throw new Error("Invalid chess piece type!");
    }
  }
};
