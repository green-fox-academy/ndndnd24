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

let stringToShow = '';

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

app.post('/api/links', express.urlencoded(), (req, res) => {
  let inputUrl = req.body.url;
  let inputAlias = req.body.alias;
  let secretCode = Math.floor(Math.random() * 9000) + 1000;
  stringToShow = `Your URL is aliased to ${inputAlias} and your secret code is ${secretCode}.`
  connection.query(
    `SELECT alias FROM aliaser;`, (err, rows) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      } else {
        let isItUnique = true;
        for (let i = 0; i < rows.length; i++) {
          if (rows[i].alias === inputAlias) {
            isItUnique = false;
          }
        }
        if (isItUnique === false) {
          stringToShow = `Your alias is already in use!`;
          res.render('index');
        } else {
          connection.query(
            `INSERT INTO aliaser (url, alias, secretCode) VALUES (?,?,?);`,
            [inputUrl, inputAlias, secretCode],
            (err, rows) => {
              if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
              } else {
                res.render('index');
              }
            }
          )
        }
      }
    }
  )
})

app.get('/message', (req, res) => {
  res.json(stringToShow);
})

module.exports = app;