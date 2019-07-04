'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

function drawTheLines(numberOfQuarters: number, numberOfLines: number, topColor: any, bottomColor: any) {
    for (let indexX: number = 0; indexX < Math.sqrt(numberOfQuarters); indexX++) {
        let x: number = canvas.width / Math.sqrt(numberOfQuarters) * indexX;
        for (let indexY: number = 0; indexY < Math.sqrt(numberOfQuarters); indexY++) {
            let y: number = canvas.height / Math.sqrt(numberOfQuarters) * indexY;
            ctx.strokeStyle = topColor;
            for (let i: number = 1; i < numberOfLines; i++) {
                ctx.beginPath();
                ctx.moveTo(canvas.width / numberOfLines * i / Math.sqrt(numberOfQuarters) + x, y);
                ctx.lineTo(canvas.width / Math.sqrt(numberOfQuarters) + x, canvas.height / numberOfLines * i / Math.sqrt(numberOfQuarters) + y);
                ctx.stroke();
            }
            ctx.closePath();
            ctx.strokeStyle = bottomColor;
            for (let i: number = 1; i < numberOfLines; i++) {
                ctx.beginPath();
                ctx.moveTo(x, canvas.height / numberOfLines * i / Math.sqrt(numberOfQuarters) + y);
                ctx.lineTo(canvas.width / numberOfLines * i / Math.sqrt(numberOfQuarters) + x, canvas.height / Math.sqrt(numberOfQuarters) + y);
                ctx.stroke();
            }
            ctx.closePath();
        }
    }
}

drawTheLines(4, 25, 'purple', 'green');