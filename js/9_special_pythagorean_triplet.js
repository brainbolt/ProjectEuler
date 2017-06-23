'use strict';

console.time('time');

function getIsTriplet(a, b, c) {
  return a*a + b*b === c*c;
}

loop:
for(let a = 1; a <= 1000; a++) {
  for(let b = 1; b <= 1000; b++){
    for(let c = 1;c <= 1000; c++) {
      if(a + b + c === 1000) {
        if(getIsTriplet(a,b,c)) {
          console.log(a*b*c);
          break loop;
        }
      } 
    }
  }
}

console.timeEnd('time');
