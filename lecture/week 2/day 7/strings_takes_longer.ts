'use strict';

// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

quote = quote.replace('It you', 'It always takes longer than you');

console.log(quote);


let quoteConcat: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

let quoteConcatBegins: string = '';
let quoteConcatMiddle: string = 'always takes longer than';
let quoteConcatEnd: string = '';

for (let index: number = 0; index < (quoteConcat.indexOf("It") + 3); index++) {
    quoteConcatBegins += quoteConcat.charAt(index);
}

for (let indexTwo: number = (quoteConcat.indexOf("you") - 1); indexTwo < quoteConcat.length; indexTwo++) {
    quoteConcatEnd += quoteConcat.charAt(indexTwo);
}

quoteConcat = quoteConcatBegins.concat(quoteConcatMiddle).concat(quoteConcatEnd);

console.log(quoteConcat);
