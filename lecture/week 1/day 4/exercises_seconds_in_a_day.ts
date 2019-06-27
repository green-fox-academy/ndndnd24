'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;
let remaining: number = 60 * 60 * 24;
remaining = remaining - currentHours * 60 * 60 - currentMinutes * 60 - currentSeconds;
console.log(remaining); 