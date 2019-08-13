'use strict';

// Write a program that prints apple after 3 seconds.

function writeApple(callback) {
    setTimeout(() => callback, 1000);
}

function logStuff(stringToLog) {
    console.log(stringToLog);
}

writeApple(logStuff('Apple'));