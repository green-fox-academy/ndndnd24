'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;



function drawTriangle(size: number, quantity: number) {
    let tri: number = (Math.sqrt(3) / 2);
    let upRow: number = canvas.height / 2 + (size * tri * quantity) / 2;
    let rightRow: number = canvas.width / 2 - (size * quantity) / 2 - size / 2;
    let rightMove: number = rightRow;
    let rowCount: number = quantity;
    for (let h: number = 0; h <= quantity; h++) {
        rightRow = rightRow + size / 2;
        rightMove = rightRow;
        for (let w: number = 1; w <= rowCount; w++) {
            ctx.beginPath();
            ctx.moveTo(rightMove, upRow);
            ctx.lineTo(rightMove + size, upRow);
            ctx.lineTo(rightMove + size / 2, upRow - size * tri);
            ctx.lineTo(rightMove, upRow);
            ctx.stroke();
            ctx.closePath();
            rightMove = rightMove + size;
        }
        rowCount = rowCount - 1;
        upRow = upRow - size * tri;
    }

}

drawTriangle(20, 20);
