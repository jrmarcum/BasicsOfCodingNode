import { createHash } from 'node:crypto';

const s = "sha1 this string";

const h = createHash("sha1");
h.update(s);
const bs = h.digest("hex");

console.log(s);
console.log(bs);
