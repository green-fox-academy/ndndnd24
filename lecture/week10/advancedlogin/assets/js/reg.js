'use strict';

const errorMessage = document.querySelector('#errorMessage');
const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const divContent = document.querySelector('#container')

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch('/newuser', {
        method: 'POST',
        body: JSON.stringify({ username: username.value, password: password.value }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
        .then(content => {
            if (content == 'incorrect') {
                errorMessage.textContent = `That username is already taken`;
                errorMessage.style.color = 'red';
            } else {
                // console.log(content);
                errorMessage.textContent = `User '${content}' created`;
                errorMessage.style.color = 'black';
            }
        });
});

function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}