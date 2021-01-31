'use strict';

let N = 266219;
console.log('N: ', N);
let arr = N.toString().split('').map(Number);
console.log('arr: ', arr);
let proizv = arr.reduce( (a,b) => a*b );
console.log('proizv: ', proizv);
let exp = proizv**3;
console.log('exp: ', exp);
let number = String(exp).slice(0,3);
console.log('number: ', number);