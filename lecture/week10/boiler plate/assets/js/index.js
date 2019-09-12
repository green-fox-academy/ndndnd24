'use strict';

const mainContent = document.querySelector('main');
// const form = document.querySelector('form');
// const urlContent = document.querySelector('#url');
// const aliasContent = document.querySelector('#alias');

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch('/api/links', {
        method: 'POST',
        body: JSON.stringify({ url: urlContent.value, alias: aliasContent.value }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
        .then(content => console.log(content));
});