'use strict';

const mainContent = document.querySelector('main');

fetch('/')
  .then(res => res.json())
  .then(content => mainContent.innerHTML = content);