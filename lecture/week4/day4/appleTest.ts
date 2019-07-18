'use strict'

import Apple from './apple';
import { test } from 'tape';

test('write apple', t => {
    const myObject = new Apple();

    let actual = myObject.getApple();
    let expected = 'apple1';

    t.equal(actual, expected);
    t.end();
})
