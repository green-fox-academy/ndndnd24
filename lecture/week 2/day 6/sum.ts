'use strict';

//let myName: string = "ND";
//let yourName: string = "Viktor";
//let hisName: string = "Márk";

let arrayName: string[] = ["Morzsi", "Liza", "Fürkész", "Riley"];

//console.log(myName);
//console.log(yourName);
//console.log(hisName);

//console.log(arrayName[0]);

//for (let i: number = 0; i < arrayName.length; i++) {
//    console.log(arrayName[i]);
//}

//arrayName.forEach (function (puppy) {
//   console.log(puppy);
//})

//console.log("------------------ before");
//let notSoAnyArray: [string, boolean] = ["szisza", true];

//let anyArray: any[] = ["ND", true, 42];

//console.log(anyArray);

//arrayName.splice(0, 1, "marks");

//console.log("------------------ after");

//arrayName.forEach (function (puppy) {
//    console.log(puppy);
//})

let doubled: number[] = [1, 2, 3, 4, 5].map(function(i) {
    return i ** 2;
})

console.log("------------------ duplázó");
console.log(doubled);

let odds: number[] = [1, 2, 3, 4, 5].filter(function(item) {
    return item % 2 !== 0;
})

console.log(odds);

//let magic: number[] = [];

//console.log(magic[-100]);

let arry1: number[] = [1, 2];
let arry2: number[] = [3, 4];

let arry3: number[] = [...arry1, ...arry2];
console.log(arry3);



