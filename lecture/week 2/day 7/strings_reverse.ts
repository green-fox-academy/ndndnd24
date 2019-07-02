'use strict';


// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;
let rev: string = '';

function reverse(reversed) {
    for (let index: number = 0; index <= reversed.length; index++) {
        rev += reversed.charAt(reversed.length - index);
    }
    console.log(rev);
}
reverse(reversed);

export = reverse;




