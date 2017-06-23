'use strict';

console.time('time');

let n = 600851475143;

function getIsPrime(n) {
  if (n === 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3, s = Math.sqrt(n); i <= s; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}

function getLargestPrimeFactor(n) {
  if (getIsPrime(n)) {
    return n;
  } else {
    for (let i = 1; i < n/2; i++) {
      let f = n / i;
      if (getIsPrime(i) && f.toString().indexOf('.') === -1) {
        return getLargestPrimeFactor(f);
      }
    }
  }
}

console.log(getLargestPrimeFactor(n));

console.timeEnd('time');
