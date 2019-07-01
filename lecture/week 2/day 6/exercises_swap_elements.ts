'use strict';

let abc: string[] = ["Arthur", "Boe", "Chloe"];
let def: string = abc[0];
abc [0] = abc [2];
abc [2] = def;


console.log(abc);

// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`