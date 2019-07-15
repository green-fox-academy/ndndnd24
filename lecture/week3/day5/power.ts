'use strict';

let counter: number = 0;
let output: number = 1;

function powerN(base: number, n: number) {
    if (base < 1) {
        console.log("Please give a bigger base number (minimal input number is 1)!");
    } else if (n < 1) {
        console.log("Please give a bigger power number (minimal input number is 1)!");
    } else {
        if (counter == n) {
            console.log('Outcome:');
            console.log(output);
        } else {
            output = output * base;
            counter++;
            console.log(output);
            console.log(counter);
            powerN(base, n);
        }
    }
}



console.log(powerN(861, 128));