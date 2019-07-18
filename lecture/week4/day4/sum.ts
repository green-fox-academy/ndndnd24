'use strict';

export default class Sum {
    integers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    sumOfThem: number = 0;

    sumThem(): number {
        for (let i: number = 0; i < 9; i++) {
            this.sumOfThem += this.integers[i];
        }
        return this.sumOfThem;
    }
}