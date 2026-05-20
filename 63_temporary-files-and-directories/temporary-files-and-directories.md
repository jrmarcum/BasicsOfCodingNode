#### Temp file and directory names will vary with each run due to the random hex suffix. On Linux/macOS the paths will be under `/tmp/`. Node.js does not have a built-in `os.CreateTemp` equivalent, so this lesson generates random filenames using `crypto.randomBytes` combined with `os.tmpdir()`. The files and directories are removed immediately after use via `try/finally`.
___
##### Run Command:

`$ node temporary-files-and-directories.js`


##### Results:

`Temp file name: C:\Users\user\AppData\Local\Temp\samplea1b2c3d4e5f6`
`Temp dir name: C:\Users\user\AppData\Local\Temp\sampledira1b2c3d4e5f6`
