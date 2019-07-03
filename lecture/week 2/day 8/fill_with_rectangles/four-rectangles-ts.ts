'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE


ctx.fillStyle = '#468499';
ctx.fillRect(26, 93, 72, 96);
ctx.fillStyle = '#794044';
ctx.fillRect(172, 106, 72, 123);
ctx.fillStyle = '#ff4040';
ctx.fillRect(283, 262, 167, 62);
ctx.fillStyle = '#00ff7f';
ctx.fillRect(492, 61, 99, 199);


// Draw four different size and color rectangles.
// Avoid code duplication.