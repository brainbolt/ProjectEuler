'use strict';

console.time('time');

let n = 100;
let sumSquare = 0;

for(let i = 1; i <= n; i++) {
  sumSquare += i**2;
}

let sum = 0;

for(let i = 1; i <= n; i++) {
  sum += i;
}

let squareSum = sum ** 2;

console.log(squareSum - sumSquare);

console.timeEnd('time');
