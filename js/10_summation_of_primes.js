'use strict';

console.time('time');

function getIsPrime(n) {
  if (n === 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3, s = Math.sqrt(n); i <= s; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}

let sum = 0;

for(let i = 0; i < 2e6; i++) {
  if(getIsPrime(i)) sum += i;
}

console.log(sum);

console.timeEnd('time');
