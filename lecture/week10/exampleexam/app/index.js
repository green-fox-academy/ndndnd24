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

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/showall', (req, res) => {
  connection.query(
    `SELECT * FROM aliaser;`, (err, rows) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
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
      } else {
        res.json(rows);
      }
    }
  )
})

app.get('/a/:alias', (req, res) => {
  const currentAlias = req.params.alias;
  if (currentAlias) {
    res.sendStatus(400);
  }
  connection.query(
    `SELECT * FROM aliaser WHERE alias = ?;`, currentAlias, (err, rows) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        if (rows.length > 0) {
          connection.query(
            `UPDATE aliaser SET hitCount = hitCount + 1 WHERE alias = ?;`, currentAlias, (err, response) => {
              if (err) {
                console.log(err);
                res.sendStatus(500);
              } else {
                // console.log(rows[0].url)
                res.redirect(rows[0].url);
              }
            }
          )
        } else {
          res.sendStatus(404);
        }
      }
    }
  )
})

app.post('/api/links', (req, res) => {
  let inputUrl = req.body.url;
  let inputAlias = req.body.alias;
  let secretCode = Math.floor(Math.random() * 9000) + 1000;
  if (inputUrl && inputAlias) {
    connection.query(
      `SELECT alias FROM aliaser WHERE alias = ?;`, inputAlias, (err, rows) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          if (rows.length > 0) {
            res.json('nowai');
          } else {
            connection.query(
              `INSERT INTO aliaser (url, alias, secretCode) VALUES (?,?,?);`,
              [inputUrl, inputAlias, secretCode],
              (err, response) => {
                if (err) {
                  console.log(err);
                  res.sendStatus(500);
                } else {
                  connection.query(
                    `SELECT * FROM aliaser WHERE secretCode = ?;`, secretCode, (err, resp) => {
                      res.json(resp);
                    }
                  )
                }
              }
            )
          }
        }
      }
    )
  } else {
    es.sendStatus(400);
  }

})

app.delete('/api/links/:id', (req, res) => {
  const currentId = req.params.id;
  const inputSecretCode = req.body.secretCode;
  if (currentId == '' || inputSecretCode == '') {
    res.sendStatus(404);
  }
  connection.query(
    `SELECT id FROM aliaser;`, (err, rows) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
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
            `SELECT secretCode FROM aliaser WHERE id = ?;`, currentId, (err, response) => {
              if (err) {
                console.log(err);
                res.sendStatus(500);
              } else {
                if (rows[0].secretCode == inputSecretCode) {
                  connection.query(
                    `DELETE FROM aliaser WHERE id = ?;`, currentId, (err, resp) => {
                      if (err) {
                        console.log(err);
                        res.sendStatus(500);
                      } else {
                        // res.json('deleted')
                        res.sendStatus(204);
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