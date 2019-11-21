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

let fs = require("fs");

let Transactions = (function() {
  let inputData,
    transactions = [];

  return {
    readInputData: function(fileName) {
      inputData = require(fileName);

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
      }

      console.log(transactions);
    },

    moneySpendInYear: function(year) {},
    companiesEarns: function() {},
    spendingsByTransactionType: function() {},
    spendingsByMonths: function() {},
    spendingsByWeekdays: function() {}
  };

  function Transaction(index, id, cost, paymentDetails) {
    this.index = index;
    this.id = id;
    this.cost = cost;
    let { Type: type, company: company, date: date } = paymentDetails;

    this.paymentDetails = new PaymentDetails(type, company, date);
  }

  function PaymentDetails(type, company, date) {
    this.type = type;
    this.company = company;
    this.date = date;
  }
})();

Transactions.readInputData("./Data.json");