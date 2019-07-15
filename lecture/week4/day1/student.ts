'use strict';

import Person from './person';

class Student extends Person {
    previousOrganisation: string;
    skippedDays: number;

    constructor(name?: string, age?: number, gender?: string, previousOrganisation = 'School of life', skippedDays = 0) {
        super(name, age, gender);
        this.previousOrganisation = previousOrganisation;
        this.skippedDays = skippedDays;
    }

    getGoal(): void {
        console.log('My goal is: Be a junior software developer.');
    }

    introduce(): void {
        console.log(`Hi, I'm ${this.name} a ${this.age} year old ${this.gender} from ${this.previousOrganisation} who skipped ${this.skippedDays} days from the course already.`);
    }

    skipDays(numberOfDays: number): void {
        this.skippedDays += numberOfDays;
    }
}

export default Student;