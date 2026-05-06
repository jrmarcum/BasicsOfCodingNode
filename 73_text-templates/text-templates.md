#### JavaScript has no built-in template engine; this lesson implements a minimal `{{.Key}}`-compatible template function using regex substitution supporting field access, `{{if}}`, and `{{range}}`.
___
##### Run Command:

`$ bun text-templates.js`

`$ bun text-templates.ts`

##### Results:

`Value: some text`
`Value: 5`
`Value: [Go Rust C++ C#]`
`Name: Jane Doe`
`Name: Mickey Mouse`
`yes`
`no`
`Range: Go Rust C++ C# `
