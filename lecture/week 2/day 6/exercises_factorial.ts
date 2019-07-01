'use strict';

let input: number = 5;

function factorio(value: number) {
    let sum: number = 1;
    for (let index: number = 1; index <= input; index++) {
        sum = sum * index;
    }
    console.log(sum);
}

factorio(input);



// -  Create a function called `factorio`
//    that returns it's input's factorial