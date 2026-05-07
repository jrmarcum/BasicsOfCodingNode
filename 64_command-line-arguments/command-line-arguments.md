#### The full paths in the first line will vary by system. In Node.js, `process.argv[0]` is the path to the `node` executable and `process.argv[1]` is the script path — so user arguments start at index 2. In Go, `os.Args[0]` is the compiled binary name and user arguments start at index 1. The third user argument (`c`, at `process.argv[4]`) matches Go's `os.Args[3]`.
___
##### Run Command:

`$ node command-line-arguments.js a b c d`

`$ npx tsx command-line-arguments.ts a b c d`

##### Results:

`[ 'C:\\Program Files\\nodejs\\node.exe', 'D:\\...\\command-line-arguments.js', 'a', 'b', 'c', 'd' ]`
`[ 'a', 'b', 'c', 'd' ]`
`c`
