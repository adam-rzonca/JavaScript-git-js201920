"use strict";
const Position = require("./Position.js");
const chessPieceTypes = require("./CheesePieceTypes.js");

class ChessPiece {
  constructor(position) {
    this.position = position;
    this.moveOptions = [];
  }

  toString() {
    let type;

    if (this instanceof King) {
      type = chessPieceTypes[0];
    } else if (this instanceof Queen) {
      type = chessPieceTypes[1];
    } else if (this instanceof Rook) {
      type = chessPieceTypes[2];
    } else if (this instanceof Bishop) {
      type = chessPieceTypes[3];
    } else {
      type = chessPieceTypes[4];
    }

    return type + " " + this.position.toString();
  }

  rowAndColumnMoves() {
    const result = [];

    for (let i = 1; i <= 8; i++) {
      if (this.position.x !== i) {
        result.push(new Position(i, this.position.y));
      }
    }

    for (let i = 1; i <= 8; i++) {
      if (this.position.y !== i) {
        result.push(new Position(this.position.x, i));
      }
    }

    return result;
  }

  diagonalMoves() {
    let result = [];

    // W lewo w dół
    for (
      let i = this.position.x - 1, j = this.position.y - 1;
      i >= 1 && j >= 1;
      i--, j--
    ) {
      result.push(new Position(i, j));
    }

    // W prawo w górę
    for (
      let i = this.position.x + 1, j = this.position.y + 1;
      i <= 8 && j <= 8;
      i++, j++
    ) {
      result.push(new Position(i, j));
    }

    // W lewo w górę
    for (
      let i = this.position.x - 1, j = this.position.y + 1;
      i >= 1 && j <= 8;
      i--, j++
    ) {
      result.push(new Position(i, j));
    }

    // W prawo w dół
    for (
      let i = this.position.x + 1, j = this.position.y - 1;
      i <= 8 && j >= 1;
      i++, j--
    ) {
      result.push(new Position(i, j));
    }
    return result;
  }
}

class King extends ChessPiece {
  constructor(position) {
    super(position);
    super.moveOptions = this.setMoveOptions();
  }

  setMoveOptions() {
    const result = [];
    let position;

    if (this.position.x - 1 >= 1) {
      // W lewo w górę
      if (this.position.y + 1 <= 8) {
        position = new Position(this.position.x - 1, this.position.y + 1);
        result.push(position);
      }

      // W lewo
      position = new Position(this.position.x - 1, this.position.y);
      result.push(position);

      // W lewo w dół
      if (this.position.y - 1 >= 1) {
        position = new Position(this.position.x - 1, this.position.y - 1);
        result.push(position);
      }
    }

    // W górę
    if (this.position.y + 1 <= 8) {
      position = new Position(this.position.x, this.position.y + 1);
      result.push(position);
    }

    // W dół
    if (this.position.y - 1 >= 1) {
      position = new Position(this.position.x, this.position.y - 1);
      result.push(position);
    }

    if (this.position.x + 1 <= 8) {
      // W prawo w górę
      if (this.position.y + 1 <= 8) {
        position = new Position(this.position.x + 1, this.position.y + 1);
        result.push(position);
      }

      // W prawo
      position = new Position(this.position.x + 1, this.position.y);
      result.push(position);

      // W prawo w dół
      if (this.position.y - 1 >= 1) {
        position = new Position(this.position.x + 1, this.position.y - 1);
        result.push(position);
      }
    }

    return result;
  }
}

class Queen extends ChessPiece {
  constructor(position) {
    super(position);
    super.moveOptions = this.setMoveOptions();
  }

  setMoveOptions() {
    return this.rowAndColumnMoves().concat(this.diagonalMoves());
  }
}

// Wieża
class Rook extends ChessPiece {
  constructor(position) {
    super(position);
    super.moveOptions = this.setMoveOptions();
  }

  setMoveOptions() {
    return this.rowAndColumnMoves();
  }
}

// Goniec
class Bishop extends ChessPiece {
  constructor(position) {
    super(position);
    super.moveOptions = this.setMoveOptions();
  }

  setMoveOptions() {
    return this.diagonalMoves();
  }
}

// Koń
class Knight extends ChessPiece {
  constructor(position) {
    super(position);
    super.moveOptions = this.setMoveOptions();
  }

  setMoveOptions() {
    const result = [];
    let position;

    // W górę
    if (this.position.y + 2 <= 8) {
      //  i w lewo
      if (this.position.x - 1 >= 1) {
        position = new Position(this.position.x - 1, this.position.y + 2);
        result.push(position);
      }

      //  i w prawo
      if (this.position.x + 1 <= 8) {
        position = new Position(this.position.x + 1, this.position.y + 2);
        result.push(position);
      }
    }

    // W lewo
    if (this.position.x - 2 >= 1) {
      // i w górę
      if (this.position.y + 1 <= 8) {
        position = new Position(this.position.x - 2, this.position.y + 1);
        result.push(position);
      }
      // i w dół
      if (this.position.y - 1 >= 1) {
        position = new Position(this.position.x - 2, this.position.y - 1);
        result.push(position);
      }
    }

    // W dół
    if (this.position.y - 2 >= 1) {
      //  i w lewo
      if (this.position.x - 1 >= 1) {
        position = new Position(this.position.x - 1, this.position.y - 2);
        result.push(position);
      }

      //  i w prawo
      if (this.position.x + 1 <= 8) {
        position = new Position(this.position.x + 1, this.position.y - 2);
        result.push(position);
      }
    }

    // W prawo
    if (this.position.x + 2 <= 8) {
      // i w górę
      if (this.position.y + 1 <= 8) {
        position = new Position(this.position.x + 2, this.position.y + 1);
        result.push(position);
      }
      // i w dół
      if (this.position.y - 1 >= 1) {
        position = new Position(this.position.x + 2, this.position.y - 1);
        result.push(position);
      }
    }

    return result;
  }
}

module.exports = class ChessPieceFactory {
  constructor() {}

  createChessPiece(options) {
    switch (options.type) {
      case chessPieceTypes[0]: // Król
        return new King(options.position);
      case chessPieceTypes[1]: // Królowa
        return new Queen(options.position);
      case chessPieceTypes[2]: // Wieża
        return new Rook(options.position);
      case chessPieceTypes[3]: // Goniec
        return new Bishop(options.position);
      case chessPieceTypes[4]: // Koń
        return new Knight(options.position);
      default:
        throw new Error("Invalid chess piece type!");
    }
  }
};
