'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint with error', (t) => {
    request(app)
        .post('/groot')
        .set('accept', 'application/json')
        .send({ inputMessage: '' })
        .expect('content-type', 'application/json; charset=utf-8')
        .end((err, resp) => {
            if (err) throw err;
            t.same(resp.body, { error: 'I am Groot!' });
            t.end();
        });
});

test('groot endpoint with error: status', (t) => {
    request(app)
        .post('/groot')
        .send({ inputMessage: '' })
        .end((err, res) => {
            if (err) throw err;
            t.equal(res.status, 400);
            t.end();
        })
})

test('groot endpoint', (t) => {
    request(app)
        .post('/groot')
        .set('accept', 'application/json')
        .send({ inputMessage: 'testcase' })
        .expect('content-type', 'application/json; charset=utf-8')
        .end((err, resp) => {
            if (err) throw err;
            t.equal(resp.status, 200);
            t.same(resp.body, { recieved: 'testcase', translated: 'I am Groot!' });
            t.end();
        });
});

test('yondu endpoint', (t) => {
    request(app)
        .get('/yondu')
        .query({ distance: '100.0', time: '10.0' })
        .set('accept', 'application/json')
        .expect('content-type', 'application/json; charset=utf-8')
        .end((err, resp) => {
            if (err) throw err;
            t.equal(resp.status, 200);
            t.same(resp.body, { distance: '100.0', time: '10.0', speed: 10 });
            t.end();
        });
});

test('yondu endpoint fail with status', (t) => {
    request(app)
        .get('/yondu')
        .query({ inputMessage: 'I am Ironman' })
        .end((err, resp) => {
            if (err) throw err;
            t.equal(resp.status, 400);
            t.end();
        })
});

test('yondu endpoint fail with error message', (t) => {
    request(app)
        .get('/yondu')
        .end((err, resp) => {
            if (err) throw err;
            t.same(resp.body, { error: 'I am Groot!' });
            t.end();
        });
});

test('ship status', (t) => {
    request(app)
        .get('/rocket')
        .end((err, resp) => {
            if (err) throw err;
            t.same(resp.body, { caliber25: 0, caliber30: 0, caliber50: 0, shipstatus: "empty", ready: false })
            t.end();
        })
})

test('fillment status', (t) => {
    request(app)
        .get('/rocket/fill')
        .query({ caliber: '.50', amount: '5000' })
        .end((err, resp) => {
            if (err) throw err;
            t.same(resp.body, { recieved: '.50', amount: '5000', shipstatus: '40%', ready: false })
            t.end();
        })
})

test('empty shipstatus', (t) => {
    request(app)
        .get('/rocket/fill')
        .query({ caliber: '.50', amount: '-5000' })
        .end((err, resp) => {
            if (err) throw err;
            t.same(resp.body, { recieved: '.50', amount: '-5000', shipstatus: 'empty', ready: false })
            t.end();
        })
})


test('40% shipstatus', (t) => {
    request(app)
        .get('/rocket/fill')
        .query({ caliber: '.50', amount: '5000' })
        .end((err, resp) => {
            if (err) throw err;
            t.same(resp.body, { recieved: '.50', amount: '5000', shipstatus: '40%', ready: false })
            t.end();
        })
})

test('full shipstatus', (t) => {
    request(app)
        .get('/rocket/fill')
        .query({ caliber: '.50', amount: '7500' })
        .end((err, resp) => {
            if (err) throw err;
            t.same(resp.body, { recieved: '.50', amount: '7500', shipstatus: 'full', ready: true })
            t.end();
        })
})

test('overloaded shipstatus', (t) => {
    request(app)
        .get('/rocket/fill')
        .query({ caliber: '.50', amount: '500' })
        .end((err, resp) => {
            if (err) throw err;
            t.same(resp.body, { recieved: '.50', amount: '500', shipstatus: 'overloaded', ready: false })
            t.end();
        })
})