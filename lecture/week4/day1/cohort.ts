'use strict';

import Mentor from './mentor';
import Student from './student';

class Cohort {
    cohortName: string;
    students: Student[];
    mentors: Mentor[];

    constructor(cohortName: string, students: Student[] = [], mentors: Mentor[] = []) {
        this.cohortName = cohortName;
        this.students = students;
        this.mentors = mentors;
    }

    addStudent(students: Student): void {
        this.students.push(students);
    }

    addMentor(mentors: Mentor): void {
        this.mentors.push(mentors);
    }

    info(): void {
        console.log(`The ${this.cohortName} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`);
    }
}

export default Cohort;