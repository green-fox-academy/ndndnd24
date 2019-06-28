'use strict';

let lineCount: number = 6;
let percent: string = '%';
let empty: string = '';
let before: string = '';
let after: string = '';

for (after; after.length < (lineCount - 3); after += ' ') { 
}
for (percent; percent.length < lineCount; percent += '%') {
}
console.log(percent);
for (empty; empty.length < (lineCount - 1); empty += ' ') {
}
for (before; before.length < (lineCount - 2); before += ' ') {
    console.log('%' + before + '%' + after + '%');
    after = after.substring(0, after.length - 1);
}
console.log(percent);