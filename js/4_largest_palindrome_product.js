'use strict';

console.time('time');

let h = 0;

function getIsPalindrome(n) {
  let s = n.toString();
  return s === s.split('').reverse().join('');
}

for (let i = 999; i > 0; i--) {
  for (let j = 999; j > 0; j--) {
    let p = i * j;
    if (getIsPalindrome(p)) {
      if (p > h) h = p;
    }
  }
}

console.log(h);

console.timeEnd('time');
