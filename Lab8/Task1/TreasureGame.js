const Position = require("./Position.js");

module.exports = class TreasureGame {
  constructor(treasureMap, startPosition) {
    this.treasureMap = this.convertMap(treasureMap);
    this.startPosition = startPosition;
  }

  // Funkcja konwertuje tablicę dwucyfowych współrzędnych
  // na nową tablice obiektów zawierajacych indeksy tablicy (row i column)
  // np.: 11 -> {0, 0}, 32 -> {2, 1}
  convertMap(treasureMap) {
    const result = [];
    for (let i = 0; i < treasureMap.length; i++) {
      result.push(
        treasureMap[i].map((elem) => {
          const row = Math.floor(elem / 10);
          const col = elem % 10;
          return new Position(row, col);
        })
      );
    }

    return result;
  }

  solve() {
    let position = this.startPosition;

    // Zabezpieczenie przed nieskończoną pętlą while, jeśli w zagadce jest błąd
    let checksNumber = 0;
    const checksLimit = this.treasureMap.length * this.treasureMap.length;

    while (!this.treasureFound(position) || checksNumber > checksLimit) {
      const oldPos = position;
      position = this.treasureMap[position.getRow()][position.getCol()];
      console.log(
        "CHECKED position:",
        oldPos.toString(),
        "NEXT clue:",
        position.toString()
      );

      checksNumber++;
    }

    if (checksNumber > checksLimit) {
      console.log("Treasure is unable to find!");
    } else {
      console.log("Treasure found at: ", position.toString());
    }
  }

  treasureFound(positon) {
    // return (
    //   this.treasureMap[positon.getRow()][positon.getCol()].getRow() ===
    //     positon.getRow() &&
    //   this.treasureMap[positon.getRow()][positon.getCol()].getCol() ===
    //     positon.getCol()
    // );

    // Mogę tak, bo position jest de facto elelemntem z this.treasureMap
    return this.treasureMap[positon.getRow()][positon.getCol()] === positon;
  }
};
