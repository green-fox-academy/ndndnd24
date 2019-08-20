'use strict';

// Why we need this XHR (html content)?
//   example of gallery, or imdb, retrieve data do not render on backend side
//   get information from a remote server without reload the page

// https://chain-chess.glitch.me

// How to do this?
// http overview
//   two computers, far away
//   connection has to be established
//   response sent back
//   response is processed

const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:3002/titles');
const bodySelect = document.querySelector('body');

xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            let result = xhr.responseText;
            // console.log(result);
            // console.log(typeof result);
            let parsedResult = JSON.parse(result);
            // console.log(typeof parsedResult);
            // console.log(parsedResult);
            // titlesOfTheBooks(parsedResult);
            tableOfTheBooks(parsedResult);
        }
        else {
            console.log('Something went wrong');
        }
    }
};

function titlesOfTheBooks(data) {
    for (let i = 0; i < data.length; i++) {
        let divElement = document.createElement('div');
        divElement.textContent = data[i].book_name;
        bodySelect.appendChild(divElement);
    }
}

function titlesOfTheBooksTrial(data, table) {
    for (let i = 0; i < data.length; i++) {
        let trElement = document.createElement('tr');

        let tdElement = document.createElement('td');
        tdElement.textContent = data[i].book_name;
        trElement.appendChild(tdElement);

        let tdElement2 = document.createElement('td');
        tdElement2.textContent = data[i].aut_name;
        trElement.appendChild(tdElement2);

        let tdElement3 = document.createElement('td');
        tdElement3.textContent = data[i].cate_descrip;
        trElement.appendChild(tdElement3);

        let tdElement4 = document.createElement('td');
        tdElement4.textContent = data[i].pub_name;
        trElement.appendChild(tdElement4);

        let tdElement5 = document.createElement('td');
        tdElement5.textContent = '$' + data[i].book_price;
        trElement.appendChild(tdElement5);

        table.appendChild(trElement);
    }
}

function tableOfTheBooks(data) {
    let createTable = document.createElement('table');
    bodySelect.appendChild(createTable);
    let createTr = document.createElement('tr');
    createTable.appendChild(createTr);
    let createTitle = document.createElement('th');
    let createAuthor = document.createElement('th');
    let createCategory = document.createElement('th');
    let createPublisher = document.createElement('th');
    let createPrice = document.createElement('th');
    createTitle.textContent = "Title";
    createTr.appendChild(createTitle);
    createAuthor.textContent = "Author";
    createTr.appendChild(createAuthor);
    createCategory.textContent = "Category";
    createTr.appendChild(createCategory);
    createPublisher.textContent = "Publisher";
    createTr.appendChild(createPublisher);
    createPrice.textContent = "Price";
    createTr.appendChild(createPrice);
    titlesOfTheBooksTrial(data, createTable);

    // for (let i = 0; i < data.length; i++) {
    //     let newTr = document.createElement('tr')
    //     createTable.appendChild(newTr);
    //     createTd.textContent = data[i].book_name;
    //     newTr.appendChild(createTd);

    // for (let j = 0; j < 5; j++) {
    //     createTable.appendChild(newTr);
    //     createTd.textContent = "asd" + j;
    //     newTr.appendChild(createTd);
    // }
}
// }

xhr.send();

console.log('request has been sent');

// API Keys
// Status codes