#### Go's `net/http` server maps to Node.js `http.createServer`; this self-contained example starts a server, makes requests to `/hello` and `/headers`, prints the responses, then closes.
___
##### Run Command:

`$ bun http-server.js`

`$ bun http-server.ts`

##### Results:

`hello`
``
`connection: keep-alive`
`user-agent: Bun/1.3.13`
`accept: */*`
`host: localhost:8090`
`accept-encoding: gzip, deflate, br, zstd`
``
