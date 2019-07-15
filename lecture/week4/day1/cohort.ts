'use strict';

import Person from './person';

export class Cohort extends Person {
    cohortName: string;
    students: string[];
    mentors: string[];

    constructor(name?: string, age?: number, gender?: string, cohortName?: string, students?: string[], mentors?: string[]) {
        super(name, age, gender);
        this.cohortName = cohortName;
        this.students = students;
        this.mentors = mentors;
    }

    addStudent(students: string) {
        this.students.push(students);
    }

    addMentor(mentors: string) {
        this.mentors.push(mentors);
    }

    info() {
        console.log(`The ${this.cohortName} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`);
    }
}

export default Cohort;