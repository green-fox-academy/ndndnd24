'use strict';

import Person from './person';

export class Sponsor extends Person {
    company: string;
    hiredStudents: number;

    constructor(name?: string, age?: number, gender?: string, company: string = 'Google', hiredStudents: number = 0) {
        super(name, age, gender);
        this.company = company;
        this.hiredStudents = hiredStudents;
    }

    getGoal() {
        console.log('My goal is: Hire brilliant junior software developers.');
    }

    introduce() {
        console.log(`Hi, I'm ${this.name} a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
    }

    hire() {
        this.hiredStudents++;
    }
}

export default Sponsor;