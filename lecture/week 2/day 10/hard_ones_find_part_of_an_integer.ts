'use strict';
//  Create a function that takes a number and an array of numbers as a parameter
//  Returns the indices of the numbers in the array of which the first number is a part of
//  Or returns an empty list if the number is not part of any of the numbers in the array

function subint(searchedValue: number, input: number[]) {
    let returnArray: number[] = [];
    for (let i: number = 0; i < input.length; i++) {
        if (input[i] - searchedValue == 0) {
            returnArray.push(i);
        } else if ((input[i] - searchedValue) % 10 == 0) {
            returnArray.push(i);
        } else if ((input[i] - searchedValue * 10) < 10 && (input[i] - searchedValue * 10) >= 0) {
            returnArray.push(i);
        }
    }
    console.log(returnArray);
}



// Example
subint(1, [1, 11, 34, 52, 61]);
// should print: `[0, 1, 4]`
subint(9, [1, 11, 34, 52, 61]);
// should print: '[]'