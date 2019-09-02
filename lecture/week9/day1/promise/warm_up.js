'use strict';

// Using setTimeout, print the string 'TIMED OUT!' after 300ms.

// » To print these instructions again, run: promise - it - wont - hurt print
// » To execute your program in a test environment, run: promise - it - wont - hurt run program.js
// » To verify your program, run: promise - it - wont - hurt verify program.js
// » For help run: promise - it - wont - hurt help

// setTimeout(() => {
//     console.log('hello');
// }, 3000);


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('TIMED OUT!'), 300);
});

myPromise.then(result => {
    console.log(result);
})