'use strict';

console.time('time');

let n = 0;

function fibonacci(previous, next) {
  if (previous % 2 === 0) {
    n += previous;
  }

  if(next > 4e6) return;

  fibonacci(next, previous + next);
}

fibonacci(1,2);

console.log(n);

console.timeEnd('time');
