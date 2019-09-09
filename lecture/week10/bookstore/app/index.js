'use strict';

const express = require('express');
const fetch = require('node-fetch');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'almafa',
    database: 'bookstore'
})

app.set('view engine', 'ejs');
app.use(express.static('./assets'))

connection.connect(err => {
    if (err) {
        console.log(err);
        resizeBy.sendStatus(400);
        return;
    }
    console.log('Connection established');
})

app.get('', (req, res) => {
    connection.query(
        'SELECT * FROM author;', (err, rows) => {
            if (err) {
                console.log(err);
                return;
            } else {
                res.json(rows);
            }
        }
    )
})

// const li = document.createElement('li');

function titlesOfTheBooks(data) {
    for (let i = 0; i < data.length; i++) {
        let divElement = document.createElement('div');
        divElement.textContent = data[i].book_name;
        bodySelect.appendChild(divElement);
    }
}


app.get('/titles', (req, res) => {
    connection.query(
        'SELECT book_name FROM book_mast;', (err, rows) => {
            // 'SELECT book_mast.book_price, book_mast.book_name, author.aut_name, category.cate_descrip, publisher.pub_name FROM book_mast, author, category, publisher WHERE book_mast.aut_id = author.aut_id AND book_mast.cate_id = category.cate_id AND book_mast.pub_id = publisher.pub_id;', (err, rows) => {
            if (err) {
                console.log(err);
            } else {
                // console.log(rows);
                res.json(rows);
            }
        }
    )
})

module.exports = app;