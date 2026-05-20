#### The environment variable names printed after the blank line will vary by operating system and user environment. `process.env` in Node.js is the equivalent of `os.Environ()` in Go, providing access to all environment variables as a plain object. Setting `process.env.FOO = "1"` modifies the variable for the current process only, just like Go's `os.Setenv`.
___
##### Run Command:

`$ node environment-variables.js`


##### Results:

`FOO: 1`
`BAR: `
``
`PATH`
`COMPUTERNAME`
`...`
