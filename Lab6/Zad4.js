// 4) Write a class that prints the list of the first n Fibonacci numbers.
// The first two Fibonacci numbers are 1 and 1. The n+1-st Fibonacci number can be computed
// by adding the n-th and the n-1-th Fibonacci number.
// The first few are therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.

class Fibonacci {
  static printList(n) {
    for (let i = 1; i <= n; i++) {
      // Wywołanie w statycznej metodzie innej statycznej metody z tej samej klasy, robimy przy użyciu this.
      // Wywołanie metody statycznej w metodzie niestatycznej, lub konstruktorze, robi się inaczej:
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
      console.log(i + ":", this.getNthElem(i));
    }
  }

  // Metoda z pętlą jest optymalna. Reurencja zarzyna proces...
  // https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e
  static getNthElem(n) {
    var a = 0,
      b = 1,
      help;

    while (n >= 0) {
      help = a;
      a = a + b;
      b = help;
      n--;
    }

    return b;
  }
}

Fibonacci.printList(3);
