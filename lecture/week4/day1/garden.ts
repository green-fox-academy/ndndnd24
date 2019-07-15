'use strict';

import Tree from './tree';
import Flower from './flower';

class Garden {
    trees: Tree[];
    flowers: Flower[];
    waterInput: number;

    constructor(trees: Tree[] = [], flowers: Flower[] = [], waterInput?: number) {
        this.trees = trees;
        this.flowers = flowers;
        this.waterInput = waterInput;
    }

    addNewTree(trees: Tree): void {
        this.trees.push(trees);
    }

    addNewFlower(flowers: Flower): void {
        this.flowers.push(flowers)
    }

    infoTrees(): void {
        for (let i: number = 0; i < this.trees.length; i++) {
            this.trees[i].treeNeedsWater();
        }
    }

    infoFlowers(): void {
        for (let i: number = 0; i < this.flowers.length; i++) {
            this.flowers[i].flowerNeedsWater();
        }
    }


    watering(waterInput: number) {
        console.log(`Watering with ${waterInput}`);

        let x: number = 0;
        for (let i: number = 0; i < this.flowers.length; i++) {
            if (this.flowers[i].waterLvl < 5) {
                x++;
            }
        }
        for (let i: number = 0; i < this.trees.length; i++) {
            if (this.trees[i].waterLvl < 10) {
                x++;
            }
        }
        x = waterInput / x;
        for (let i: number = 0; i < this.flowers.length; i++) {
            if (this.flowers[i].waterLvl < 5) {
                this.flowers[i].waterLvl = this.flowers[i].wateringFlower(x);
            }
        }
        for (let i: number = 0; i < this.trees.length; i++) {
            if (this.trees[i].waterLvl < 10) {
                this.trees[i].waterLvl += this.trees[i].wateringTree(x);
            }
        }
    }
}

export default Garden;