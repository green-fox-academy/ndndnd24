'use strict';

const express = require('express');

const app = express();
const PORT = 3009;

const mysql = require('mysql');

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'almafa',
    database: 'reddit'
});

conn.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Connection established');
});

app.get('/hello', (req, res) => {
    // console.log('Hello world');
    res.send('Hello world');
});

app.use(express.json());

app.listen(PORT, () => console.log(`App is istening on ${PORT}`));