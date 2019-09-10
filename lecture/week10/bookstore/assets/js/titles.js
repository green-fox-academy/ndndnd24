'use strict';

const mainContent = document.querySelector('main');

function createDiv(inputValue) {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = inputValue;
    return newDiv;
}

fetch('/api/titles')
    .then(res => res.json())
    .then(content => content.forEach(element => mainContent.appendChild(createDiv(element.book_name))));