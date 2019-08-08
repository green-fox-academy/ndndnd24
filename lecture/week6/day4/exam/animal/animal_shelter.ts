'use strict';

import { Animal } from './animal';
import { Cat } from './animal';
import { Dog } from './animal';
import { Parrot } from './animal';

export default class AnimalShelter {
    budget: number;
    animals: Animal[];
    adoptersName: string[];

    constructor() {
        this.animals = []
        this.budget = 50;
        this.adoptersName = [];
    }

    rescue(animal: Animal): number {
        this.animals.push(animal);
        return this.animals.length;
    }

    heal(): number {
        for (let i: number = 0; i < this.animals.length; i++) {
            if (this.animals[i].isHealthy) {
            } else {
                if (this.animals[i].healCost <= this.budget) {
                    this.animals[i].heal();
                    this.budget -= this.animals[i].healCost;
                    i = this.animals.length;
                    return 1;
                } else {
                    i = this.animals.length;
                    return 0;
                }
            }
        }
        return 0;
    }

    addAdopter(name: string): void {
        this.adoptersName.push(name);
    }

    findOwner(): void {
        let randomAnimal: number = Math.floor(Math.random() * this.animals.length);
        let randomOwner: number = Math.floor(Math.random() * this.adoptersName.length);
        while (this.animals[randomAnimal].isAdoptable() === false) {
            randomAnimal = Math.floor(Math.random() * this.animals.length);
        }
        this.animals[randomAnimal].ownerName = this.adoptersName[randomOwner];
        this.animals.splice(randomAnimal, 1);
        this.adoptersName.splice(randomOwner, 1);
    }

    earnDonation(amount: number): number {
        this.budget += amount;
        return this.budget;
    }

    toString(): string {
        let status: string = '';
        status = 'Budget: ' + this.budget + '€,\n';
        status += 'There are ' + this.animals.length + ' animal(s) and ' + this.adoptersName.length + ' potential adopter(s)\n';
        this.animals.forEach(e => status += e.toString());
        return status;
    }
}

let shelter: AnimalShelter = new AnimalShelter();

let bajusz: Cat = new Cat('Bajusz');
let cirmi: Cat = new Cat('Cirmi');
let kormi: Cat = new Cat('Kormi');
let buksi: Dog = new Dog('Buksi');
let morzsi: Dog = new Dog('Morzsi');
let bundas: Dog = new Dog('Bundás');
let rex: Dog = new Dog('Rex');
let zero: Dog = new Dog('Zéró');
let pamacs: Dog = new Dog('Pamacs');
let pintyoke: Parrot = new Parrot('Pintyőke');
let karcsi: Parrot = new Parrot('Karcsi');

shelter.rescue(bajusz);
shelter.rescue(cirmi);
shelter.rescue(kormi);
shelter.rescue(buksi);
shelter.rescue(morzsi);
shelter.rescue(bundas);
shelter.rescue(rex);
shelter.rescue(zero);
shelter.rescue(pamacs);
shelter.rescue(pintyoke);
shelter.rescue(karcsi);

shelter.earnDonation(35);

shelter.addAdopter('Sanyi');
shelter.addAdopter('Vikci');
shelter.addAdopter('Béla');
shelter.addAdopter('Laller');
shelter.addAdopter('Csoki');

console.log(shelter.toString());

console.log(shelter.heal());
console.log(shelter.heal());
console.log(shelter.heal());
console.log(shelter.heal());
console.log(shelter.heal());
console.log(shelter.heal());
console.log(shelter.heal());
console.log(shelter.heal());
console.log(shelter.heal());

console.log(shelter.toString());

shelter.findOwner();
shelter.findOwner();
shelter.findOwner();
shelter.findOwner();
shelter.findOwner();

console.log(shelter.toString());