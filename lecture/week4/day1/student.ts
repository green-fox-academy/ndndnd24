'use strict';

import Person from './person';

export class Student extends Person {
    previousOrganisation: string;
    skippedDays: number = 0;

    constructor(name?: string, age?: number, gender?: string, previousOrganisation: string = 'School of life', skippedDays: number = 0) {
        super(name, age, gender);
        this.previousOrganisation = previousOrganisation;
        this.skippedDays = skippedDays;
    }

    getGoal() {
        console.log('My goal is: Be a junior software developer.');
    }

    introduce() {
        console.log(`Hi, I'm ${this.name} a ${this.age} year old ${this.gender} from ${this.previousOrganisation} who skipped ${this.skippedDays} days from the course already.`);
    }

    skipDays(numberOfDays: number) {
        this.skippedDays += numberOfDays;
    }
}

export default Student;