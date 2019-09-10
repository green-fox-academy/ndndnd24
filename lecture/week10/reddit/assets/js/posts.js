'use static';

const mainContent = document.querySelector('main');

function createNewUl(id, title, url, timestamp, score) {
  const newUl = document.createElement('ul');
  newUl.appendChild(createNewLi(id));
  newUl.appendChild(createNewLi(title));
  newUl.appendChild(createNewLi(url));
  newUl.appendChild(createNewLi(timestamp));
  newUl.appendChild(createNewLi(score));
  return newUl;
}

function createNewLi(innerContent) {
  const newLi = document.createElement('li');
  newLi.innerHTML = innerContent;
  return newLi;
}

fetch('/api/posts')
  .then(res => res.json())
  .then(content => content.forEach(element => mainContent.appendChild(createNewUl(element.id, element.title, element.url, element.timestamp, element.score))));