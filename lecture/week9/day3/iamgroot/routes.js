const express = require('express');
const app = express();

app.use(express.json());

const errorMessage = {
    error: 'I am Groot!'
}

app.post('/groot', (req, res) => {
    const { inputMessage } = req.body;
    if (inputMessage === "") {
        res.status(400).json(errorMessage);
        // res.json(errorMessage);
        // res.sendStatus(400);
        // return errorMessage;
    }
    res.json({
        recieved: inputMessage,
        translated: 'I am Groot!',
    });
});

module.exports = app;