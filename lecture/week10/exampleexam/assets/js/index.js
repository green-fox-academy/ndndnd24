'use strict';

console.log('im here');
const divContent = document.querySelector('div');

fetch('/message')
  .then(res => res.json())
  .then(content => divContent.innerHTML = content);