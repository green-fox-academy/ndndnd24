// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

let lines: string[] = [];

declare function require(path: string): any;

const fs = require('fs');

let content
try {
    //throw Error('missing semicolon at Home :)');
    content = fs.readFileSync('my-file.txt', 'utf-8');
    lines = content.split('\n');
    //console.log(typeof content);
}
catch (e) {
    //console.log(e.message);
    //console.log("0");
}

//content = content.replace('\n', 'there is a new line here');


console.log(lines.length);