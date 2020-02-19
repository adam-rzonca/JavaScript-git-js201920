// 3) Write a function that rotates a list by k elements.
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2].
// Try solving this without creating a copy of the list.

// Prototyp musi być przed wywołaniem !!!
Array.prototype.rotate = function(k) {
  for (let i = 0; i < k; i++) {
    this.push(this[0]);
    this.splice(0, 1);
  }
};

const data = [1, 2, 3, 4, 5, 6];
const k = 2;

data.rotate(2);
console.log(data);
