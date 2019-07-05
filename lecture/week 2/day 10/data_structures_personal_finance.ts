/*We are going to represent our expenses in a list containing integers.

Create a list with the following items.
500, 1000, 1250, 175, 800 and 120
Create an application which solves the following problems.
    How much did we spend ?
    Which was our greatest expense ?
    Which was our cheapest spending ?
    What was the average amount of our spendings ?*/

'use strict';

function overallSpending(input: number[]) {
    let sumOfSpending: number = 0;
    for (let i: number = 0; i < input.length; i++) {
        sumOfSpending = sumOfSpending + input[i];
    }
    return sumOfSpending;
}

function greatestExpense(input: number[]) {
    let greatestAmount: number = input[0];
    for (let i: number = 0; i < input.length; i++) {
        if (input[i] > greatestAmount) {
            greatestAmount = input[i];
        }
    }
    return greatestAmount;
}

function cheapestExpense(input: number[]) {
    let greatestAmount: number = input[0];
    for (let i: number = 0; i < input.length; i++) {
        if (input[i] < greatestAmount) {
            greatestAmount = input[i];
        }
    }
    return greatestAmount;
}

function averageSpending(input: number[]) {
    let averageSpent: number = overallSpending(input) / input.length;
    return averageSpent;
}



function financeHelper(input: number[]) {
    console.log('Your total spending: ' + overallSpending(input));
    console.log('Your greatest expense: ' + greatestExpense(input));
    console.log('Your cheapest expense: ' + cheapestExpense(input));
    console.log('Your average expense: ' + averageSpending(input));
}


//overallSpending([500, 1000, 1250, 175, 800, 120])
//greatestExpense([500, 1000, 1250, 175, 800, 120])
//cheapestExpense([500, 1000, 1250, 175, 800, 120])
//averageSpending([500, 1000, 1250, 175, 800, 120])

financeHelper([500, 1000, 1250, 175, 800, 120]);