import fs from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { randomBytes } from 'node:crypto';

function createTempFile(prefix: string): string {
    const name: string = path.join(tmpdir(), prefix + randomBytes(6).toString("hex"));
    fs.writeFileSync(name, "");
    return name;
}

function createTempDir(prefix: string): string {
    const name: string = path.join(tmpdir(), prefix + randomBytes(6).toString("hex"));
    fs.mkdirSync(name);
    return name;
}

const fname: string = createTempFile("sample");
console.log("Temp file name:", fname);
try {
    fs.writeFileSync(fname, Buffer.from([1, 2, 3, 4]));
} finally {
    fs.unlinkSync(fname);
}

const dname: string = createTempDir("sampledir");
console.log("Temp dir name:", dname);
try {
    const fpath: string = path.join(dname, "file1");
    fs.writeFileSync(fpath, Buffer.from([1, 2]));
} finally {
    fs.rmSync(dname, { recursive: true, force: true });
}
