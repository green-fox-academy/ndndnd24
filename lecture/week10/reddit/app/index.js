'use strict';

const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'almafa',
  database: 'reddit'
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
  console.log('Connection estblished')
})

app.get('/hello', (req, res) => {
  res.json('hello world');
})

app.post('/posts', (req, res) => {
  const titleInput = req.body.titleInput;
  const urlInput = req.body.urlInput;
  if (!req.accepts('json')) {
    res.sendStatus(400);
    return;
  }
  connection.query(
    `INSERT INTO reddit (title, url) VALUES (?, ?);`, [titleInput, urlInput], (err, rows) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      } else {
        res.json('added');
      }
    })
})

app.get('/posts', (req, res) => {
  res.render('posts');
})

app.get('/api/posts', (req, res) => {
  connection.query(
    `SELECT * FROM reddit`, (err, rows) => {
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

app.put('/posts/:id/upvote', (req, res) => {
  const idNumber = req.params.id;
  connection.query(
    `UPDATE reddit SET score = score + 1 WHERE id = ?;`, idNumber, (err, rows) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      } else {
        res.json('upvoted');
      }
    })
});

app.put('/posts/:id/downvote', (req, res) => {
  const idNumber = req.params.id;
  connection.query(
    `UPDATE reddit SET score = score - 1 WHERE id = ?;`, idNumber, (err, rows) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      } else {
        res.json('downvoted');
      }
    })
});

app.delete('/posts/:id', (req, res) => {
  const idNumber = req.params.id;
  connection.query(
    `DELETE FROM reddit WHERE id = ?;`, idNumber, (err, rows) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      } else {
        res.json('deleted');
      }
    }
  )
})

app.put('/posts/:id', (req, res) => {
  const idNumber = req.params.id;
  const titleInput = req.body.titleInput;
  const urlInput = req.body.urlInput;
  if (!req.accepts('json')) {
    res.sendStatus(400);
    return;
  }
  connection.query(
    `UPDATE reddit SET title = ?, url = ? WHERE id = ?;`, [titleInput, urlInput, idNumber], (err, rows) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      } else {
        res.json('modified');
      }
    })
})

module.exports = app;
