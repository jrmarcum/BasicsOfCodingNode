import fs from 'node:fs';
import path from 'node:path';

fs.mkdirSync("tmp", { recursive: true });

fs.writeFileSync(path.join("tmp", "dat1"), "hello\ngo\n");
fs.writeFileSync(path.join("tmp", "dat"), "hello\ngo\n");

const fd = fs.openSync(path.join("tmp", "dat2"), "w");

const d2 = Buffer.from([115, 111, 109, 101, 10]);
const n2 = fs.writeSync(fd, d2);
console.log(`wrote ${n2} bytes`);

const n3 = fs.writeSync(fd, "writes\n");
console.log(`wrote ${n3} bytes`);

fs.fsyncSync(fd);

const n4 = fs.writeSync(fd, "buffered\n");
console.log(`wrote ${n4} bytes`);

fs.closeSync(fd);
