'use strict';

// Create Sharpie class
// We should know about each sharpie their color(which should be a string), width(which will be a floating point number), inkAmount(another floating point number)
// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount



export default class Sharpie {
    color: string;
    width: number;
    private inkAmount: number = 100;

    constructor(color: string, width: number) {
        this.color = color;
        this.width = width;
    }

    public use(inkAmount): any[] {
        return [this.color, this.width, this.inkAmount - inkAmount];
    }
}

let sharpie = new Sharpie('black', 43);

console.log(sharpie);

console.log(sharpie.use(10));

