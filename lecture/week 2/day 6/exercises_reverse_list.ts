'use strict';

let numList: number[] = [3, 4, 5, 6, 7].map(function(i){
    return 10 - i;
})
console.log(numList);

let numListLoop: number[] = [3, 4, 5, 6, 7];
let neededValue: number = -4;

for (let index: number = 0; index < numListLoop.length; index++) {
    numListLoop[index] = numListLoop[index] - neededValue;
    neededValue = neededValue + 2;
} 
console.log(numListLoop);


// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`