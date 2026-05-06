import { createHash } from 'node:crypto';

const s = "sha256 this string";
const hash = createHash('sha256').update(s).digest('hex');
console.log(s);
console.log(hash);
