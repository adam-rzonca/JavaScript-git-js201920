// Create a solution that will tell us what poker set we have. The solution is to deal us 5 cards from the standard 52 card deck.
// After that the solution is to tell us what is the best poker set.

// Karta to obiekt w postaci
// card = {color: 0-3, value: 2 - 14}
// color:
//  0 Pik
//  1 Kier
//  2 Karo
//  3 Trefl
// value:
// 2 - 10
// 11 - Walet
// 12 - Królowa
// 13 - Król
// 14 - AS

const Deck = require("./deck.js");
const Poker = require("./poker.js");

// Do testów, żeby nie losować za często Wysokiej Karty (najsłabszy układ kart)
const deckStartValue = 9;

let myDeck = [],
  myHand = [];

for (let i = 0; i < 10; i++) {
  myDeck = Deck.prepareDeck(deckStartValue);
  myHand = Deck.dealHand(myDeck);
  Deck.printHand(myHand);
  console.log(Poker.yourPokerSet(myHand), "\n");
}

// DEBUG
// let pokerKrolewski = [
//   { color: 0, value: 10 },
//   { color: 0, value: 11 },
//   { color: 0, value: 12 },
//   { color: 0, value: 13 },
//   { color: 0, value: 14 }
// ];
// myHand = pokerKrolewski;
// Deck.printHand(myHand);
// console.log(Poker.yourPokerSet(myHand));

// console.log("\n************************");

// let poker = [
//   { color: 1, value: 8 },
//   { color: 1, value: 9 },
//   { color: 1, value: 10 },
//   { color: 1, value: 11 },
//   { color: 1, value: 12 }
// ];
// myHand = poker;
// Deck.printHand(myHand);
// console.log(Poker.yourPokerSet(myHand));

// console.log("\n************************");

// let kareta = [
//   { color: 0, value: 6 },
//   { color: 0, value: 8 },
//   { color: 1, value: 8 },
//   { color: 2, value: 8 },
//   { color: 3, value: 8 }
// ];
// myHand = kareta;
// Deck.printHand(myHand);
// console.log(Poker.yourPokerSet(myHand));

// kareta = [
//   { color: 0, value: 8 },
//   { color: 1, value: 8 },
//   { color: 2, value: 8 },
//   { color: 3, value: 8 },
//   { color: 0, value: 6 }
// ];
// myHand = kareta;
// Deck.printHand(myHand);
// console.log(Poker.yourPokerSet(myHand));

// console.log("\n************************");

// let full = [
//   { color: 0, value: 8 },
//   { color: 1, value: 8 },
//   { color: 2, value: 8 },
//   { color: 1, value: 6 },
//   { color: 0, value: 6 }
// ];
// myHand = full;
// Deck.printHand(myHand);
// console.log(Poker.yourPokerSet(myHand));

// full = [
//   { color: 0, value: 5 },
//   { color: 1, value: 5 },
//   { color: 2, value: 14 },
//   { color: 1, value: 14 },
//   { color: 0, value: 14 }
// ];
// myHand = full;
// Deck.printHand(myHand);
// console.log(Poker.yourPokerSet(myHand));

// console.log("\n************************");

// let kolor = [
//   { color: 1, value: 5 },
//   { color: 1, value: 6 },
//   { color: 1, value: 11 },
//   { color: 1, value: 12 },
//   { color: 1, value: 14 }
// ];
// myHand = kolor;
// Deck.printHand(myHand);
// console.log(Poker.yourPokerSet(myHand));

// console.log("\n************************");

// let strit = [
//   { color: 3, value: 9 },
//   { color: 0, value: 10 },
//   { color: 2, value: 11 },
//   { color: 1, value: 12 },
//   { color: 2, value: 13 }
// ];
// myHand = strit;
// Deck.printHand(myHand);
// console.log(Poker.yourPokerSet(myHand));

// console.log("\n************************");

// let trojka = [
//   { color: 1, value: 5 },
//   { color: 2, value: 5 },
//   { color: 3, value: 5 },
//   { color: 0, value: 8 },
//   { color: 1, value: 9 }
// ];
// myHand = trojka;
// Deck.printHand(myHand);
// console.log(Poker.yourPokerSet(myHand));

// trojka = [
//   { color: 1, value: 4 },
//   { color: 2, value: 14 },
//   { color: 3, value: 14 },
//   { color: 0, value: 14 },
//   { color: 1, value: 9 }
// ];
// myHand = trojka;
// Deck.printHand(myHand);
// console.log(Poker.yourPokerSet(myHand));

// trojka = [
//   { color: 1, value: 4 },
//   { color: 2, value: 5 },
//   { color: 3, value: 11 },
//   { color: 0, value: 11 },
//   { color: 1, value: 11 }
// ];
// myHand = trojka;
// Deck.printHand(myHand);
// console.log(Poker.yourPokerSet(myHand));

// console.log("\n************************");

// let dwojka = [
//   { color: 1, value: 5 },
//   { color: 2, value: 5 },
//   { color: 3, value: 10 },
//   { color: 0, value: 12 },
//   { color: 1, value: 13 }
// ];
// myHand = dwojka;
// Deck.printHand(myHand);
// console.log(Poker.yourPokerSet(myHand));

// dwojka = [
//   { color: 1, value: 4 },
//   { color: 2, value: 10 },
//   { color: 3, value: 10 },
//   { color: 0, value: 12 },
//   { color: 1, value: 13 }
// ];
// myHand = dwojka;
// Deck.printHand(myHand);
// console.log(Poker.yourPokerSet(myHand));

// dwojka = [
//   { color: 1, value: 2 },
//   { color: 2, value: 6 },
//   { color: 3, value: 10 },
//   { color: 0, value: 10 },
//   { color: 1, value: 12 }
// ];
// myHand = dwojka;
// Deck.printHand(myHand);
// console.log(Poker.yourPokerSet(myHand));

// dwojka = [
//   { color: 1, value: 4 },
//   { color: 2, value: 5 },
//   { color: 3, value: 6 },
//   { color: 0, value: 13 },
//   { color: 1, value: 13 }
// ];
// myHand = dwojka;
// Deck.printHand(myHand);
// console.log(Poker.yourPokerSet(myHand));

// console.log("\n************************");

// let wysokaKarta = [
//   { color: 1, value: 9 },
//   { color: 2, value: 10 },
//   { color: 3, value: 11 },
//   { color: 0, value: 12 },
//   { color: 1, value: 13 }
// ];
// myHand = wysokaKarta;
// Deck.printHand(myHand);
// console.log(Poker.yourPokerSet(myHand));

// console.log("\n************************");
