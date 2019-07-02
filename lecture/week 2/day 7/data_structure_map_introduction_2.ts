'use strict';

let map: any = {
    '978 - 1 - 60309 - 452 - 8': 'A Letter to Jo',
    '978 - 1 - 60309 - 459 - 7': 'Lupus',
    '978 - 1 - 60309 - 444 - 3': 'Red Panda and Moon Bear',
    '978 - 1 - 60309 - 461 - 0': 'The Lab',
}

let out: any = '';
let keyValues: any[] = Object.keys(map);
for (let i: number = 0; i < Object.keys(map).length; i++) {
    out += map[keyValues[i]];
    out += ' (ISBN: ';
    out += keyValues[i];
    out += ')';
    out += '\n';
}
console.log(out)

delete map["978 - 1 - 60309 - 444 - 3"];


let lookForValue: any = Object.keys(map);
let delValue: any = "The Lab";
for (let index: number = 0; index < Object.keys(map).length; index++) {
    if (delValue == map[lookForValue[index]]) {
        delete map[lookForValue[index]];
    }
}

map["978 - 1 - 60309 - 450 - 4"] = 'They Called Us Enemy';
map["978 - 1 - 60309 - 453 - 5"] = 'Why Did We Trust Him?';


let foundIt: boolean = false;
let printKey: any = Object.keys(map);
let searchedKey: any = "478 - 0 - 61159 - 424 - 8";
for (let indexTwo: number = 0; indexTwo < Object.keys(map).length; indexTwo++) {
    if (searchedKey == printKey[indexTwo]) {
        foundIt = true;
    }
}
if (foundIt == true) {
    console.log('I found it!');
} else {
    console.log('I can\'t find it :(');
}

let printKeyTwo: any = Object.keys(map);
let searchedKeyTwo: any = "978 - 1 - 60309 - 453 - 5";
for (let indexThree: number = 0; indexThree < Object.keys(map).length; indexThree++) {
    if (searchedKeyTwo == printKeyTwo[indexThree]) {
        console.log(map[printKeyTwo[indexThree]]);
    }
}

/*Create a map where the keys are strings and the values are strings with the following initial values

Key	Value
978 - 1 - 60309 - 452 - 8	A Letter to Jo
978 - 1 - 60309 - 459 - 7	Lupus
978 - 1 - 60309 - 444 - 3	Red Panda and Moon Bear
978 - 1 - 60309 - 461 - 0	The Lab
Print all the key - value pairs in the following format

A Letter to Jo(ISBN: 978 - 1 - 60309 - 452 - 8)
Lupus(ISBN: 978 - 1 - 60309 - 459 - 7)
Red Panda and Moon Bear(ISBN: 978 - 1 - 60309 - 444 - 3)
The Lab(ISBN: 978 - 1 - 60309 - 461 - 0)
Remove the key - value pair with key 978 - 1 - 60309 - 444 - 3

Remove the key - value pair with value The Lab

Add the following key - value pairs to the map

Key	Value
978 - 1 - 60309 - 450 - 4	They Called Us Enemy
978 - 1 - 60309 - 453 - 5	Why Did We Trust Him ?
    Print whether there is an associated value with key 478 - 0 - 61159 - 424 - 8 or not

Print the value associated with key 978 - 1 - 60309 - 453 - 5*/