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

app.listen(PORT, () => console.log(`App is listening on ${PORT}`));