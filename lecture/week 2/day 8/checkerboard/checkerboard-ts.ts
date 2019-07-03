'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;
let evenLine: number = 1;

function chess(squareSize: number, ) {
    for (let y: number = 0; y < canvas.height; y = y + squareSize) {
        if (evenLine % 2 == 0) {
            for (let x: number = 0; x < canvas.width; x = x + squareSize * 2) {
                ctx.fillRect(x, y, squareSize, squareSize);
            }
        } else {
            for (let x: number = squareSize; x < canvas.width; x = x + squareSize * 2) {
                ctx.fillRect(x, y, squareSize, squareSize);
            }
        }
        evenLine++;
    }
}

chess(25);

// Fill the canvas with a checkerboard pattern.