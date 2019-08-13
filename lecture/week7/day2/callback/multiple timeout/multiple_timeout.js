'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

let arrayOfFruits = ['apple', 'pear', 'melon', 'grapes'];

function logStuff(callback, array) {
    for (let i = 0; i < array.length; i++) {
        setTimeout(() => {
            callback(array[i]);
        }, i * 1000 + ((i - 1) * 1000));
        // callback(i * 1000 + ((i - 1) * 1000))
    }
}

logStuff(console.log, arrayOfFruits);