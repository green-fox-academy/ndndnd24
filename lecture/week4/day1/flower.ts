'use strict';

class Flower {
    color: string;
    waterLvl: number;

    constructor(color: string, waterLvl: number) {
        this.color = color;
        this.waterLvl = waterLvl;
    }

    flowerNeedsWater(): void {
        if (this.waterLvl < 5) {
            console.log(`The ${this.color} flower needs water`);
        } else {
            console.log(`The ${this.color} flower doesn't need water`);
        }
    }

    wateringFlower(watering: number) {
        return (watering * 0.75);
    }
}

export default Flower;