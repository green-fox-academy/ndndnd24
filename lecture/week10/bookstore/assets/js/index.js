'use strict';

// console.log('asd');
const mainContent = document.querySelector('main');

// fetch('')
//     .then(res => res.text())
//     .then(content => mainContent.innerHTML = content);

function createDiv(inputValue) {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = inputValue;
    return newDiv;
}

fetch('/titles')
    .then(res => res.json())
    .then(content => content.forEach(element => mainContent.appendChild(createDiv(element.book_name))));