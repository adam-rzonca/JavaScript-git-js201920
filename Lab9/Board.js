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

  // Metoda zwraca obiekt typu Card o podanym id.
  getCardById(id) {
    return this.board.find((card) => card.id === id);
  }

  // Metoda losuje obiekt typu Card ze stołu.
  // Jeśli podano exceptId, to w przypadku wylosowania karty z tym id,
  // losowanie jest powtarzane.
  getRandomCard(exceptId) {
    let card;
    do {
      const index = utils.randomInt(0, this.board.length);
      card = this.board[index];
    } while (exceptId != undefined && card.id === exceptId);

    return card;
  }

  // Metoda usuwa obeikt typu Card ze stołu.
  removeCard(removedCard) {
    this.board = this.board.filter((card) => card !== removedCard);
  }

  // Metoda porównuje symbole dwóch obiektów typu Card.
  compareCards(card1, card2) {
    return card1.figure === card2.figure;
  }

  // Metoda sprawdza, czy na stole pozstały jeszcze jakieś karty.
  hasCards() {
    return this.board.length;
  }
};
