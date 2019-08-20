'use strict';

const express = require('express');

const PORT = 3002;
const path = require('path')
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'almafa',
    database: 'bookstore',
});


const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('static'));

connection.connect(err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Connection established');
});

app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname, './views/index.html'));
});


app.get('/titles', (req, res) => {
    connection.query('select book_mast.book_price, book_mast.book_name, author.aut_name, category.cate_descrip, publisher.pub_name from book_mast, author, category, publisher where book_mast.aut_id = author.aut_id and book_mast.cate_id = category.cate_id and book_mast.pub_id = publisher.pub_id;', (err, rows) => {
        // console.log(err);
        res.json(rows);
    });
    // let kiskutya = 'asdasdasd';
    // res.json(kiskutya);
});

app.listen(PORT, () => console.log(`App is listening on ${PORT}`));