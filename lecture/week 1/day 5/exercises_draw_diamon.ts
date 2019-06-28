'use strict';

let lineCount: number = 7;
let spaceCount: number = Math.floor (lineCount / 2);
let lineTurn: number = spaceCount + 1;
let empty: string = ' ';
let star: string = '*';
let empty2: string = ' ';
let star2: string = '*';

for (empty; empty.length < (spaceCount); empty += ' ') { 
}
for (star; star.length < (lineTurn + (lineTurn)); star += '**') {
    console.log(empty + star);
    empty = empty.substring(0, empty.length - 1);
}

for (star2; star2.length < star.length - 4; star2 += '*') { 
}
for (empty2; empty2.length < lineTurn; empty2 += ' ') {
    console.log(empty2 + star2);
    star2 = star2.substring(0, star2.length - 2);
}