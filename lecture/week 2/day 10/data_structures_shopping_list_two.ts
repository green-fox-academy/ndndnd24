'use strict';

let prices: any = {
    'Milk': 1.07,
    'Rice': 1.59,
    'Eggs': 3.14,
    'Cheese': 12.6,
    'Apples': 2.31,
    'Tomato': 2.58,
    'Potato': 1.75,
    'Onion': 1.10,
    'Chicken Breasts': 9.40,
}

let bob: any = {
    'Milk': 3,
    'Rice': 2,
    'Eggs': 2,
    'Cheese': 1,
    'Apples': 1,
    'Tomato': 2,
    'Potato': 1,
    'Chicken Breasts': 4,
}

let alice: any = {
    'Rice': 1,
    'Eggs': 5,
    'Apples': 1,
    'Tomato': 10,
    'Chicken Breasts': 2,
}

/*How much does Bob pay?
How much does Alice pay?
Who buys more Rice?
Who buys more Potato?
Who buys more different products?
Who buys more products? (piece)*/

function bobPay(prices, bob, alice) {
    let sum: number = 0;
    let price: number = 0;
    for (let i: number = 0; i < Object.keys(bob).length; i++) {
        let printKeyPrice: any[] = Object.keys(prices);
        let printKeyBob: any[] = Object.keys(bob);
        let searchedKeyBob: any = printKeyBob[i];
        for (let indexThree: number = 0; indexThree < Object.keys(prices).length; indexThree++) {
            if (searchedKeyBob == printKeyPrice[indexThree]) {
                price = prices[printKeyPrice[indexThree]];
                sum = sum + price * bob[printKeyPrice[indexThree]];
            }
        }
    }
    return sum;
}

function alicePay(prices, bob, alice) {
    let sum: number = 0;
    let price: number = 0;
    for (let i: number = 0; i < Object.keys(alice).length; i++) {
        let printKeyPrice: any[] = Object.keys(prices);
        let printKeyBob: any[] = Object.keys(alice);
        let searchedKeyBob: any = printKeyBob[i];
        for (let indexThree: number = 0; indexThree < Object.keys(prices).length; indexThree++) {
            if (searchedKeyBob == printKeyPrice[indexThree]) {
                price = prices[printKeyPrice[indexThree]];
                sum = sum + price * alice[printKeyPrice[indexThree]];
            }
        }
    }
    return sum;
}

function rice(prices, bob, alice) {
    let printKeyBob: any = Object.keys(bob);
    let searchedKeyBob: any = "Rice";
    let riceBob: number = 0;
    let riceAlice: number = 0;
    for (let indexThree: number = 0; indexThree < Object.keys(bob).length; indexThree++) {
        if (searchedKeyBob == printKeyBob[indexThree]) {
            riceBob = bob[printKeyBob[indexThree]];
        }
    }
    let printKeyAlice: any = Object.keys(alice);
    let searchedKeyAlice: any = "Rice";
    for (let indexThree: number = 0; indexThree < Object.keys(alice).length; indexThree++) {
        if (searchedKeyAlice == printKeyAlice[indexThree]) {
            riceAlice = alice[printKeyAlice[indexThree]];
        }
    }
    if (riceBob > riceAlice) {
        return 'Bob';
    } else {
        return 'Alice';
    }
}

function potato(prices, bob, alice) {
    let printKeyBob: any = Object.keys(bob);
    let searchedKeyBob: any = "Potato";
    let potatoBob: number = 0;
    let potatoAlice: number = 0;
    for (let indexThree: number = 0; indexThree < Object.keys(bob).length; indexThree++) {
        if (searchedKeyBob == printKeyBob[indexThree]) {
            potatoBob = bob[printKeyBob[indexThree]];
        }
    }
    let printKeyAlice: any = Object.keys(alice);
    let searchedKeyAlice: any = "Potato";
    for (let indexThree: number = 0; indexThree < Object.keys(alice).length; indexThree++) {
        if (searchedKeyAlice == printKeyAlice[indexThree]) {
            potatoAlice = alice[printKeyAlice[indexThree]];
        }
    }
    if (potatoBob > potatoAlice) {
        return 'Bob';
    } else {
        return 'Alice';
    }
}

function different(prices, bob, alice) {
    if (Object.keys(bob).length > Object.keys(alice).length) {
        return 'Bob';
    } else {
        return 'Alice';
    }
}

function moreProducts(prices, bob, alice) {
    let keyValuesBob: any[] = Object.keys(bob);
    let sumBob: number = 0;
    let printValuesBob: any[] = [];
    for (let index: number = 0; index < Object.keys(bob).length; index++) {
        printValuesBob[index] = bob[keyValuesBob[index]];
        sumBob = sumBob + printValuesBob[index];
    }
    let keyValuesAlice: any[] = Object.keys(alice);
    let sumAlice: number = 0;
    let printValuesAlice: any[] = [];
    for (let index: number = 0; index < Object.keys(alice).length; index++) {
        printValuesAlice[index] = alice[keyValuesAlice[index]];
        sumAlice = sumAlice + printValuesAlice[index];
    }
    if (sumAlice > sumBob) {
        return 'Alice';
    } else {
        return 'Bob';
    }
}

function daApplication(prices, bob, alice) {
    console.log('Bob pays $' + bobPay(prices, bob, alice));
    console.log('Alice pays $' + alicePay(prices, bob, alice));
    console.log(rice(prices, bob, alice) + ' buys more rice');
    console.log(potato(prices, bob, alice) + ' buys more potato');
    console.log(different(prices, bob, alice) + ' buys more different types of products');
    console.log(moreProducts(prices, bob, alice) + ' buys more pieces of products');
}

daApplication(prices, bob, alice);