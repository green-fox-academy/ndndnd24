'use strict';

export class Usable {
    status: string;

    constructor() {
        this.status = 'I\'m not used at all';
    }

    public use() {
        this.status = 'Now, I was used at least once.';
        return this.status;
    }
}

let firstUsable = new Usable();

console.log(firstUsable.status);
console.log(firstUsable.use());