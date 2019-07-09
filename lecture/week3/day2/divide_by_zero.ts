'use strict';

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divideZero(input: number): number {
    if (input === 0) {
        throw Error('fail');
    }
    return 10 / input;
}

try {
    console.log(divideZero(0));
} catch (e) {
    console.log(e.message);
}
