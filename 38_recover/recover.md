#### Go's `defer`+`recover()` panic handler maps to a JavaScript `try/catch` block; `throw new Error(...)` replaces `panic(...)` and `catch` replaces `recover()`.
___
##### Run Command:

`$ bun recover.js`

`$ bun recover.ts`

##### Results:

`Recovered. Error:`
` a problem`
