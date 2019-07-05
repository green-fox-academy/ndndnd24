'use strict';

let map: any = {
    'Eggs': 200,
    'Milk': 200,
    'Fish': 400,
    'Apples': 150,
    'Bread': 50,
    'Chicken': 550,
}

/*How much is the fish?
What is the most expensive product?
What is the average price?
How many products' price is below 300?
Is there anything we can buy for exactly 125?
What is the cheapest product?*/


function fish(map: any) {
    let printKeyTwo: any = Object.keys(map);
    let searchedKeyTwo: any = "Fish";
    for (let indexThree: number = 0; indexThree < Object.keys(map).length; indexThree++) {
        if (searchedKeyTwo == printKeyTwo[indexThree]) {
            return map[printKeyTwo[indexThree]];
        }
    }
}

function mostExpensive(map: any) {
    let keyValues: any[] = Object.keys(map);
    let printValues: any[] = [];
    for (let index: number = 0; index < Object.keys(map).length; index++) {
        printValues[index] = map[keyValues[index]];
    }
    let greatestNumber: number = printValues[0];
    for (let i: number = 0; i < printValues.length; i++) {
        if (printValues[i] > greatestNumber) {
            greatestNumber = printValues[i];
        }
    }
    for (let i: number = 0; i < Object.keys(map).length; i++) {
        if (map[keyValues[i]] == greatestNumber) {
            return keyValues[i];
        }
    }
}

function averagePrice(map: any) {
    let keyValues: any[] = Object.keys(map);
    let sum: number = 0;
    let printValues: any[] = [];
    for (let index: number = 0; index < Object.keys(map).length; index++) {
        printValues[index] = map[keyValues[index]];
        sum = sum + printValues[index];
    }
    return (Math.round(sum / Object.keys(map).length));
}

function belowMoney(map: any) {
    let keyValues: any[] = Object.keys(map);
    let printValues: any[] = [];
    for (let index: number = 0; index < Object.keys(map).length; index++) {
        printValues[index] = map[keyValues[index]];
    }
    let greatestNumber: number = 0;
    for (let i: number = 0; i < printValues.length; i++) {
        if (printValues[i] < 300) {
            greatestNumber++;
        }
    }
    return greatestNumber;
}

function exactlyMoney(map: any) {
    let keyValues: any[] = Object.keys(map);
    let printValues: any[] = [];
    for (let index: number = 0; index < Object.keys(map).length; index++) {
        printValues[index] = map[keyValues[index]];
    }
    for (let i: number = 0; i < Object.keys(map).length; i++) {
        if (map[keyValues[i]] == 125) {
            return 'Yes';
        } else {
            return 'No';
        }
    }
}

function cheapestProduct(map: any) {
    let keyValues: any[] = Object.keys(map);
    let printValues: any[] = [];
    for (let index: number = 0; index < Object.keys(map).length; index++) {
        printValues[index] = map[keyValues[index]];
    }
    let greatestNumber: number = printValues[0];
    for (let i: number = 0; i < printValues.length; i++) {
        if (printValues[i] < greatestNumber) {
            greatestNumber = printValues[i];
        }
    }
    for (let i: number = 0; i < Object.keys(map).length; i++) {
        if (map[keyValues[i]] == greatestNumber) {
            return keyValues[i];
        }
    }
}





function daApplication(map: any) {
    console.log('How much is the fish? That much: ' + fish(map));
    console.log('The most expensive product is: ' + mostExpensive(map));
    console.log('The average price is: ~' + averagePrice(map));
    console.log('There are ' + belowMoney(map) + ' products below 300');
    console.log('Is there anything we can buy for exactly 125? ' + exactlyMoney(map));
    console.log('The cheapest product is: ' + cheapestProduct(map));
}

daApplication(map);