const express = require('express');
const fetch = require('node-fetch');
const mysql = require('mysql');
// const cookieParser = require('cookie-parser');

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'almafa',
    database: 'reddit'
});

app.set('view engine', 'ejs');
app.use(express.static('./assets'));

connection.connect(err => {
    if (err) {
        console.log(err);
        res.sendStatus(400);
        return;
    }
    console.log('Connection established');
});

app.get('/posts', (req, res) => {
    connection.query(
        'SELECT * from reddit;', (err, rows) => {
            res.json(rows)
        }
    )
    // res.status(200).json({ name: 'ND' });
    // res.render('index');
});

module.exports = app;