
const mainContent = document.querySelector('main');
const helloWorld = "Hello world!"

fetch('/posts')
    .then(res => res.text())
    .then(content => mainContent.innerHTML = content);