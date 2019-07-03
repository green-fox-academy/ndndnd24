'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function purpleSquareThreeD(numberOfSquare: number, sizeOfSqareNumberOne: number, sizeIncrease: number, fillmentColor: any, lineColor: any) {
    let plusSpace: number = 0;
    ctx.fillStyle = fillmentColor;
    ctx.strokeStyle = lineColor;
    for (let i: number = 0; i < numberOfSquare; i++) {
        ctx.fillRect(sizeOfSqareNumberOne + plusSpace, sizeOfSqareNumberOne + plusSpace, sizeOfSqareNumberOne + sizeIncrease * i, sizeOfSqareNumberOne + sizeIncrease * i);
        ctx.strokeRect(sizeOfSqareNumberOne + plusSpace, sizeOfSqareNumberOne + plusSpace, sizeOfSqareNumberOne + sizeIncrease * i, sizeOfSqareNumberOne + sizeIncrease * i);
        plusSpace = plusSpace + sizeIncrease * i + sizeOfSqareNumberOne;
    }
}

purpleSquareThreeD(6, 10, 10, 'purple', 'black');

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]