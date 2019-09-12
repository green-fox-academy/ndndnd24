'use strict';

const errorMessage = document.querySelector('#errorMessage');
const form = document.querySelector('form');
const username = document.querySelector('#username');

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch('/show', {
        method: 'POST',
        body: JSON.stringify({ username: username.value }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
        .then(content => {
            if (content == 'incorrect') {
                errorMessage.textContent = `This username doesn't exist`;
            } else {
                errorMessage.textContent = `Your password: ${content[0].password}`;
            }
        });
});