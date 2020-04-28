"use strict";

const Card = require("./Card");

const utils = require("./utils");
const getRandomBoard = require("./MemoryInput").getRandomBoard;

module.exports = class Board {
  constructor() {
    // Przemapowujemy tablicę znaków, na tablicę obiektów typu Card.
    this.board = getRandomBoard().map(
      (figure, index) => new Card(figure, index)
    );
  }

  // Metoda zwraca kartę o podanym id.
  getCardById(id) {
    return this.board.find((c) => c.id === id);
  }

  // Metoda losuje kartę ze stołu, z pominięciem kart znanych graczowi
  getRandomCard(except) {
    const filteredCards = this.board.filter(
      (card) => !except.some((c) => c.id === card.id)
    );

    const index = utils.randomInt(0, filteredCards.length);
    return filteredCards[index];
  }

  // Metoda usuwa kartę z gry.
  removeCard(card) {
    this.board = this.board.filter((c) => c.id !== card.id);
  }

  // Metoda porównuje symbole dwuch kart.
  compareCards(card1, card2) {
    return card1.figure === card2.figure;
  }

  // Metoda sprawdza, czy w grze pozstały jeszcze jakieś karty.
  hasCards() {
    return this.board.length;
  }
};
