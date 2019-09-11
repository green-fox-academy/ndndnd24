'use strict';

const mainContent = document.querySelector('main');

function createNewDiv(inputUser, inputPass) {
    let newDiv = document.createElement('div');
    newDiv.innerHTML = inputUser + ' - ' + inputPass;
    return newDiv;
}

fetch('/forgot/show')
    .then(res => res.json())
    .then(content => content.forEach(e => mainContent.appendChild(createNewDiv(e.username, e.password))));