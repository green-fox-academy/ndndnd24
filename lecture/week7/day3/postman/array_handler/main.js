'use strict';

const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/arrays', (req, res) => {
    let solution = 0;
    let response = {
        error: "Please provide what to do with the numbers!"
    };
    if (req.body.what !== undefined && req.body.numbers !== undefined && req.body.numbers[0]) {
        if (req.body.what === 'sum') {
            for (let i = 0; i < req.body.numbers.length; i++) {
                solution += req.body.numbers[i];
            }
            response = {
                result: solution
            };
        } else if (req.body.what === 'multiply') {
            solution = 1;
            for (let i = 0; i < req.body.numbers.length; i++) {
                solution = solution * req.body.numbers[i];
            }
            response = {
                result: solution
            };
        } else if (req.body.what === 'double') {
            solution = [];
            for (let i = 0; i < req.body.numbers.length; i++) {
                solution[i] = req.body.numbers[i] * 2;
            }
            response = {
                result: solution
            };
        }
    }
    res.json(response);
});

app.listen(PORT, () => console.log(`App is listening on ${PORT}`));
