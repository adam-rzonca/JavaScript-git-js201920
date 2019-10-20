function retRandomValFromArray(items) {
  let randomIndex = getRandomInt(0, items.length - 1);
  console.log("Index:", randomIndex);
  return items[randomIndex];
}

// Przykład ze strony
// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
  min = Math.ceil(min); // Zaokrąglenie liczby w górę
  max = Math.floor(max); // Zaokrąglenie liczby w dół
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = { retRandomValFromArray, getRandomInt };
