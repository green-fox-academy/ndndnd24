'use strict';

class Tree {
    color: string;
    waterLvl: number;

    constructor(color: string, waterLvl: number) {
        this.color = color;
        this.waterLvl = waterLvl;
    }

    treeNeedsWater(): void {
        if (this.waterLvl < 10) {
            console.log(`The ${this.color} tree needs water`);
        } else {
            console.log(`The ${this.color} tree doesn't need water`);
        }
    }

    wateringTree(watering: number) {
        return (watering * 0.4);
    }
}

export default Tree;