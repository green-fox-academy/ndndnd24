'use strict';

// Reuse your Sharpie class
// Create SharpieSet class
// it contains a list of Sharpie
// countUsable() -> sharpie is usable if it has ink in it
// removeTrash() -> removes all unusable sharpies

import Sharpie from './sharpie'

class SharpieSet {
    sharpies: Sharpie[] = [];

    countUsable(): any {
        let inkAmount: any = this.sharpies[2];
        if (inkAmount > 0) {
            return inkAmount;
            //return 'It is usable';
        } else {
            return inkAmount;
            //return 'It is NOT usable';
        }
    }

    removeThrash() {

    }

    constructor() {

    }
}

let sharpieSet = new SharpieSet();

console.log(sharpieSet.countUsable());

