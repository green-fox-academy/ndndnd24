'use strict';

const mapWith = (array, callback) => {
    let output = [];

    // for (let i = 0; i < array.length; i++) {
    //     output[i] = callback(array[i]);
    // }

    for (let i = 0; i < array.length; i++) {
        output[i] = callback(array[i]);
    }

    // The mapWith() function should iterate over the given array and call the callback function on every element.
    // It stores the callback return values in the output.
    // The mapWith() should return with the output array.

    return output;
}

const addOne = (number) => {
    return number + 1;
}

const removeSecondLetter = (string) => {
    let outputString = '';
    for (let i = 0; i < string.length; i++) {
        outputString += string.slice(i, i + 1);
        i++;
    }
    return outputString;
}

// Exercise 1:

// console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which removes every second character from a string

const words = ['map', 'reduce', 'filter'];

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']
