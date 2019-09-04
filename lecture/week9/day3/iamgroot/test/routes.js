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

test('groot endpoint', (t) => {
    request(app)
        .post('/groot')
        .set('accept', 'application/json')
        .send({ inputMessage: 'testcase' })
        .expect('content-type', 'application/json; charset=utf-8')
        .end((err, resp) => {
            if (err) throw err;
            t.same(resp.body, { recieved: 'testcase', translated: 'I am Groot!' });
            t.end();
        });
});