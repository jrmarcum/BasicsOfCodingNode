#### Run the writing-files lesson first to create the `tmp/dat` file that this program reads. Node.js uses the `fs` module with synchronous APIs (`readFileSync`, `openSync`, `readSync`) as the equivalent of Go's `os.ReadFile`, `os.Open`, and `io.Reader`. Seeking to a byte offset is done by passing the position as the last argument to `fs.readSync`.
___
##### Run Command:

`$ node ../59_writing-files/writing-files.js`

`$ npx tsx ../59_writing-files/writing-files.ts`

___

##### Run Command:

`$ node reading-files.js`

`$ npx tsx reading-files.ts`

##### Results:

`hello`
`go`
`5 bytes: hello`
`2 bytes @ 6: go`
`1 bytes @ 8: `
`5 bytes: hello`
