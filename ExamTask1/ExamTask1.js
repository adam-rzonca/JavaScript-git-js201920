// Scale riddle. With 8 balls EXAM [1,1,1,1,2,1,1,1].
// One of the items will be change to two. Indexes are to be chosen at random.
// Use compressions only two times.

const ld = require("lodash");

const startArray = [1, 1, 1, 1, 1, 1, 1, 1];

// Losowe ustawinie wagi jednej z kul;
startArray[ld.random(0, startArray.length - 1)] = 2;

console.log(startArray);

// Utworzenie tablicy obiektów typu
// ball {
//     idx - numer kuli w tablicy początkowej
//     weight - waga kuli
// }
let balls = startArray.map((tableElem, tableIndex) => {
  return { idx: tableIndex, weight: tableElem };
});

//Wylosuj trzy pierwsze kule
let firstThreeBalls = pullThreeBalls(balls);

//Wylosuj kolejne trzy kule
let nextThreeBalls = pullThreeBalls(balls);

// Liczymy wagi każdej z trójek wylosowanych kul
let weightOfFirstThreeBalls = ld.reduce(firstThreeBalls, sumBallsWeigth, 0);
let weightOfNextThreeBalls = ld.reduce(nextThreeBalls, sumBallsWeigth, 0);

// PIERWSZE WAŻENIE
// Porównujemy wagę trzech pierwszych kul z wagą kolejnych trzech kul.
let heaviestBall;
if (weightOfFirstThreeBalls === weightOfNextThreeBalls) {
  // Najcięższa kula jest wśród pozostałych dwóch kul

  let [ball1, ball2] = balls;

  // DRUGIE WAŻENIE
  heaviestBall = ball1.weight > ball2.weight ? ball1 : ball2;
} else {
  let heaviestBallArray =
    weightOfFirstThreeBalls > weightOfNextThreeBalls
      ? firstThreeBalls
      : nextThreeBalls;

  let [ball1, ball2, ball3] = heaviestBallArray;

  // DRUGIE WAŻENIE
  if (ball1.weight === ball2.weight) {
    heaviestBall = ball3;
  } else {
    heaviestBall = ball1.weight > ball2.weight ? ball1 : ball2;
  }
}

console.log("The heaviest ball index is", heaviestBall.idx);
console.log("The heaviest ball weight is", heaviestBall.weight);

function sumBallsWeigth(totalWeight, currentBall) {
  return totalWeight + currentBall.weight;
}

function pullThreeBalls(inputBallsArray) {
  let result = [];

  for (let i = 0; i < 3; i++) {
    // Wylosuj index elementu z tablicy kul (inputBallsArray)
    let randomIndex = ld.random(0, inputBallsArray.length - 1);

    // Usuń wylosowany element z tablicy
    let ball = ld.remove(inputBallsArray, (element, index) => {
      return index === randomIndex;
    });

    // I dodaj go do tablicy trzech pierwszysch wylosowanych kul
    // remove() zwraca tablice obiektów, musimy "przekonwertować" ball na pojedyńczy obiekt
    result.push(ball[0]);
  }

  return result;
}
