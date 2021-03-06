'use strict';

const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:3002/titles');
const bodySelect = document.querySelector('body');

xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            let result = xhr.responseText;
            let parsedResult = JSON.parse(result);
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
}

xhr.send();

console.log('request has been sent');