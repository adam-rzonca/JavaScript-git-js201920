module.exports = class Position {
  constructor(row, col) {
    this.row = row - 1;
    this.col = col - 1;
  }

  getRow() {
    return this.row;
  }

  getCol() {
    return this.col;
  }

  toString() {
    return "(" + (this.row + 1) + ", " + (this.col + 1) + ")";
  }
};
