'use strict';

// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';
let todoTextMy: string = 'My todo:\n';
let todoTextDownload: string = ' - Download games\n';
let todoTextDiablo: string = '      - Diablo';

todoText = todoTextMy.concat(todoText).concat(todoTextDownload).concat(todoTextDiablo);
console.log(todoText);