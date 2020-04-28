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
      // Dobieranie kart przez kolejnych graczy
      for (let i = 0; i < this.players.length; i++) {
        const player = this.players[i];
        let card1, card2;

        // Sprawdzenie, czy gracz zna dwie identyczne karty
        [card1, card2] = player.getTwoPairedCards();

        if (!card1 && !card2) {
          // Jeśli gracz nie zna dwóch identycznych kart,
          // to wylosuj pierwszą kartę z pominięciem kart znanych graczowi
          card1 = this.board.getRandomCard(player.knownCards);
          player.rememberCard(card1);

          // Sprawdzenie, czy gracz zna kartę pasującą do wylosowanej
          card2 = player.getPairdedCard(card1);
          if (!card2) {
            // Wylosuj drugą kartę z pominięciem kart znanych graczowi
            card2 = this.board.getRandomCard(player.knownCards);
            player.rememberCard(card2);
          }
        }

        console.log("Player:", player.id, "Cards:", card1.figure, card2.figure);

        // Jeśli gracz odwrócił dwie zgodne karty
        if (this.board.compareCards(card1, card2)) {
          // Usuń je ze zbioru kart pozostałych na stole
          this.board.removeCard(card1);
          this.board.removeCard(card2);

          // Dopisz graczowi punkt
          player.score++;

          // Usuń karty ze zbiorów kart znanych graczom, aby nie próbowali jej odkrć
          // inni gracze, którzy też już ją poznali, ale jeszcze nie zdążyli jej odkryć
          this.players.forEach((player) => {
            player.removeCard(card1);
            player.removeCard(card2);
          });

          console.log("Player:", player.id, "score:", player.score);

          // Kończymy grę, jeśli na stole już nie ma kart
          if (!this.board.hasCards()) {
            break;
          }
        }
      }
    }

    // Wypisanie wyników gry
    console.log("*** TOTAL SCORE ***");
    this.players.forEach((player) => {
      console.log("Player:", player.id, "score:", player.score);
    });
  }
};
