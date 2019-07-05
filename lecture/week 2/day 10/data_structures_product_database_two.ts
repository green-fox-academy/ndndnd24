'use strict';

let map: any = {
    'Eggs': 200,
    'Milk': 200,
    'Fish': 400,
    'Apples': 150,
    'Bread': 50,
    'Chicken': 550,
}

/*Which products cost less than 201? (just the name)
Which products cost more than 150 ? (name + price)*/

function lessMoney(map) {
    let keyValues: any[] = Object.keys(map);
    let printValues: any[] = [];
    for (let index: number = 0; index < Object.keys(map).length; index++) {
        printValues[index] = map[keyValues[index]];
    }
    let greatestNumber: number = 201;
    let lessList: any[] = [];
    for (let i: number = 0; i < Object.keys(map).length; i++) {
        if (map[keyValues[i]] < greatestNumber) {
            lessList.push(keyValues[i]);
        }
    }
    return lessList;
}

function moreMoney(map) {
    let keyValues: any[] = Object.keys(map);
    let printValues: any[] = [];
    for (let index: number = 0; index < Object.keys(map).length; index++) {
        printValues[index] = map[keyValues[index]];
    }
    let greatestNumber: number = 150;
    let lessList: any[] = [];
    for (let i: number = 0; i < Object.keys(map).length; i++) {
        if (map[keyValues[i]] > greatestNumber) {
            lessList.push(keyValues[i]);
        }
    }
    return lessList;
}

function daApplication(map) {
    console.log('The following products cost less than 201: ' + lessMoney(map));
    console.log('The following products cost more than 150: ' + moreMoney(map));
}

daApplication(map);