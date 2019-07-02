'use strict';

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

// usage example:
let a = ['a', 1, 'a', 2, '1'];
let unique = a.filter(onlyUnique); // returns ['a', 1, 2, '1']
console.log(unique);









/*function unique(arr) {

}

console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))*/



//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once


//  Example
//  should print: `[1, 11, 34, 52, 61]`