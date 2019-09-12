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
app.use(express.json());

connection.connect(err => {
  if (err) {
    console.log(err);
    res.sendStatus(500);
    return;
  }
  console.log('Connection established');
})

let stringToShow = ['', '', ''];

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

app.get('/api/links', (req, res) => {
  connection.query(
    `SELECT id, url, alias, hitCount FROM aliaser;`, (err, rows) => {
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

app.get('/a/:alias', (req, res) => {
  const currentAlias = req.params.alias;
  connection.query(
    `SELECT alias FROM aliaser;`, (err, rows) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      } else {
        let isItUnique = false;
        for (let i = 0; i < rows.length; i++) {
          if (rows[i].alias === currentAlias) {
            isItUnique = true;
          }
        }
        if (isItUnique === false) {
          res.sendStatus(404);
        } else {
          connection.query(
            `UPDATE aliaser SET hitCount = hitCount + 1 WHERE alias = ?;`, currentAlias, (err, rows) => {
              if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
              } else {
                connection.query(
                  `SELECT * FROM aliaser WHERE alias = ?;`, currentAlias, (err, rows) => {
                    if (err) {
                      console.log(err);
                      res.sendStatus(500);
                      return;
                    } else {
                      res.json(rows);
                    }
                  }
                )
              }
            }
          )
        }
      }
    }
  )
})

app.post('/api/links', express.urlencoded(), (req, res) => {
  let inputUrl = req.body.url;
  let inputAlias = req.body.alias;
  let secretCode = Math.floor(Math.random() * 9000) + 1000;
  stringToShow = ['', '', ''];
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
          stringToShow = [`Your alias is already in use!`, inputUrl, inputAlias];
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
                stringToShow = [`Your URL is aliased to ${inputAlias} and your secret code is ${secretCode}.`, '', ''];
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
  stringToShow = ['', '', ''];
})

app.delete('/api/links/:id', express.urlencoded(), (req, res) => {
  const currentId = req.params.id;
  const inputSecretCode = req.body.secretCode;
  connection.query(
    `SELECT id FROM aliaser;`, (err, rows) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      } else {
        let doesIdExist = false;
        for (let i = 0; i < rows.length; i++) {
          if (rows[i].id == currentId) {
            doesIdExist = true;
          }
        }
        if (doesIdExist === false) {
          // res.json('not exist');
          res.sendStatus(404);
        } else {
          connection.query(
            `SELECT secretCode FROM aliaser WHERE id = ?;`, currentId, (err, rows) => {
              if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
              } else {
                if (rows[0].secretCode == inputSecretCode) {
                  connection.query(
                    `DELETE FROM aliaser WHERE id = ?;`, currentId, (err, rows) => {
                      if (err) {
                        console.log(err);
                        res.sendStatus(500);
                        return;
                      } else {
                        // res.json('deleted')
                        res.sendStatus(203);
                      }
                    }
                  )
                } else {
                  // res.json('wrong secret code')
                  res.sendStatus(403);
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