'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;


function drawLineToCenter(x: number, y: number) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.stroke();
}


let c: number = 0;


for (let topX: number = 0; topX <= canvas.width; topX = topX + 20) {
    drawLineToCenter(topX, 0);
}

for (let rightY: number = 20; rightY <= canvas.height; rightY = rightY + 20) {
    drawLineToCenter(canvas.width, rightY);
}

for (let bottomX: number = 0; bottomX < canvas.width; bottomX = bottomX + 20) {
    drawLineToCenter(bottomX, canvas.height);
}

for (let leftY: number = 20; leftY < canvas.height; leftY = leftY + 20) {
    drawLineToCenter(0, leftY);
}





// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.