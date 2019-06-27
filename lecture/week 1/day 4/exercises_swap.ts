'use strict';

let a: number = 123;
let b: number = 456;

console.log(a);
console.log(b);

let c: number = 0;
c = a;
a = b;
b = c;

console.log(a);
console.log(b);