'use strict'

const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;


app.use(express.json());
app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
    let doubling = {}
    if (req.query.input) {
        doubling = {
            received: req.query.input,
            result: (req.query.input * 2)
        };
    } else {
        doubling = {
            error: "Please provide an input!"
        };
    }
    res.send(doubling);
});

app.listen(PORT, () => console.log(`App is listening on ${PORT}`));