'use strict';

const password = document.querySelector('#password');
const username = document.querySelector('#username');
const form = document.querySelector("form");

form.addEventListener('submit', e => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status >= 200 && xhr.status < 300) {
                alert('Thanks!');
            } else {
                console.log('Crap');
            }
        }
    };
    xhr.open('POST', '/send');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({ password: password.value, username: username.value }));
    form.reset();
});

function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}