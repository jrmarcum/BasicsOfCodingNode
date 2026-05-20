#### Go's `signal.NotifyContext` maps to `process.on('SIGINT', ...)` and `process.on('SIGTERM', ...)`; this demo uses `process.emit('SIGINT')` to trigger the handler programmatically.
___
##### Run Command:

`$ node signals.js`


##### Results:

`awaiting signal`
``
`signal: interrupt`
`exiting`
