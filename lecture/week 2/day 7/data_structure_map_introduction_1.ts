'use strict';

let map: any = {
    97: 'a',
    98: 'b',
    99: 'c',
    65: 'A',
    66: 'B',
    67: 'C',
}

if (Object.keys(map).length == 0) {
    console.log("Empty");
} else {
    console.log("Not empty");
}
console.log(Object.keys(map));

let keyValues: any[] = Object.keys(map);

let printValues: any[] = [];

for (let index: number = 0; index < Object.keys(map).length; index++) {
    printValues[index] = map[keyValues[index]];
}

console.log(printValues);

map["68"] = 'D';

console.log(Object.keys(map).length);

console.log(map["99"]);

delete map["97"];

if (!("100" in map) == true) {
    console.log("No value for key 100");
} else {
    console.log('Value for key 100 exists');
}

console.log(map);


let delValues: any[] = Object.keys(map);
for (let indexTwo: number = 0; indexTwo < delValues.length; indexTwo++) {
    delete map[delValues[indexTwo]];
}


console.log(map);

/*We are going to play with maps.Feel free to use the built -in methods where possible.

Create an empty map where the keys are integers and the values are characters

Print out whether the map is empty or not

Add the following key - value pairs to the map

Key	Value
97	a
98	b
99	c
65	A
66	B
67	C
Print all the keys

Print all the values

Add value D with the key 68

Print how many key - value pairs are in the map

Print the value that is associated with key 99

Remove the key - value pair where with key 97

Print whether there is an associated value with key 100 or not

Remove all the key - value pairs*/