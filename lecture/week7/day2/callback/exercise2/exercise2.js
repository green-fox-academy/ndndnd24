'use strict';

// Write a program that prints apple after 3 seconds.

function writeApple(callback) {
    setTimeout(() => callback('Apple'), 3000);
    callback('Pear');
}

function logStuff(stringToLog) {
    console.log(stringToLog);
}

writeApple(console.log);