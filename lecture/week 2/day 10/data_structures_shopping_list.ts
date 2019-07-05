'use strict';

/*We are going to represent a shopping list in a list containing strings.

Create a list with the following items.
Eggs, milk, fish, apples, bread and chicken
Create an application which solves the following problems.
Do we have milk on the list?
Do we have bananas on the list?*/


function shopping(lookedString: string, listOf: string[]) {
    let doWe: boolean = false;
    for (let i: number = 0; i < listOf.length; i++) {
        if (listOf[i] == lookedString) {
            doWe = true;
        }
    }
    if (doWe == true) {
        console.log('Do we have \'' + lookedString + '\' on the list? Yes');
    } else {
        console.log('Do we have \'' + lookedString + '\' on the list? No');
    }
}


shopping('Milk', ['Eggs', 'Milk', 'Fish', 'Apples', 'Bread', 'Chicken']);
shopping('Bananas', ['Eggs', 'Milk', 'Fish', 'Apples', 'Bread', 'Chicken']);