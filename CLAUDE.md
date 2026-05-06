# Basics of Coding Bun — Project Context

## Purpose

Multi-language comparative study of programming syntax, language simplicity,
lines of code required, and runtime performance. Bun is one of several
languages implemented against the same set of example programs, enabling
direct side-by-side comparison.

## Licensing Summary

This project contains two tiers of content with different licenses:

- **CC BY 3.0** — lesson files and code examples adapted from
  "Basics of Coding Go" by Jon Marcum, which was itself adapted from
  "Go by Example" by Mark McGranaghan
  (https://github.com/mmcgrana/gobyexample).
  License: http://creativecommons.org/licenses/by/3.0/

- **CC0 1.0** — original contributions by Jon Marcum (project structure,
  README, comparative-study additions, and any lessons not derived from
  Go by Example). See LICENSE.

Attribution for derived content is provided centrally in README.md and
NOTICE — do **not** add a per-file attribution footer to lesson `.md` files.

## Upstream Reference

BasicsOfCodingGo is included as a git submodule at `upstream/basicsofcodinggo`.
Read each lesson from `upstream/basicsofcodinggo/##_topic-name/` as the
source of truth for program logic and expected output.

## Project Structure

```
BasicsOfCodingBun/
├── CLAUDE.md          — this file; canonical project context for Claude sessions
├── LICENSE            — CC0 (applies to Jon Marcum's original contributions)
├── NOTICE             — attribution notice for CC BY 3.0 derived content
├── README.md          — project overview, attribution section, license table
├── upstream/
│   └── basicsofcodinggo/  — git submodule: BasicsOfCodingGo reference
└── ##_topic-name/
    ├── topic-name.js  — JavaScript source (run with bun)
    ├── topic-name.ts  — TypeScript source (run with bun)
    └── topic-name.md  — lesson explanation (run commands + expected output)
```

Lessons are numbered with a two-digit prefix (e.g., `01_hello-world`),
mirroring BasicsOfCodingGo exactly: same lesson numbers, same folder names.

## .gitignore

The project `.gitignore` covers:

```gitignore
# Temporary files created by lesson examples (lessons 58-60)
tmp/

# Bun lockfile
bun.lockb

# Node.js/Bun modules
node_modules/

# Environment files
.env
.env.local

# OS artifacts
.DS_Store
Thumbs.db
```

- `bun.lockb` is Bun's binary lockfile, created when `bun install` is run.
- `tmp/` is the working directory expected by lessons 58 (reading-files),
  59 (writing-files), and 60 (line-filters). It must exist at runtime but
  should not be committed. Lesson 59 creates it automatically.
- `node_modules/` is created by `bun install xml2js` in lesson 49 (xml).
  There is no root-level `bun install` step — Bun runs TypeScript natively
  with no setup required.

## Language Notes for Future Claude Sessions

- **Runtime:** Bun only. No Node.js, npm, or ts-node required.
  - JavaScript: `bun filename.js`
  - TypeScript: `bun filename.ts` (Bun runs TypeScript natively; no tsconfig needed)
- **Module system:** ESM (`import`/`export`) in both `.js` and `.ts` files.
  Use `import x from 'node:x'` for default imports and `import { fn } from 'node:x'`
  for named imports. Always use the `node:` prefix for built-in modules.
  Never use `require()`.
- **No root package.json or tsconfig.json** — Bun runs TypeScript natively
  with no external toolchain. Do not create these files.
- **Bun is a drop-in Node.js replacement** — all ESM `import` statements,
  `process.*` globals, `fs`/`path`/`crypto`/`readline` modules, and all lesson
  logic work unchanged from the Node.js implementation.
- **TypeScript conventions used:**
  - Function parameter and return types always explicit
  - `interface` for object shapes (structs, result objects)
  - Tuple return types `[T, U]` for multiple-return-value lessons
  - `Array<() => void>` for typed function arrays (lesson 43)
  - `unknown` for truly-unknown-type parameters (lesson 07 `whatAmI`)
  - `implements InterfaceName` on classes (lesson 20)
  - `import xml2js from 'xml2js'` for the untyped xml2js package (lesson 49)
- **No external packages** except lesson 49 (xml), which requires
  `bun install xml2js` run inside `49_xml/`.
- **JavaScript has no pointers** (lesson 17) — implement with object references;
  note the difference from Go's pointer semantics.
- **JavaScript has no defer** (lesson 43) — simulated with a `deferred` array
  and LIFO execution; note that `try/finally` is the real-world idiom.
- **JavaScript has no panic/recover** (lesson 42) — implement with `throw`/`try/catch`.
- **JavaScript has no explicit interfaces** (lesson 20) — implement with duck typing.
- **JavaScript has no structs** (lesson 18) — implement with classes or plain objects.
- **Go's `fmt.Println` vs `console.log`:** Go uses space-separated `%v` format for
  structs/arrays (e.g., `[1 2 3]`, `map[k:v]`). Bun/JS uses its own inspection
  format (e.g., `[ 1, 2, 3 ]`, `{ k: 'v' }`). Always show actual Bun output
  in the `.md` file.
- **Map iteration order:** Go maps are non-deterministic. JavaScript plain objects
  and `Map` preserve insertion order. No variability note needed for JS maps.
- **Variable output lessons** (description at top notes this): 07 (switch — time),
  42 (panic — stack trace), 50 (time), 51 (epoch), 52 (time-formatting-parsing),
  53 (random-numbers), 63 (temporary-files-and-directories),
  67 (environment-variables).
- **Lessons with setup steps:** 49 (xml — `bun install xml2js`),
  58 (reading-files — run 59 first), 60 (line-filters — requires stdin piping).
- The root `LICENSE` file is CC0 but does **not** cover the derived content.
  Always refer to NOTICE and README for the full picture.

## .md File Format

Each lesson `.md` follows the Go/V reference format:

```
#### Optional description (language note or setup instruction).
___
##### Run Command:

`$ bun filename.js`

`$ bun filename.ts`

##### Results:

`output line 1`
`output line 2`
```

Rules:
- The description line (if present) is a single `####` sentence before the first `___`.
- No opening `___` before a description; `___` separates description from run command.
- If there is no description, the file starts directly with `##### Run Command:`.
- Multiple run command sections are separated by a blank line, `___`, and a blank line.
- No per-file attribution footer — attribution is fully satisfied by README and NOTICE.
