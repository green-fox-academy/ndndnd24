'use strict';

import { test } from 'tape';
import { anagramDecide } from './dojo';

test('are they anagrams?' t => {
    let firstWord = 'Viktor';
    let secondWord = 'David';

    let actual = anagramDecide(firstWord, secondWord);
    let expected = false;

    t.equal(actual, expected);
    t.end();
})