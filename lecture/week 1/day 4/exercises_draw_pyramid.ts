'use strict';

let lineCount: number = 4;
let spaceCount: number = lineCount -1;
let empty: string = ' ';

for (empty; empty.length < (spaceCount); empty += ' ') { 
}
for (let star: string = '*'; star.length < (lineCount + (lineCount)); star += '**') {
    console.log(empty + star);
    spaceCount = spaceCount - 1;
    empty = empty.substring(0, empty.length - 1);
}