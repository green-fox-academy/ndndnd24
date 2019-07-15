'use strict';

import Flower from './flower';
import Tree from './tree';
import Garden from './garden';

let yellow = new Flower('yellow', 0);
let blue = new Flower('blue', 0);
let purple = new Tree('purple', 0);
let orange = new Tree('orange', 0);

let beauty = new Garden();
beauty.addNewFlower(yellow);
beauty.addNewFlower(blue);
beauty.addNewTree(purple);
beauty.addNewTree(orange);

beauty.infoFlowers();
beauty.infoTrees();

beauty.watering(40);

beauty.infoFlowers();
beauty.infoTrees();

beauty.watering(70);

beauty.infoFlowers();
beauty.infoTrees();