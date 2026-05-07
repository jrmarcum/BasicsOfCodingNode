import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

function intMin(a, b) {
    return a < b ? a : b;
}

test('IntMinBasic', () => {
    assert.strictEqual(intMin(2, -2), -2);
});

describe('IntMinTableDriven', () => {
    const tests = [
        { a: 0, b: 1, want: 0 },
        { a: 1, b: 0, want: 0 },
        { a: 2, b: -2, want: -2 },
        { a: 0, b: -1, want: -1 },
        { a: -1, b: 0, want: -1 },
    ];

    for (const tt of tests) {
        test(`${tt.a},${tt.b}`, () => {
            assert.strictEqual(intMin(tt.a, tt.b), tt.want);
        });
    }
});
