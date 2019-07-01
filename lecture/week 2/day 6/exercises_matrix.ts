'use strict';

let matrix: number[][] = [];

let size: number = 4;
for (let index: number = 0; index < size; index++) {
  let row: number[] = [];
  for (let innerIndex: number = 0; innerIndex < size; innerIndex++) {
    if(index === (size - innerIndex - 1)) {
      row.push(1);
    } else {
      row.push(0);
    }
  }
  matrix.push(row);
  console.log(row);
}
//console.log(matrix);



// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array