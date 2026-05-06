import { test, describe, expect } from 'bun:test';

function intMin(a: number, b: number): number {
    return a < b ? a : b;
}

test('IntMinBasic', () => {
    expect(intMin(2, -2)).toBe(-2);
});

interface TestCase {
    a: number;
    b: number;
    want: number;
}

describe('IntMinTableDriven', () => {
    const tests: TestCase[] = [
        { a: 0, b: 1, want: 0 },
        { a: 1, b: 0, want: 0 },
        { a: 2, b: -2, want: -2 },
        { a: 0, b: -1, want: -1 },
        { a: -1, b: 0, want: -1 },
    ];

    for (const tt of tests) {
        test(`${tt.a},${tt.b}`, () => {
            expect(intMin(tt.a, tt.b)).toBe(tt.want);
        });
    }
});
