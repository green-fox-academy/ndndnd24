'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'almafa',
    database: 'reddit'
})

app.set('view engine', 'ejs');
app.use(express.static('./assets'));
app.use(express.json());

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
    res.json();
    res.redirect();
    res.sendStatus();
})

module.exports = app;