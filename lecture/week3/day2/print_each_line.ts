// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"


declare function require(path: string): any;

const fs = require('fs');

let content
try {
    //throw Error('missing semicolon at Home :)');
    content = fs.readFileSync('my-file.txt', 'utf-8');
    //console.log(typeof content);
}
catch (e) {
    //console.log(e.message);
    console.log("Unable to read file: my-file.txt");
}

//content = content.replace('\n', 'there is a new line here');

//let lines: string[] = content.split('\n');
console.log(content);