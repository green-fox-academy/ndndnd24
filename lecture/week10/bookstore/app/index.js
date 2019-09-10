'use strict';

const express = require('express');
const fetch = require('node-fetch');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'almafa',
  database: 'bookstore'
})

let savedCategory = '';
let savedPublisher = '';
let savedPriceLower = '';
let savedPriceGreater = '';

app.set('view engine', 'ejs');
app.use(express.static('./assets'))

connection.connect(err => {
  if (err) {
    console.log(err);
    res.sendStatus(500);
    return;
  }
  console.log('Connection established');
})

app.get('/titles', (req, res) => {
  res.render('titles');
})

app.get('/books', (req, res) => {
  res.render('books');
})

app.get('/filter', (req, res) => {
  if (req.query.category) {
    savedCategory = req.query.category;
  }
  if (req.query.publisher) {
    savedPublisher = req.query.publisher;
  }
  if (req.query.plt) {
    savedPriceLower = req.query.plt;
  }
  if (req.query.pgt) {
    savedPriceGreater = req.query.pgt;
  }
  res.render('filter');
})

app.get('/api/filter', (req, res) => {
  console.log([savedCategory, savedPublisher, savedPriceLower, savedPriceGreater]);

  connection.query(
    `SELECT book_mast.book_price, book_mast.book_name, author.aut_name, category.cate_descrip, publisher.pub_name 
        FROM book_mast, author, category, publisher 
        WHERE book_mast.aut_id = author.aut_id 
        AND book_mast.cate_id = category.cate_id 
        AND book_mast.pub_id = publisher.pub_id 
        AND category.cate_descrip = ?
        AND publisher.pub_name =  ?
        AND book_mast.book_price < ?
        AND book_mast.book_price > ?;`, [savedCategory, savedPublisher, savedPriceLower, savedPriceGreater],
    (err, rows) => {
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


app.get('/api/titles', (req, res) => {
  connection.query(
    'SELECT book_name FROM book_mast;', (err, rows) => {
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

app.get('/api/books', (req, res) => {
  connection.query(
    `SELECT book_mast.book_price, book_mast.book_name, author.aut_name, category.cate_descrip, publisher.pub_name 
        FROM book_mast, author, category, publisher 
        WHERE book_mast.aut_id = author.aut_id 
        AND book_mast.cate_id = category.cate_id 
        AND book_mast.pub_id = publisher.pub_id;`,
    (err, rows) => {
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

module.exports = app;