#### Go's `testing` package maps to Node.js's built-in `node:test` runner; `test()` replaces `func TestX(t *testing.T)`, `describe()` groups subtests, and `assert.strictEqual()` replaces `t.Errorf`. Timing values in the output vary.
___
##### Run Command:

`$ node --test testing-and-benchmarking.js`


##### Results:

`✔ IntMinBasic (0.77ms)`
`▶ IntMinTableDriven`
`  ✔ 0,1 (0.26ms)`
`  ✔ 1,0 (0.08ms)`
`  ✔ 2,-2 (0.91ms)`
`  ✔ 0,-1 (0.09ms)`
`  ✔ -1,0 (0.08ms)`
`✔ IntMinTableDriven (1.81ms)`
`ℹ tests 6`
`ℹ suites 1`
`ℹ pass 6`
`ℹ fail 0`
`ℹ cancelled 0`
`ℹ skipped 0`
`ℹ todo 0`
`ℹ duration_ms 112.52`
