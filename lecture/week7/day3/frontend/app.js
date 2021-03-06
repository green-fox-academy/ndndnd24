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

app.get('/greeter', (req, res) => {
    let greeter = {};
    if (req.query.name && req.query.title) {
        greeter = {
            welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
        };
    } else {
        if (req.query.name) {
            greeter = {
                error: "Please provide a title!"
            }
        } else if (req.query.title) {
            greeter = {
                error: "Please provide a name!"
            };
        } else {
            greeter = {
                error: "Please provide a name and a title!"
            };
        }
    }
    res.send(greeter);
});

app.get('/appenda/:appendable', (req, res) => {
    let appenda = {
        appended: (req.params.appendable + 'a')
    };
    res.send(appenda);
});

app.post('/dountil/:action', (req, res) => {
    let solution = 0;
    let response = {};
    if (typeof req.body.until === "number" && req.body.until !== undefined && req.body.until !== '') {
        if (req.params.action === 'sum') {
            for (let i = 1; i <= req.body.until; i++) {
                solution += i;
            };
            response = {
                result: solution
            }
        } else if (req.params.action === 'factor') {
            solution = 1;
            for (let i = 1; i <= req.body.until; i++) {
                solution = solution * i;
            };
            response = {
                result: solution
            }
        } else {
            response = {
                error: "No path!"
            };
        }
    } else {
        response = {
            error: "Please provide a number!"
        };
    }
    res.json(response);
});

app.listen(PORT, () => console.log(`App is listening on ${PORT}`));