'use strict';

let numberToMultiply: number = 12;

let twice: number = numberToMultiply * 2;
console.log(twice);

let anothorNumberToMultiply: number = 11;

let twiceAnotherOne: number =  anothorNumberToMultiply * 2;
console.log(twiceAnotherOne);

function numberToChangeAndPrint(inputNumber: number): void {
    let doubledValue: number = inputNumber * 2;
    console.log(doubledValue);
}

function multiplication(base: number, another: number): number {
    return base * another;
}

numberToChangeAndPrint(12);
numberToChangeAndPrint(124345);

console.log(multiplication(2,4));

