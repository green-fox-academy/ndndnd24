'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

function drawTheLines(numberOfLines: number, lineColor: any) {
    ctx.strokeStyle = lineColor;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / numberOfLines);
    ctx.lineTo(canvas.width / 2, canvas.height - (canvas.height / numberOfLines));
    ctx.stroke();
    ctx.closePath();
    for (let i: number = 1; i < numberOfLines; i++) {
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / numberOfLines * i / 2);
        ctx.lineTo(canvas.width / numberOfLines * i / 2 + canvas.width / 2, canvas.height / 2);
        ctx.stroke();
    }
    ctx.closePath();
    for (let i: number = 1; i < numberOfLines; i++) {
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / numberOfLines * i / 2);
        ctx.lineTo(canvas.width / 2 - canvas.width / numberOfLines * i / 2, canvas.height / 2);
        ctx.stroke();
    }
    ctx.closePath();
    for (let i: number = 1; i < numberOfLines; i++) {
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height - canvas.height / numberOfLines * i / 2);
        ctx.lineTo(canvas.width / numberOfLines * i / 2 + canvas.width / 2, canvas.height / 2);
        ctx.stroke();
    }
    ctx.closePath();
    for (let i: number = 1; i < numberOfLines; i++) {
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height - canvas.height / numberOfLines * i / 2);
        ctx.lineTo(canvas.width / 2 - canvas.width / numberOfLines * i / 2, canvas.height / 2);
        ctx.stroke();
    }
    ctx.closePath();
}

drawTheLines(22, '#ff00ff');