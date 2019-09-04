const express = require('express');
const app = express();

app.use(express.json());

const errorMessage = {
    error: 'I am Groot!'
}

app.post('/groot', (req, res) => {
    const { inputMessage } = req.body;
    if (inputMessage === '') {
        res.status(400).json(errorMessage);
    }
    res.json({
        recieved: inputMessage,
        translated: 'I am Groot!',
    });
});

app.get('/yondu', (req, res) => {
    const distanceInput = req.query.distance;
    const timeInput = req.query.time;
    const speedInput = distanceInput / timeInput;
    if (distanceInput && timeInput) {
        res.json({
            distance: distanceInput,
            time: timeInput,
            speed: speedInput
        })
    } else {
        res.status(400).json(errorMessage);
    }
})

let ammo25 = 0;
let ammo30 = 0;
let ammo50 = 0;
let sStatus = 'empty';
let readiness = false;

app.get('/rocket', (req, res) => {
    res.json({
        caliber25: ammo25,
        caliber30: ammo30,
        caliber50: ammo50,
        shipstatus: sStatus + '%',
        ready: readiness
    })
})

app.get('/rocket', (req, res) => {
    const input = req.query.caliber;
    res.json(input);
})

app.get('/rocket/fill', (req, res) => {
    if (req.query.caliber && req.query.amount) {
        if (req.query.caliber === '.25') {
            ammo25 += Number(req.query.amount);
        } else if (req.query.caliber === '.30') {
            ammo30 += Number(req.query.amount);
        } else if (req.query.caliber === '.50') {
            ammo50 += Number(req.query.amount);
        } else {
            res.status(400).json({ caliber: 'doesn\'t exist, please provide .25/.30/.50' });
        }
        sStatus = ammo25 + ammo30 + ammo50;
        if (sStatus === 0) {
            sStatus = "empty"
        } else {
            sStatus = sStatus / 12500 * 100;
        }
        if (sStatus >= 100) {
            readiness = true;
        }
        res.json({
            recieved: req.query.caliber,
            amount: req.query.amount,
            shipstatus: sStatus + '%',
            ready: readiness
        })

    } else {
        res.status(400).json(errorMessage);
    }
})

module.exports = app;