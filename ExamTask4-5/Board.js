"use strict";

const Position = require("./Position");
const Vector = require("./Vector");

const { borderChar, ballChar, fieldChar, randomChar } = require("./Chars");

module.exports = class Board {
  constructor(board) {
    this.board = board;
    this.ball = null;

    this.startPosition = this.findStartPosition();
    if (!this.startPosition) {
      throw new Error("Start position not found!");
    }

    this.startVector = this.findStartVector();
    if (!this.startVector) {
      throw new Error("Unable to set start vector!");
    }
  }

  // Metoda sprawdza, czy na nowej pozycji wystepuje kolizja
  // Jeśli tak, to zmienia kierunek ruchu
  checkCollision() {
    if (
      this.board[this.ball.position.x + this.ball.vector.x][
        this.ball.position.y + this.ball.vector.y
      ] === borderChar
    ) {
      let x, y, wallBounce;
      x = this.ball.vector.x;
      y = this.ball.vector.y;
      wallBounce = false;

      // Sprawdzamy, czy nastąpi odbicię wzgledem ściany x
      if (
        this.board[this.ball.position.x + this.ball.vector.x][
          this.ball.position.y
        ] === borderChar
      ) {
        x = -x;
        wallBounce = true;
      }

      // Sprawdzamy, czy nastąpi odbicię wzgledem ściany y
      if (
        this.board[this.ball.position.x][
          this.ball.position.y + this.ball.vector.y
        ] === borderChar
      ) {
        y = -y;
        wallBounce = true;
      }

      // Powyższe dwa przypadki rozwiazują nam sytuację odbicia od ściany,
      // lub "wklęsłego" rogu
      // Poniżej wyznaczamy wektor odbicia od "wypukłego" rogu
      if (!wallBounce) {
        x = -x;
        y = -y;
      }

      this.ball.vector = new Vector(x, y);
    }
  }

  checkRandomDirection() {
    if (this.board[this.ball.position.x][this.ball.position.y] === randomChar) {
      let x, y;
      x = this.ball.vector.x;
      y = this.ball.vector.y;

      do {
        x *= Math.random() < 0.5 ? -1 : 1;
        y *= Math.random() < 0.5 ? -1 : 1;
      } while (x === -this.ball.vector.x && y === -this.ball.vector.y);

      this.ball.vector = new Vector(x, y);
    }
  }

  refreshBoard() {
    // Rysujemy piłkę na aktualnym polu
    this.board[this.ball.position.x][this.ball.position.y] = ballChar;

    // Na poprzednim polu rysujemy wolne pole
    this.board[this.ball.prevPosition.x][this.ball.prevPosition.y] = fieldChar;
  }

  // Metoda rysuje w konsoli stan stołu
  draw() {
    console.clear();
    for (let i = 0; i < this.board.length; i++) {
      const row = this.board[i].join();
      console.log(row);
    }
  }

  // Metoda zwraca obiekt typu Position lub undefined
  findStartPosition() {
    let result;
    for (let i = 0; i < this.board.length; i++) {
      const row = this.board[i];
      const j = row.findIndex((elem) => elem === ballChar);

      if (j !== -1) {
        return new Position(i, j);
      }
    }
  }

  // Metoda zwraca obiekt typu Vector lub undefined
  findStartVector() {
    let x = this.startPosition.x,
      y = this.startPosition.y;

    // Lewy górny róg
    if (
      this.board[x - 1][y - 1] == borderChar &&
      this.board[x - 1][y] == borderChar &&
      this.board[x][y - 1] == borderChar
    ) {
      return new Vector(1, 1);
    }

    // Prawy górny róg
    if (
      this.board[x - 1][y] == borderChar &&
      this.board[x - 1][y + 1] == borderChar &&
      this.board[x][y + 1] == borderChar
    ) {
      return new Vector(1, -1);
    }

    // Lewy dolny róg
    if (
      this.board[x][y - 1] == borderChar &&
      this.board[x + 1][y - 1] == borderChar &&
      this.board[x + 1][y] == borderChar
    ) {
      return new Vector(-1, 1);
    }

    // Prawy dolny róg
    if (
      this.board[x][y + 1] == borderChar &&
      this.board[x + 1][y] == borderChar &&
      this.board[x + 1][y + 1] == borderChar
    ) {
      return new Vector(-1, -1);
    }
  }
};
