#### Node.js provides base64 encoding via `Buffer`. Standard encoding uses `+` and `/` with `=` padding; URL-safe encoding replaces `+` with `-` and `/` with `_`. The `base64url` encoding is supported natively in Node.js v16+.
___
##### Run Command:

`$ node base64-encoding.js`


##### Results:

`YWJjMTIzIT8kKiYoKSctPUB+`
`abc123!?$*&()'-=@~`
``
`YWJjMTIzIT8kKiYoKSctPUB-`
`abc123!?$*&()'-=@~`
