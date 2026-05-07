#### On Windows, use `echo hello | node line-filters.js` or PowerShell's `"hello`nfilter`n" | node line-filters.js`. The program reads from stdin line by line using the `readline` module and converts each line to uppercase — the equivalent of Go's `bufio.Scanner` reading from `os.Stdin`.
___
##### Run Command:

`$ printf "hello\nfilter\n" | node line-filters.js`

##### Results:

`HELLO`
`FILTER`
