'use strict';

const divContent = document.querySelector('div');
const form = document.querySelector('form');
const urlContent = document.querySelector('#url');
const aliasContent = document.querySelector('#alias');

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch('/api/links', {
    method: 'POST',
    body: JSON.stringify({ url: urlContent.value, alias: aliasContent.value }),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
    .then(content => {
      // console.log(content);
      if (content === 'nowai') {
        divContent.textContent = `Your alias is already in use!`;
        divContent.style.color = "red";
      } else {
        divContent.textContent = `Your URL is aliased to ${content[0].alias} and your secret code is ${content[0].secretCode}.`;
        divContent.style.color = "black";
        form.reset();
      }
    });
});
