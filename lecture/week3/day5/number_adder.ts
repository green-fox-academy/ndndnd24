'use strict';

let currentNumber: number = 0;

function numberAdder(endNumber: number) {
    if (endNumber === currentNumber) {
        return;
    }
    currentNumber++;
    console.log(currentNumber);
    numberAdder(endNumber)
}

numberAdder(100);
