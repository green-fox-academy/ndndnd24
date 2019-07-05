//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending
'use strict';

function bubble(input: number[]) {
    let ascendingLine: number[] = [];
    let x = 0;
    let currentNumber: number = input[0];
    let forLength: number = input.length;
    for (let index: number = 0; index < forLength; index++) {
        for (let i: number = 0; i < input.length; i++) {
            if (currentNumber >= input[i]) {
                currentNumber = input[i];
                x = i;
            }
        }
        input.splice(x, 1);
        ascendingLine.push(currentNumber);
        currentNumber = input[0];
    }
    console.log(ascendingLine);
}


function advancedBubble(input: number[], howToOrder: boolean) {
    if (howToOrder = false) {
        let ascendingLine: number[] = [];
        let x = 0;
        let currentNumber: number = input[0];
        let forLength: number = input.length;
        for (let index: number = 0; index < forLength; index++) {
            for (let i: number = 0; i < input.length; i++) {
                if (currentNumber >= input[i]) {
                    currentNumber = input[i];
                    x = i;
                }
            }
            input.splice(x, 1);
            ascendingLine.push(currentNumber);
            currentNumber = input[0];
        }
        console.log(ascendingLine);
    } else {
        let ascendingLine: number[] = [];
        let x = 0;
        let currentNumber: number = input[0];
        let forLength: number = input.length;
        for (let index: number = 0; index < forLength; index++) {
            for (let i: number = 0; i < input.length; i++) {
                if (currentNumber <= input[i]) {
                    currentNumber = input[i];
                    x = i;
                }
            }
            input.splice(x, 1);
            ascendingLine.push(currentNumber);
            currentNumber = input[0];
        }
        console.log(ascendingLine);
    }
}



//  Example:
bubble([4, 34, 12, 24, 9, 5]);
advancedBubble([34, 12, 24, 9, 5], true);
//  should print [5, 9, 12, 24, 34]
//console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]