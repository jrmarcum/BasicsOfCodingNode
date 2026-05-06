#### Go's `select` with `time.After` for timeouts maps to `Promise.race()` competing against a rejecting timeout promise; the first to settle wins.
___
##### Run Command:

`$ bun timeouts.js`

`$ bun timeouts.ts`

##### Results:

`timeout 1`
`result 2`
