'use strict';

const express = require('express');

const app = express();
const PORT = 3001;

let mysql = require('mysql');

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'almafa',
    database: 'bookstore',  //ide az kell, amit megadtunk neki mysql-ben nevet
});

conn.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Connection established');
});

conn.end();

app.use(express.json());

// app.get('/titles', (res, req) => {

// });

app.listen(PORT, () => console.log(`App is listening on ${PORT}`));

