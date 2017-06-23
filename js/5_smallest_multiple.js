'use strict';

console.time('time');

let n = 20;
let divisors = [7,11,12,13,14,15,16,17,18,19,20];

for(let i = n * divisors[0]; true; i += divisors[0]) {
  let multiple = n * i;
  let pass = true;

  for(let j = 0; j < divisors.length; j++) {
    let d = divisors[j];
    if(multiple % divisors[j] !== 0) {
      pass = false;
      break;
    } 
  }

  if (pass) {
    console.log(multiple);
    break;    
  }
}

console.timeEnd('time');
