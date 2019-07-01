'use strict';

function printParams(...args) {
    args.forEach((arg) => {
        console.log(arg);
    });
}

printParams(123, 'Béla', true, 4, 12, 4, 12, 3, 12, 3, 12, 3, 4, 5, 54, 36, 45, 6);

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)*/
