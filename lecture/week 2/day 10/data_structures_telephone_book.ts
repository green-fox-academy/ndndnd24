'use strict';

/*Create an application which solves the following problems.

What is John K.Miller's phone number?
Whose phone number is 307 - 687 - 2982 ?
Do we know Chris E.Myers' phone number?*/



let thePhoneBook: any = {
    'William A.Lathan': '405 - 709 - 1865',
    'John K.Miller': '402 - 247 - 8568',
    'Hortensia E.Foster': '606 - 481 - 6467',
    'Amanda D.Newland': '319 - 243 - 5613',
    'Brooke P.Askew': '307 - 687 - 2982',
}

function taskOne(thePhoneBook: any) {
    let printKeyTwo: any = Object.keys(thePhoneBook);
    let searchedKeyTwo: any = "John K.Miller";
    for (let indexThree: number = 0; indexThree < Object.keys(thePhoneBook).length; indexThree++) {
        if (searchedKeyTwo == printKeyTwo[indexThree]) {
            return thePhoneBook[printKeyTwo[indexThree]];
        }
    }
}

function taskTwo(thePhoneBook: any) {
    let keyValues: any[] = Object.keys(thePhoneBook);
    for (let i: number = 0; i < Object.keys(thePhoneBook).length; i++) {
        if (thePhoneBook[keyValues[i]] == '307 - 687 - 2982') {
            return keyValues[i];
        }
    }
}


function taskThree(thePhoneBook: any) {
    let foundIt: boolean = false;
    let printKey: any = Object.keys(thePhoneBook);
    let searchedKey: any = "Chris E.Myers";
    for (let i: number = 0; i < Object.keys(thePhoneBook).length; i++) {
        if (searchedKey == printKey[i]) {
            foundIt = true;
            return 'Yes';
        } else {
            return 'No';
        }
    }
}


function phoneBook(thePhoneBook) {
    console.log('John K.Miller\'s phone number is: ' + taskOne(thePhoneBook));
    console.log('The number 307 - 687 - 2982 belongs to: ' + taskTwo(thePhoneBook));
    console.log('Do we know the number of Chris E. Myers? ' + taskThree(thePhoneBook));
}

phoneBook(thePhoneBook)