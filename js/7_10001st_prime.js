'use strict';

console.time('time');

let n = 10001;
let count = 0;

function getIsPrime(n) {
  if (n === 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3, s = Math.sqrt(n); i <= s; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}

for(let i = 0; true; i++) {
  if(getIsPrime(i)) {
   count++;
   if(count === n) {
     console.log(i);
     break;
   } 
  }
}


console.timeEnd('time');
