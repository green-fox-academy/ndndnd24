//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once
'use strict';

function unique(input: number[]) {
    let arrayUnique: number[] = [];
    arrayUnique.push(input[0]);
    let isItUnique: boolean;
    for (let index: number = 0; index < input.length; index++) {
        let x: number = arrayUnique.length;
        for (let indexUnique: number = 0; indexUnique < x; indexUnique++) {
            if (input[index] - arrayUnique[indexUnique] == 0) {
                isItUnique = false;
                x = indexUnique;
            } else {
                isItUnique = true;
            }

        }
        if (isItUnique == true) {
            arrayUnique.push(input[index]);
        }
    }
    console.log(arrayUnique);
}

unique([1, 11, 34, 11, 52, 61, 1, 34])