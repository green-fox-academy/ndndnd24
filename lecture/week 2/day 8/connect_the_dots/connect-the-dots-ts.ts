'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let box: number[][] = [[10, 10], [290, 10], [290, 290], [10, 290]];
let moarDotz: number[][] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];


function connectingDots(which: any) {
    ctx.beginPath();
    ctx.moveTo(which[which.length - 1][0], which[which.length - 1][1]);
    ctx.lineTo(which[0][0], which[0][1]);
    ctx.stroke();
    for (let iFirst: number = 0; iFirst < which.length; iFirst++) {
        ctx.beginPath();
        ctx.moveTo(which[iFirst][0], which[iFirst][1]);
        ctx.lineTo(which[iFirst + 1][0], which[iFirst + 1][1]);
        ctx.stroke();
    }
}

connectingDots(moarDotz);


// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]