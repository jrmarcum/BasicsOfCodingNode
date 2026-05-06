#### JavaScript is single-threaded so ordinary `++` is already safe without `sync/atomic`; this lesson shows the same 50-worker × 1000-increment pattern using async IIFEs and `Promise.all`.
___
##### Run Command:

`$ bun atomic-counters.js`

`$ bun atomic-counters.ts`

##### Results:

`ops: 50000`
