'use strict';

const divContent = document.querySelector('div');
const urlContent = document.getElementById('url');
const aliasContent = document.getElementById('alias');

fetch('/message')
  .then(res => res.json())
  .then(content => { divContent.innerHTML = content[0]; urlContent.value = content[1]; aliasContent.value = content[2] });