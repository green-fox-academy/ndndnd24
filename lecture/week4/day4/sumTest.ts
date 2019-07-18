'use strict';

import Sum from './sum';
import { test } from 'tape';

test('sum them', t => {
    const mySum = new Sum;

    // let actual = mySum.sumThem();
    // let expected = 45;

    // let actual = mySum.integers.length;
    // let expected = 0;

    let actual = mySum.integers.length;
    let expected = 1;

    t.equal(actual, expected);
    t.end();
})