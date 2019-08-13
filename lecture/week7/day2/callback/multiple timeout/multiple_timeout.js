'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds





// setTimeout(() => {
//     console.log('grapes'); // prints after one second
// }, 5000);
// setTimeout(() => {
//     console.log('melon'); // prints after one second
// }, 3000);
// setTimeout(() => {
//     console.log('pear'); // prints after one second
// }, 1000);
// console.log('apple'); // prints first

let arrayOfFruits = ['apple', 'pear', 'melon', 'grapes'];

function logStuff(callback, array) {
    for (let i = 0; i < array.length; i++) {
        setTimeout(() => {
            callback(array[i]);
        }, i * 1000 + ((i - 1) * 1000));
        callback(i * 1000 + ((i - 1) * 1000))
    }
}

logStuff(console.log, arrayOfFruits);