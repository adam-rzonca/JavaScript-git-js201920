module.exports = { prepareDeck, dealHand, printHand };

const ld = require("lodash");
const TextColors = require("colors");
const CardsValues = require("./cardsValues.js");
const CardsColors = require("./cardsColors.js");

// Funkcja drukuje układ pięciu kart.
// Zawiera w sobie funkcję oneCardString(card), która drukuje info o jednej karcie,
// czyli jej wartość oraz ikonkę koloru
// hand to tablica pięciu obiektów w postaci {color:0-3, value: 2-14}
function printHand(hand) {
  let cardsString =
    oneCardString(hand[0]) +
    " " +
    oneCardString(hand[1]) +
    " " +
    oneCardString(hand[2]) +
    " " +
    oneCardString(hand[3]) +
    " " +
    oneCardString(hand[4]);

  // Ponieważ trefl i pik mają czarny kolor, to informację o naszej ręce musimy
  // wydrukować na baiłym tle
  console.log(cardsString.bgWhite);

  function oneCardString(card) {
    let oneCardColor, oneCardValue;

    switch (card.color) {
      case CardsColors.Spade: // Pik
        oneCardColor = TextColors.black("\u2660");
        break;
      case CardsColors.Heart: // Kier
        oneCardColor = TextColors.red("\u2665");
        break;
      case CardsColors.Diamond: // Karo
        oneCardColor = TextColors.red("\u2666");
        break;
      case CardsColors.Club: // Trefl
        oneCardColor = TextColors.black("\u2663");
        break;
    }

    switch (card.value) {
      case CardsValues.Jack:
        oneCardValue = "J";
        break;
      case CardsValues.Queen:
        oneCardValue = "Q";
        break;
      case CardsValues.King:
        oneCardValue = "K";
        break;
      case CardsValues.Ace:
        oneCardValue = "A";
        break;
      default:
        oneCardValue = card.value;
    }

    return TextColors.black(oneCardValue) + oneCardColor;
  }
}

// Funkcja przygotowuje talię kart, od wartości podanej w parametrze do Asa (wartośc = 14)
function prepareDeck(deckStartValue) {
  let deck = [];

  for (let i = deckStartValue; i < 15; i++) {
    for (let j = 0; j < 4; j++) {
      let card = { color: j, value: i };
      deck.push(card);
    }
  }

  return deck;
}

// Funkcja losuje pięć kart z talii
function dealHand(deck) {
  let hand = [];

  for (let i = 0; i < 5; i++) {
    // Wylosuj numer karty z talii
    let randomIndex = ld.random(0, deck.length - 1);

    // Dodaj ją do ręki gracza
    hand.push(deck[randomIndex]);

    // I usuń z talii kart
    deck.splice(randomIndex, 1);
  }

  // Sortowanie ręki (w pokorze kolory nie mają starszeństwa)
  hand.sort((card1, card2) => {
    if (card1.value < card2.value) return -1;
    if (card1.value === card2.value) return 0;
    return 1;
  });
  return hand;
}
