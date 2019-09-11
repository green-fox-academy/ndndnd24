'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'almafa',
    database: 'alias'
})

app.set('view engine', 'ejs');
app.use(express.static('./assets'));

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

app.get('/showall', (req, res) => {
    connection.query(
        `SELECT * FROM aliaser;`, (err, rows) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
            } else {
                res.json(rows);
            }
        }
    )
})

module.exports = app;