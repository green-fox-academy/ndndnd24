'use strict';

let chessSize: number = 8;
let even: string ='';
let odd: string = '';
let i: number = 1;
let a: number = -1;
let b: number = -1;


for (i; (i <= chessSize / 2); i++) {
    for (even; even.length < chessSize; even += ' ') {
        a++;
        a++;
        for (even; even.length < a; even += '%') {
        }
    }
    console.log(even);
    for (odd; odd.length < chessSize; odd += '%') {
        b++;
        b++;
        for (odd; odd.length < b; odd += ' ') {
        }
    }
    console.log(odd);
}