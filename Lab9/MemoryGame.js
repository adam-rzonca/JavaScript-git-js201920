"use strict";

const Board = require("./Board");
const Player = require("./Player");

const minPlayersNumber = 2,
  maxPlayersNumber = 4;

module.exports = class MemoryGame {
  constructor(playersNumber) {
    if (playersNumber < minPlayersNumber || playersNumber > maxPlayersNumber) {
      throw new Error(
        "Invalid number of players<" +
          minPlayersNumber +
          "-" +
          maxPlayersNumber +
          ">!"
      );
    }

    this.players = [];
    for (let i = 1; i <= playersNumber; i++) {
      this.players.push(new Player(i));
    }

    this.board = new Board();
  }

  play() {
    while (this.board.hasCards()) {
      // Dobieranie kart przez graczy.
      for (let i = 0; i < this.players.length; i++) {
        const player = this.players[i];
        let card1, card2;

        // Jeśli gracz zna id dwóch zgodnych kart, to je odwróć.
        if (false) {
          // TODO ...
        } else {
          // W przeciwny wypadku wylosuj dwie karty.
          // Pierwszą:
          card1 = this.board.getRandomCard();

          // I drugą (ale z id innym niż card1.id):
          card2 = this.board.getRandomCard(card1.id);
        }

        console.log("Player:", player.id, "Cards:", card1.figure, card2.figure);

        // Jeśli gracz odwrócił dwie zgodne karty,
        // to usuń ich numery ze zbioru kart pozostałych na stole
        // i dopisz graczowi punkt.
        if (this.board.compareCards(card1, card2)) {
          player.score++;

          this.board.removeCard(card1);
          this.board.removeCard(card2);

          console.log("Player:", player.id, "score:", player.score);

          if (!this.board.hasCards()) {
            break;
          }
        }
      }
    }

    // Wypisanie wyników gry.
    console.log("*** TOTAL SCORE ***");
    this.players.forEach((player) => {
      console.log("Player:", player.id, "score:", player.score);
    });
  }
};
