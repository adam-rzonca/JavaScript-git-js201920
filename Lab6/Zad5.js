// 5) Write a code that takes a number/string and returns a list of its digits.
// So for 2342 it should return [2,3,4,2].’A243b’ -> [2,4,3].

const data = "A243btwg b fnnn57678*($*93959";

console.log(retDigitList(data), data);

function retDigitList(inputData) {
  // Sprawdzamy typ danych, bo możemy przetwarzać tylko liczby i stringi
  // Na potrzeby przetwarzania danych nie musimy robić kopii inputData,
  // ponieważ dopuszczamy tylko liczby i stringi, a to typy wartościowe
  // zmienna przekazana jako inputData nie zostanei zmodyfikowana

  switch (typeof inputData) {
    case "number":
      inputData = "" + inputData;
      break;
    case "string":
      break;
    default:
      return null;
  }

  return inputData
    .split("") // Dzielimy wejściowy string na tablicę
    .filter(elem => {
      return elem >= "0" && elem <= "9"; // Wybieramy tylko cyfry
    })
    .map(elem => {
      return parseInt(elem); // Cyfry jako string konwertujemy na number
    });
}
