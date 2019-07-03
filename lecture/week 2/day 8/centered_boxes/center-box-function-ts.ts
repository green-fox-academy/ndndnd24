'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

canvas.width = canvas.scrollWidth
canvas.height = canvas.scrollHeight

function drawSquare(size: number) {
    ctx.fillRect((canvas.width / 2) - (size / 2), (canvas.height / 2) - (size / 2), size, size);
}

ctx.fillStyle = '#ffa500';
drawSquare(150);
ctx.fillStyle = '#008080';
drawSquare(100);
ctx.fillStyle = '#ff0000';
drawSquare(50);


// Create a function that draws one square and takes 1 parameters:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.