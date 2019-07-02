'use strict';

export = {};

let person: any = {
    name: 'John',
    age: 21,
    friends: [],
    greeting: function () {
        console.log('Hi, my name is John :)')
    },
    plsDontHateMe: {
        name: 'John',
        age: 21,
        friends: [],
        greeting: function () {
            console.log('Hi, my name is John :)')
        },
    },
}

console.log(person.plsDontHateMe.age);

person.greeting();

console.log(Object.keys(person));

console.log(person["name"]);



let personCopyWithReference = person;

console.log(person);
person.name = "new Name";
console.log('new name of the personCopy', personCopyWithReference.name);

console.log(Object.keys(person));





