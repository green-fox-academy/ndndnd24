'use strict';

let lineCount: number = 9;
let spaceCount: number = Math.floor(lineCount / 2);
let lineTurn: number = spaceCount + 1;
let empty: string = ' ';
let emptyEven: string = '';
let star: string = '*';
let empty2: string = ' ';
let star2: string = '*';
let even: string = '';

if (lineCount % 2 == 0) {
    for (emptyEven; emptyEven.length < (spaceCount); emptyEven += ' ') {
    }
    for (star; star.length < (lineTurn * 2 - 1); star += '**') {
        emptyEven = emptyEven.substring(0, emptyEven.length - 1);
        console.log(emptyEven + star);
    }
    even = star;
    even = even.substring(0, even.length - 2);
    console.log(even);
    for (star2; star2.length < star.length - 4; star2 += '*') {
    }
    for (empty2; empty2.length < lineTurn; empty2 += ' ') {
        console.log(empty2 + star2);
        star2 = star2.substring(0, star2.length - 2);
    }
}

else {
    for (empty; empty.length <= (spaceCount); empty += ' ') {
    }
    for (star; star.length < (lineTurn * 2); star += '**') {
        empty = empty.substring(0, empty.length - 1);
        console.log(empty + star);
    }

    for (star2; star2.length < star.length - 4; star2 += '*') {
    }
    for (empty2; empty2.length < lineTurn; empty2 += ' ') {
        console.log(empty2 + star2);
        star2 = star2.substring(0, star2.length - 2);
    }
}



