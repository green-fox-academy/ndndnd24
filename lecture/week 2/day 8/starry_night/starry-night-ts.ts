'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let starCount = Math.floor((Math.random() * 100) + 1) * 2;
let colors: any[] = ['#DCDCDC', '#D3D3D3', '#C0C0C0', '#A9A9A9', '#808080', '#696969', '#778899', '#708090', '#2F4F4F'];

ctx.fillRect(0, 0, 600, 400);

for (let i: number = 0; i <= starCount; i++) {
    let starX: number = Math.floor((Math.random() * 100) + 1) * 6;
    let starY: number = Math.floor((Math.random() * 100) + 1) * 4;
    let starSize: number = Math.floor((Math.random() * 10) + 1) / 2;
    let starColor: number = Math.abs(Math.floor((Math.random() * 10) + 1) - 2);
    ctx.fillStyle = colors[starColor];
    ctx.fillRect(starX, starY, starSize, starSize);
}



// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)