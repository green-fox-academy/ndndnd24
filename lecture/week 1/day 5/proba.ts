'use strict';

let lineCount: number = 14;
let star: string = '*';
let empty: string = '';
let a : number = lineCount;

for (star; star.length <= (lineCount * 2); star += '**') {
    a--;
    for (empty; empty.length < a; empty += ' ') {    
    }
    console.log(empty + star);
    empty = '';
}