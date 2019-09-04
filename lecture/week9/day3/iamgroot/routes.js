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

let ammo25 = 100;
let ammo30 = 150;
let ammo50 = 200;
let sStatus = "empty";
let readiness = false;

app.get('/rocket', (req, res) => {
    res.json({
        caliber25: ammo25,
        caliber30: ammo30,
        caliber50: ammo50,
        shipstatus: sStatus,
        ready: readiness
    })
})

app.get('/rocket/fill', (req, res) => {
    if (req.query.caliber && req.query.amount) {

    } else {
        res.status(400).json(errorMessage);
    }

    //     ammo25 += 25;
    // ammo30 += 30;
    // ammo50 += 50;
    // res.json({ fillment: 'fullfilled' })
})

module.exports = app;