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
})

app.get('/showall', (req, res) => {
  connection.query(
    `SELECT * FROM login;`, (err, rows) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.json(rows);
      }
    }
  )
})

app.post('/send', (req, res) => {
  const inputUsername = req.body.username;
  const inputPassword = req.body.password;
  if (inputPassword && inputUsername) {
    connection.query(
      `SELECT password FROM login WHERE username = ?;`, inputUsername, (err, rows) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          if (rows.length > 0) {
            if (rows[0].password == inputPassword) {
              res.json('in')
            } else {
              res.json('incorrect');
            }
          } else {
            res.json('incorrect');
          }
        }
      }
    )
  } else {
    res.sendStatus(400);
  }
})

app.get('/reg', (req, res) => {
  res.render('register');
})

app.get('/forgot', (req, res) => {
  res.render('forgot');
})

app.post('/newuser', (req, res) => {
  const inputUsername = req.body.username;
  const inputPassword = req.body.password;
  if (inputPassword && inputUsername) {
    connection.query(
      `SELECT username FROM login WHERE username = ?;`, inputUsername, (err, rows) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          if (rows.length > 0) {
            res.json('incorrect')
          } else {
            connection.query(
              `INSERT INTO login (username, password) VALUES (?,?);`,
              [inputUsername, inputPassword], (err, resp) => {
                if (err) {
                  console.log(err);
                  res.sendStatus(500);
                } else {
                  // console.log(rows)
                  res.json(inputUsername);
                }
              }
            )
          }
        }
      }
    )
  } else {
    res.sendStatus(400);
  }
})

app.post('/show', (req, res) => {
  const inputUsername = req.body.username;
  if (inputUsername) {
    connection.query(
      `SELECT password FROM login WHERE username = ?;`, inputUsername, (err, rows) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          if (rows.length > 0) {
            res.json(rows);
          } else {
            res.json('incorrect');
          }
        }
      }
    )
  } else {
    res.sendStatus(400);
  }
})

module.exports = app;