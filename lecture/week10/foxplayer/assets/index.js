'use strict';

const mainCOntent = document.querySelector('main');

fetch('')
    .then(res => res.text())
    .then(content => mainContent.innerHTML = content);