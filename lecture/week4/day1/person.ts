'use strict';

class Person {
    name: string;
    age: number;
    gender: string;

    constructor(name = 'Jane Doe', age = 30, gender = "female") {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    introduce(): void {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}`);
    }

    getGoal(): void {
        console.log('My goal: Live for the moment!');
    }
}

export default Person;