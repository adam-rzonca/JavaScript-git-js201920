"use strict";

module.exports = class Player {
  constructor(id) {
    this.id = id;
    this.knownCards = [];
    this.score = 0;
  }

  // Metoda zwraca dwuelementową tablicę dwóch kart do pary
  getTwoPairedCards() {
    let card1, card2;

    for (let i = 0; i < this.knownCards.length; i++) {
      card1 = this.knownCards[i];
      card2 = this.knownCards.find(
        (c) => c.figure === card1.figure && c.id !== card1.id
      );

      if (card2) return [card1, card2];
    }

    return [];
  }

  // Metoda znajduje kartę do pary.
  getPairdedCard(card) {
    return this.knownCards.find(
      (c) => c.figure === card.figure && c.id !== card.id
    );
  }

  // Metoda zapamiętuje kartę
  rememberCard(card) {
    this.knownCards.push(card);
  }

  // Metoda usuwa kartę ze zbioru kart znanych graczowi
  removeCard(card) {
    this.knownCards = this.knownCards.filter((c) => c.id !== card.id);
  }
};
