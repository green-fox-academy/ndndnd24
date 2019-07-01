'use strict';

let endingNumber: number = 10;

function sum (value: number) {
    let sum: number = 0;
    for (let index: number = 1; index <= endingNumber; index++) {
        sum = sum + index;
    }
    console.log (sum);
}

sum(endingNumber);





// Write a function called `sum` that returns the sum of numbers from zero to the given parameter
