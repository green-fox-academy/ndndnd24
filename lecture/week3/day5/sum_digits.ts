'use strict';

let sum: number = 0;

function sumDigits(inputNumber: number): number {
    if (inputNumber == 0) {
        // console.log(sum);
        // return;
        return sum;
    } else {
        if (inputNumber % 10 !== 0) {
            inputNumber--;
            sum++;
            //console.log(inputNumber + ' & sum: ' + sum);
            sumDigits(inputNumber);
        } else {
            inputNumber = Math.floor(inputNumber / 10);
            sumDigits(inputNumber);
        }
    }
}

console.log(sumDigits(72692));
//sumDigits(999999999999999);

