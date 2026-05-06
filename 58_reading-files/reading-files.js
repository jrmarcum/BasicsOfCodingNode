import fs from 'node:fs';
import path from 'node:path';

const tmpFile = path.join("tmp", "dat");

const dat = fs.readFileSync(tmpFile);
process.stdout.write(dat.toString());

const fd = fs.openSync(tmpFile, "r");

const b1 = Buffer.alloc(5);
const n1 = fs.readSync(fd, b1, 0, 5, 0);
console.log(`${n1} bytes: ${b1.slice(0, n1).toString()}`);

const b2 = Buffer.alloc(2);
const n2 = fs.readSync(fd, b2, 0, 2, 6);
console.log(`${n2} bytes @ 6: ${b2.slice(0, n2).toString()}`);

const b3 = Buffer.alloc(2);
const n3 = fs.readSync(fd, b3, 0, 2, 8);
process.stdout.write(`${n3} bytes @ 8: ${b3.slice(0, n3).toString()}\n`);

const b4 = Buffer.alloc(5);
fs.readSync(fd, b4, 0, 5, 0);
console.log(`5 bytes: ${b4.toString()}`);

fs.closeSync(fd);
