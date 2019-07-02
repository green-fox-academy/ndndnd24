'use strict';

let emptyList: string[] = [];
console.log(emptyList.length);
emptyList.push("William");
if (emptyList.length == 0) {
    console.log("The list is empty");
} else {
    console.log("The list is not empty");
    console.log(emptyList.length);
    console.log(emptyList);
}
emptyList.push("John");
emptyList.push("Amanda");
console.log(emptyList.length);
console.log(emptyList[2]);
for (let index: number = 0; index < emptyList.length; index++) {
    console.log(emptyList[index]);
}
for (let index: number = 0; index < emptyList.length; index++) {
    console.log((index + 1) + ". " + emptyList[index]);
}
emptyList.splice(1, 1);
for (let index: number = 1; index <= emptyList.length; index++) {
    console.log(emptyList[(emptyList.length - index)]);
}
emptyList.splice(0, 2);
console.log(emptyList.length);
