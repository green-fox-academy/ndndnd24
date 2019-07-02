'use strict';

export = {};

let single: string = 'single quotes';

let double: string = "double quotes";

let backTick: string = `Today is ${(100 ** 2) - 1}`;

console.log(single, double, backTick);

console.log(single.length);

console.log(single.toUpperCase().toLowerCase());

//toUpperCaseAtIndex("appletree", 3) -> "appLetree"
function toUpperCaseAtIndex(text: string, index: number): string {
    let prefix: string = text.slice(0, index);
    let replaceToUpperCase: string = text.charAt(index).toUpperCase();
    let suffix: string = text.slice(index + 1);
    return prefix.concat(replaceToUpperCase).concat(suffix);
}

console.log(toUpperCaseAtIndex("appletree", 5));

let lettersOfWord: string[] = 'hello create class'.split(' ');

console.log(lettersOfWord);

let greeting: string = 'hello create class create';

let greetingTheRightWay: string = greeting.replace('create', 'Create');

console.log(greetingTheRightWay);

let greetingTheRightWayTwo: string = greeting.replace(/create/g, 'Create'); //g stands for global - changes every c to C in this case

console.log(greetingTheRightWayTwo);

let textToSlice: string = "1234567890";
let spliced: string = textToSlice.slice(4, -3);
console.log(spliced);