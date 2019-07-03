'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

function drawPride(size: number, color: any) {
    ctx.fillStyle = color;
    ctx.fillRect(canvas.width / 2 - size / 2, canvas.height / 2 - size / 2, size, size);
}

drawPride(300, 'yellow');


let rainbowColor: string[] = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8F00FF'];
let colorCounter: number = 0;
let sizeRainbow: number = 66;

for (let y: number = 0; y < 400; y = y + sizeRainbow) {
    for (let x: number = 0; x < 600; x = x + sizeRainbow) {
        ctx.fillStyle = rainbowColor[colorCounter];
        ctx.fillRect(x, y, sizeRainbow, sizeRainbow);
        colorCounter++;
        if (colorCounter == 7) {
            colorCounter = 0;
        }
    }

}

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.