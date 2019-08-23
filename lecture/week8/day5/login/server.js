'use strict';

const express = require('express');
const app = express();
const PORT = 3003;

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.post('/send', (req, res) => {
    console.log(`Username: ${req.body.username}`);
    console.log(`Password: ${req.body.password}`);
    res.send('okay!');
});

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
});