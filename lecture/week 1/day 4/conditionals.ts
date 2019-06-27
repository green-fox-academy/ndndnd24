let a: number = 13;

if (a === 13) {
    console.log('Wow! The value of the \'a\' variable is 13');
}

if (a === 8) {
    console.log('Wow! The value of the \'a\' variable is 8');
}

let b: number = 20;

if (b < 10) {
    console.log('Wow! The value of the \'b\' variable is lower than 10');
} else {
    console.log('Wow! The value of the \'b\' variable is higher than 10');
}

let c: number = 15;

if (c < 10) {
    console.log('Wow! The value of the \'c\' variable is lower than 10');    
} else if (c < 20) {
    console.log('Wow! The value of the \'c\' variable is higher than 10');
} else {
    console.log('Wow! The value of the \'c\' variable is higher than 10');
}

let thirsty: boolean = true;
let hungry: boolean = false;

if (thirsty && hungry) {
    console.log('Dunch time!');
} else if (thirsty || hungry) {
    console.log('Snack time!');
} else {
    console.log('No food for you!');
}
