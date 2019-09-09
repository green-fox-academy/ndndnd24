'use strict';

const mainCOntent = document.querySelector('main');

fetch('/player')
    .then(res => res.text())
    .then(content => mainContent.innerHTML = content);