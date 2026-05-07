#### Go's `exec.Command` maps to `child_process.spawnSync`; error handling uses `result.error.code` for spawn failures and `result.status` for non-zero exit codes.
___
##### Run Command:

`$ node spawning-processes.js`

`$ npx tsx spawning-processes.ts`

##### Results:

`> bun --version`
`1.3.13`
``
`failed executing: ENOENT`
``
`> via shell`
`1.3.13`
