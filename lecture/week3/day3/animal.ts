'use strict';

// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

class Animal {
    hunger: number;
    thirst: number;

    constructor(hunger: number = 50, thirst: number = 50) {
        this.hunger = hunger;
        this.thirst = thirst;
    }

    public eat(): number {
        return (this.hunger - 1);
    }

    public drink(): number {
        return (this.thirst - 1);
    }

    public play(): number[] {
        return [this.thirst + 1, this.hunger + 1];
    }
}

let animal = new Animal();

console.log(animal.eat());
console.log(animal.drink());
console.log(animal.play());


