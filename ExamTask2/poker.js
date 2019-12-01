module.exports = { yourPokerSet };

const CardsValues = require("./cardsValues.js");

function pokerKrolewski(hand) {
  // Poker królewski musi być w jednym kolorze
  if (!checkIfOneColor(hand)) return false;

  // I zawierać karty od 10 do Asa
  if (
    hand.find(card => {
      return card.value == CardsValues[10];
    }) &&
    hand.find(card => {
      return card.value == CardsValues.Jack;
    }) &&
    hand.find(card => {
      return card.value == CardsValues.Queen;
    }) &&
    hand.find(card => {
      return card.value == CardsValues.King;
    }) &&
    hand.find(card => {
      return card.value == CardsValues.Ace;
    })
  )
    return true;

  return false;
}

function poker(hand) {
  // Poker musi być w jednym kolorze
  if (!checkIfOneColor(hand)) return false;

  // I zawierać karty od x do x + 4
  if (checkIfInSequence(hand)) return true;

  return false;
}

function kareta(hand) {
  let cardValue, four;

  // Kareta może mieć czwórkę z przodu
  cardValue = hand[0].value;
  four = checkRepetitions(hand, cardValue, 0);

  // Jesli z przodu jest czwórka, to jest to kareta
  if (four.length == 4) return true;

  // Kareta może mieć czwórkę z tyłu
  cardValue = hand[1].value;
  four = checkRepetitions(hand, cardValue, 0);

  // Jeśli z tyłu jest czwórka, to jest to kareta
  if (four.length == 4) return true;

  // To nie jest kareta
  return false;
}

function full(hand) {
  let cardValue, three, two, index;

  // Full może mieć trójkę z przodu i parę z tyłu
  index = 0;
  cardValue = hand[index].value;
  three = checkRepetitions(hand, cardValue, index);

  // Jeśli z przodu jest trójka kart, to sprawdzamy dwie karty z tyłu
  if (three.length == 3) {
    index = 3;
    cardValue = hand[index].value;
    two = checkRepetitions(hand, cardValue, index);

    // Jeśli z tyłu jest para, to jest to full
    if (two.length == 2) return true;
  }

  // Full może mieć parę z przodu i trójkę z tyłu
  index = 0;
  cardValue = hand[index].value;
  two = checkRepetitions(hand, cardValue, index);

  // Jeśli z przodu jest para, to sprawdzamy karty z tyłu
  if (two.length == 2) {
    index = 2;
    cardValue = hand[index].value;
    three = checkRepetitions(hand, cardValue, index);

    // Jeśli z tyłu jest trójka, to jest to full
    if (three.length == 3) return true;
  }
  // To nie jest full
  return false;
}

function kolor(hand) {
  return checkIfOneColor(hand);
}

function strit(hand) {
  checkIfInSequence(hand);
  return;
}

function trojka(hand) {
  let cardValue, three, index;

  // Trójka może mieć trzy karty z przodu, trzy w środku, lub trzy z tyłu
  for (index = 0; index < 3; index++) {
    cardValue = hand[index].value;
    three = checkRepetitions(hand, cardValue, index);

    if (three.length == 3) return true;
  }

  // To nie trójka
  return false;
}

function dwiePary(hand) {
  // AA, BB, x
  // AA, x, BB
  // x, AA, BB

  let cardValue, two, index;

  // Sprawdzamy dwójkę z przodu
  index = 0;
  cardValue = hand[index].value;
  two = checkRepetitions(hand, cardValue, index);

  if (two.length == 2) {
    // Sprawdzamy dwójkę w środku
    index = 2;
    cardValue = hand[index].value;
    two = checkRepetitions(hand, cardValue, index);

    if (two.length == 2) return true;

    // Sprawdzamy dwójkę z tyłu
    index = 3;
    cardValue = hand[index].value;
    two = checkRepetitions(hand, cardValue, index);

    if (two.length == 2) return true;
  }

  // Sprawdzamy dwójkę w środku
  index = 1;
  cardValue = hand[index].value;
  two = checkRepetitions(hand, cardValue, index);

  if (two.length == 2) {
    // Sprawdzamy dwójkę z tyłu

    index = 3;
    cardValue = hand[index].value;
    two = checkRepetitions(hand, cardValue, index);

    if (two.length == 2) return true;
  }

  return false;
}

function para(hand) {
  let cardValue, two, index;

  // AA, x, y, z
  // x, AA, y, z
  // x, y, AA, z
  // x, y, z, AA
  for (index = 0; index < 4; index++) {
    cardValue = hand[index].value;
    two = checkRepetitions(hand, cardValue, index);

    if (two.length == 2) return true;
  }

  // To nie trójka
  return false;
}

// Funkcja zwraca tablicę kart o danej wartości i zaczynając od podanego indeksu karty
function checkRepetitions(hand, value, startIndex) {
  let result, cards;

  cards = hand.slice(startIndex);
  result = cards.filter(card => {
    return card.value == value;
  });

  return result;
}

// Funkcja sprawdza, czy karty są po kolei, czyli od x do x + 4
function checkIfInSequence(hand) {
  let popValue = hand[0].value;

  for (let i = 1; i < hand.length; i++) {
    let currentValue = hand[i].value;

    if (popValue + 1 != currentValue) return false;
    popValue = currentValue;
  }

  return true;
}

// Funkcja sprawdza, czy karty są w jednym kmolorze
function checkIfOneColor(hand) {
  let color = hand[0].color;
  let result = hand.every(card => {
    return card.color === color;
  });

  return result;
}

function yourPokerSet(hand) {
  if (pokerKrolewski(hand)) {
    return "Poker królewski";
  } else if (poker(hand)) {
    return "Poker";
  } else if (kareta(hand)) {
    return "Kareta";
  } else if (full(hand)) {
    return "Full";
  } else if (kolor(hand)) {
    return "Kolor";
  } else if (strit(hand)) {
    return "Strit";
  } else if (trojka(hand)) {
    return "Trójka";
  } else if (dwiePary(hand)) {
    return "Dwie pary";
  } else if (para(hand)) {
    return "Para";
  } else {
    return "Wysoka karta";
  }
}
