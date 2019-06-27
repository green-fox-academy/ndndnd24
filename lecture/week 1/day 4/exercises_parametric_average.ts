'use strict';

let input: number = 5;
let sum: number = 0;

for (let i: number = 1; i < (input + 1); i++) {
    sum = sum + i;
}

console.log('Sum: ' + sum + ', Average: ' + (sum/input));