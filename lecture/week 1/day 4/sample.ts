const pi: number = 3.14;
let times: number = 10;
let myName: string = ("Dávid");

console.log(pi);
console.log(times);
console.log(myName);

let itCanBeUndefined: number;

console.log(itCanBeUndefined);
console.log (myName + 1);

console.log (1 + 1);
console.log (5 - 4);
console.log (2 * 2);
console.log (6 / 2);
console.log (2 ** 3);

times = 15;

console.log (times);

let sentence1: boolean = true;
let sentence2: boolean = false;

console.log (sentence1);
console.log (!sentence2);

console.log (sentence1 && sentence2);
console.log (sentence1 && !sentence2);
console.log (sentence1 || sentence2);
console.log (sentence1 || !sentence2);

let a: number = 1;
let b: number = 2;
let c: number = 3;

let isItEqual = (a + b) == c;
console.log(typeof isItEqual);

let temparature: number = 5;

if (temparature > 30) {
    console.log ("It is goddamn hot!");
}
else {
    console.log("It is not goddamn hot!");
}

if(temparature < 10) {
    console.log ("It is goddamn cold!");
}

if ((true && true) || (false &&true)) {
    console.log("Whaaaat??");
}

let num: number = 50;

if (num < 25) {
    console.log ("Small number");
}
else if(25 <= num && num < 50) {
    console.log ("Medium number");
}
else if(50 <= num && num < 75) {
    console.log ("Big number");
}
else {
    console.log ("Huge number");
}

console.log ("not");

let wTimes : number = 0;
while (wTimes < 10) {
    console.log ("not", wTimes);
    wTimes ++;
}

for (let iterator: number = 0; iterator < 100; iterator++) {
    console.log ("FakeTaxi", iterator);
}







