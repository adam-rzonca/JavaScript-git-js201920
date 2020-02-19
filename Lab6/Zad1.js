// 1) Write a program that prints all prime numbers in given range. Take sub from 1-100.

const maxNumber = 100;

for (let i = 2; i <= maxNumber; i++) {
  console.log(i, isPrime(i) ? "Prime" : "");
}

function isPrime(num) {
  if (num < 2) return false;

  const sqrt = Math.sqrt(num);

  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) return false;
  }

  return true;
}
