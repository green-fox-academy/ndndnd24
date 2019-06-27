'use strict';

let lineCount: number = 7;
let spaceCount: number = lineCount / 2 + 1;
let empty: string = ' ';
let star: string = '*';

for (empty; empty.length < (spaceCount); empty += ' ') { 
}
for (star; star.length < (lineCount + (lineCount)); star += '**') {
    console.log(empty + star);
    spaceCount = spaceCount - 1;
    empty = empty.substring(0, empty.length - 1);
}

for (star; star.length < (lineCount); star += '*') { 
}
for (let empty: string = ' '; empty.length < (spaceCount + (spaceCount)); star += ' ') {
    console.log(empty + star);
    spaceCount = spaceCount + 1;
    star = star.substring(0, star.length - 2);
}


//let lineCount: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is