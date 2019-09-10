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
        res.sendStatus(500);
        return;
    }
    console.log('Connection established');
})

app.get('/', (req, res) => {
    res.render('index');
})


app.get('/titles', (req, res) => {
    connection.query(
        'SELECT book_name FROM book_mast;', (err, rows) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
            } else {
                res.json(rows);
                // console.log(rows);
                // res.send(rows);
                // res.render('index');
            }
        }
    )
})

module.exports = app;