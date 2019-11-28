// 1) Extend String type with the reverse() function.
// The function is to reverse the value of the string on which it was called.

// String.prototype.reverse = function() {
//   // Czy da się bezpośrednio zmodyfikować "wartość" this, zamiast używać return?
//   // Chyba nie, bo wszystkie Primitive Values (String, Number, Bool itd.) są "immutable" (niezmienne)...

//   return this.split("")
//     .reverse()
//     .join("");
// };

// console.log("abcdefghijklmnopqrstuvwxyz".reverse());

// 2) Extend Number type with the reverse() function.
// The function is to reverse the value of the Number on which it was called.
// Number.prototype.reverse = function() {
//   return 1 / this.valueOf();
// };

// console.log((4).reverse());
// console.log((0).reverse());

// 3) Based on included JSON file.
//     a. Create a function that will return Json from the file. (a)
//     b. Create a structures to hold data from the file. (b)
//     c. Map data from function (a) to structure from (b).
//     d. Create object that will give us data about:
//         i. How much money was spend in 2014
//         ii. What company was earning how much
//         iii. What type on transaction was having what spending’s.
//         iv. Values of the spending in each month
//         v. Values of the spending in each day of the week
let ld = require("lodash");

let Transactions = (function() {
  //let transactions = {};
  let transactions = [];

  return {
    readInputData: function(fileName) {
      let inputData = require(fileName);

      for (let i = 0; i < inputData.length; i++) {
        // Nazwy zmiennych powinny być zgodne z nazwami pól z obiektu,
        // aczkolwiek da się obejśc ten problem...
        let {
          index: index,
          _id: id,
          cost: cost,
          detailsOfPayent: paymentDetails
        } = inputData[i];

        let transaction = new Transaction(index, id, cost, paymentDetails);
        transactions.push(transaction);

        //console.log(transaction.paymentDetails);
      }
    },

    spendingsByDataGroup: function(keyLabel) {
      // Pusta tablica obiektów w postaci
      // {keyLabel: keyValue, "earn": value}
      // keyLabel to np. "year", "company" itp.
      // keyValue to np. 2014, "ECSTASIA itp.
      // Oczywiście: "earn" to etykieta pola a value jego wartość
      let earnsByGroups = [];

      transactions.forEach(transaction => {
        let keyValue;

        // keyLabel - etykieta klucza danych
        // keyValue - wartośc klucza danych
        switch (keyLabel) {
          case "year":
            keyValue = transaction.paymentDetails.date.getFullYear();
            break;
          case "company":
            keyValue = transaction.paymentDetails.company;
            break;
          case "type":
            keyValue = transaction.paymentDetails.type;
            break;
          case "month":
            keyValue = transaction.paymentDetails.date.getMonth();
            break;
          case "weekday":
            keyValue = transaction.paymentDetails.date.getDay();
            break;
          default:
        }

        let cost = transaction.cost;
        // Sprawdzamy, czy tablicy obiektów jest już zapis dla danego klucza danych.
        // Czyli sprawdzamy, czy w tablicy istnieje np obiekt z polem "year" == 2014
        // Gdzie "year" to keyLabel, a 2014 to keyValue
        let groupEarn = earnsByGroups.find(element => {
          return element[keyLabel] == keyValue;
        });

        if (groupEarn == undefined) {
          // Jeśli nie ma w tablicy wpisu dla danego klucza, to dodajemy odpowiedni obiekt do tablicy
          earnsByGroups.push({ [keyLabel]: keyValue, earn: cost });
        } else {
          // Jeśli jest, to zwiekszamy wartość pola "earn"
          groupEarn.earn = ld.round(groupEarn.earn + cost, 2);
        }
      });

      earnsByGroups.sort((elemA, elemB) => {
        if (elemA[keyLabel] < elemB[keyLabel]) return -1;

        if (elemA[keyLabel] > elemB[keyLabel]) return 1;

        return 0;
      });

      return earnsByGroups;
    }
  };

  function Transaction(index, id, cost, paymentDetails) {
    this.index = index;
    this.id = id;
    this.cost = Number(cost);
    let { Type: type, company: company, date: dateString } = paymentDetails;

    this.paymentDetails = new PaymentDetails(type, company, dateString);
  }

  function PaymentDetails(type, company, dateString) {
    let [day, month, year] = dateString.split("-");
    this.type = type;
    this.company = company;
    // Miesiące są, kurła, od 0 do 11 liczone !!!
    this.date = new Date(year, month - 1, day);
  }
})();

Transactions.readInputData("./Data.json");

console.log(JSON.stringify(Transactions.spendingsByDataGroup("year")));
console.log(JSON.stringify(Transactions.spendingsByDataGroup("company")));
console.log(JSON.stringify(Transactions.spendingsByDataGroup("type")));
console.log(JSON.stringify(Transactions.spendingsByDataGroup("month")));
console.log(JSON.stringify(Transactions.spendingsByDataGroup("weekday")));
