'use strict';

let lineCount: number = 6;
let star: string = '*';
let empty: string = '';
let a : number = lineCount;
let star2: string = '';
let empty2: string = ' ';
let b : number = (lineCount * 2);

for (star; star.length <= lineCount; star += '**') {
    a--;
    a--;
    for (empty; empty.length < a; empty += ' ') {    
    }
    console.log(empty + star);
    empty = '';
}
if (lineCount % 2 == 0) {
    star = star.substring(0, star.length - 2);
    console.log(empty + star);
}

for (empty2; empty2.length <= (lineCount); empty2 += ' ') {
    b--;
    b--;
    for (star2; star2.length < b - 1; star2 += '*') {    
    }
    console.log(empty2 + star2);
    star2 = '';
}