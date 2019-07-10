'use strict';

// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

class Counter {
    private integer: number = 0;

    constructor(integer: number) {
        this.integer = integer;
    }

    public add(input): number {
        this.integer = this.integer + input;
        return this.integer;
    }

    public addOne(): number {
        this.integer++;
        return this.integer;
    }

    public get(): string {
        let num: number = this.integer;
        let a: string = num.toString();
        return a;
    }

    public reset(): number {
        this.integer = 0;
        return this.integer;
    }
}
let counter = new Counter(0);

console.log(counter.add(15));
console.log(counter.addOne());
console.log(counter.get());
console.log(counter.reset());