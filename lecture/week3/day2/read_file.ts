'use strict';

function factorial(base: number): number {
    if (base < 0) {
        throw Error('Please go to math class first!')
    }
    let returnValue: number = 1;
    //return;
    for (let i: number = 2; i <= base; i++) {
        returnValue *= i;
    }
    return returnValue;
}

function printPretty(toPrettify: number): string {
    return `the pretty number is ${toPrettify}`;
}

let toPrettify: any = {};

try {
    console.log(printPretty(factorial(-3)));
} catch (e) {
    console.log(typeof e);
    console.log(e.message);
}



// declare function require(path: string): any;

// const fs = require('fs');

// let content
// try {
//     //throw Error('missing semicolon at Home :)');
//     content = fs.readFileSync('fruits.txt', 'utf-8');
//     //console.log(typeof content);
// }
// catch (e) {
//     console.log(e.message);
//     content = '';
// }

// //content = content.replace('\n', 'there is a new line here');

// let lines: string[] = content.split('\n');
//console.log(lines.length);