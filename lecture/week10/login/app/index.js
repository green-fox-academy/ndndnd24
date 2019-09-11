'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'almafa',
    database: 'login'
})

let usernameForSave = '';
let passwordForSave = '';

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


app.get('/register', (req, res) => {
    res.render('register');
})

app.get('/forgot', (req, res) => {
    res.render('forgot');
})

app.get('/forgot/show', (req, res) => {
    connection.query(
        `SELECT username, password FROM login`, (err, rows) => {
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

// app.get('/change'), (req, res) => {
//     res.render('wrong');
// }

// app.post('/passchangefrom', (req, res) => {
//     usernameForSave = req.body.username;
// })

app.post('/new', express.urlencoded(), (req, res) => {
    usernameForSave = req.body.username;
    passwordForSave = req.body.password;
    connection.query(
        `SELECT username FROM login;`, (err, rows) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
            } else {
                let uniqueUsername = true;
                for (let i = 0; i < rows.length; i++) {
                    if (rows[i].username === usernameForSave) {
                        uniqueUsername = false;
                    }
                }
                if (uniqueUsername === false) {
                    res.render('notunique')
                } else {
                    connection.query(
                        `INSERT INTO login (username, password) VALUES (?,?);`,
                        [usernameForSave, passwordForSave],
                        (err, rows) => {
                            if (err) {
                                console.log(err);
                                res.sendStatus(500);
                                return;
                            } else {
                                res.render('thank');
                            }
                        }
                    )
                }
            }
        }
    )
})

app.post('/send', express.urlencoded(), (req, res) => {
    usernameForSave = req.body.username;
    passwordForSave = req.body.password;
    connection.query(
        `SELECT username FROM login;`, (err, rows) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
            } else {
                let doesUserExist = false;
                for (let i = 0; i < rows.length; i++) {
                    if (rows[i].username === usernameForSave) {
                        doesUserExist = true;
                    }
                }
                if (doesUserExist === false) {
                    res.render('wrong')
                } else {
                    connection.query(
                        `SELECT password FROM login WHERE username = ?;`, usernameForSave, (err, rows) => {
                            if (err) {
                                console.log(err);
                                res.sendStatus(500);
                                return;
                            } else {
                                if (passwordForSave === rows[0].password) {
                                    res.render('logedin')
                                } else {
                                    res.render('wrong');
                                }
                            }
                        }
                    )
                }
            }
        }
    )

})

module.exports = app;