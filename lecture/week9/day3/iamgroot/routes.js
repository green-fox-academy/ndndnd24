const express = require('express');
const app = express();

app.use(express.json());

app.post('/groot', (req, res) => {
    const { inputMessage } = req.body;
    if (inputMessage === "") {
        res.json({
            error: 'I am Groot!',
        })
    }
    res.json({
        recieved: inputMessage,
        translated: 'I am Groot!',
    });
});

module.exports = app;