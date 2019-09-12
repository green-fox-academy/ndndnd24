'use strict';

const errorMessage = document.querySelector('#errorMessage');
const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch('/send', {
    method: 'POST',
    body: JSON.stringify({ username: username.value, password: password.value }),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
    .then(content => {
      // console.log(content);
      if (content == 'in') {
        window.open('https://media1.tenor.com/images/1dd03671ab0311a6ec446dd1ce4d91a9/tenor.gif?itemid=6103373', '_self')
      } else {
        errorMessage.textContent = `Incorrect username/password`;
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