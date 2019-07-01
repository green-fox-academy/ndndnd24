/*function greetFoxAlert() {
    alert('Hello Green Fox!');
}

greetFoxAlert();*/

function greetFoxLog() {
    console.log('Hello Green Fox!');
}

greetFoxLog();

//---------------------------------------------

function greetByName(name: string) {
    console.log('Well hi there,', name);
}

greetByName('Tojas');
greetByName('Barbi');

//---------------------------------------------

function greet(greet = 'Hi', name2 = 'pal') {
    console.log(greet, name2);
}

greet();
greet('Hey');
greet('Hello', 'Tojas');

//---------------------------------------------

function makeGreen(name3: string): string {
    let newName = `Green ${name3}`;
    return newName;
}

let name4 = makeGreen('Tojas');
greetByName('Whazzup ' + name4);

