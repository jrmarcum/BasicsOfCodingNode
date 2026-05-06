#### Go's `context.Context` cancellation maps to `AbortController`; the signal is passed to long-running operations and the abort event triggers rejection, mimicking `ctx.Done()`.
___
##### Run Command:

`$ bun context.js`

`$ bun context.ts`

##### Results:

`server: hello handler started`
`server: context canceled`
`server: hello handler ended`
