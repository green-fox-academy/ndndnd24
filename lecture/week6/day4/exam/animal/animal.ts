'use strict';

export abstract class Animal {
    ownerName: string;
    isHealthy: boolean;
    healCost: number;
    petName: string = 'Animal';

    constructor(petName?: string) {
        this.ownerName = 'no owner';
        this.petName = petName;
        this.isHealthy = false;
    }

    heal(): void {
        this.isHealthy = true;
    }

    isAdoptable(): boolean {
        if (this.isHealthy) {
            return true;
        } else {
            return false;
        }
    }

    toString(): string {
        let status: string = '';
        if (this.isHealthy) {
            status = `${this.petName} is healthy, and adoptable\n`;
            return status;
        } else {
            status = `${this.petName} is not healthy (${this.healCost}€), and not adoptable\n`
            return status;
        }
    }
}


export class Cat extends Animal {
    healcost: number;

    constructor(petName?: string) {
        super(petName);
        this.healCost = Math.floor(Math.random() * 7);
    }
}

export class Dog extends Animal {
    healcost: number;

    constructor(petName?: string) {
        super(petName);
        this.healCost = Math.floor(Math.random() * 8) + 1;
    }
}
export class Parrot extends Animal {
    healcost: number;

    constructor(petName?: string) {
        super(petName);
        this.healCost = Math.floor(Math.random() * 7) + 4;
    }
}
