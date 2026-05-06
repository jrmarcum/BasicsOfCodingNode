#### Go's `testing` package maps to Bun's native `bun:test` runner; `test()` replaces `func TestX(t *testing.T)`, `describe()` groups subtests, and `expect().toBe()` replaces `t.Errorf`.
___
##### Run Command:

`$ bun test ./testing-and-benchmarking.js`

`$ bun test ./testing-and-benchmarking.ts`

##### Results:

` 6 pass`
` 0 fail`
` 6 expect() calls`
`Ran 6 tests across 1 file. [48.00ms]`
