// 6) Write function that translates a text to Pig Latin and back.
// English is translated to Pig Latin by taking the first letter of every word,
// moving it to the end of the word and adding ‘ay’.
// “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.

const data = "The quick brown fox jumps over the lazy dog.";

console.log(pigLatin(data));

function pigLatin(inputData) {
  // Wszystkie litery wejściowego stringa zamieniamy na małe litery,
  // a następnie dzielimy wejściowy string na tablicę wyrazów (stringów):
  inputData = inputData.toLowerCase().split(" ");

  // Przetwarzamy każdy wyraz (string):
  inputData = inputData.map(word => {
    const array = word.split(""); // Dzielimy go na tablicę liter.
    array.push(array[0]); // Pierwszą literę dodajemy na koniec tablicy,
    array.splice(0, 1); // i usuwamy ją z początku tablicy.
    return array.join("") + "ay"; // Zamieniamy tablicę liter na string (z porotem na słowo) i dopsiujemy "ay".
  });

  // Zamieniamy tablicę stringów na jeden string separowany spacją
  inputData = inputData.join(" ");

  // Zamieniamy pierwszą literę na dużą
  inputData = inputData.charAt(0).toUpperCase() + inputData.slice(1);
  return inputData;
}
