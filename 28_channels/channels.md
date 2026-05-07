#### Go channels are simulated with a `Promise` — a resolver function is captured and called asynchronously (via `setTimeout`) while the main async function `await`s the resolved value.
___
##### Run Command:

`$ node channels.js`

`$ npx tsx channels.ts`

##### Results:

`ping`
