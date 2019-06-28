'use strict';

let lineCount: number = 6;
let percent: string = '%';
let empty: string = '';

for (percent; percent.length <= lineCount; percent += '%') {
}
console.log(percent);
for (empty; empty.length < (lineCount - 1); empty += ' ') {
}
for (let i: number = 1; i < (lineCount - 1); i ++) {
    console.log('%' + empty + '%');
}
console.log(percent);