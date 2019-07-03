'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function purpleSteps(numberOfSquares: number, size: number, colorOfSquare: any) {
    ctx.fillStyle = colorOfSquare;
    for (let i: number = 0; i < numberOfSquares; i++) {
        ctx.fillRect(size + size * i, size + size * i, size, size);
        ctx.strokeRect(size + size * i, size + size * i, size, size);
    }
}


purpleSteps(19, 10, 'purple');



// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]