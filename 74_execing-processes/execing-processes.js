import { execFileSync } from 'node:child_process';

const binary = process.execPath;
const args = ['--version'];
const env = process.env;

const output = execFileSync(binary, args, { encoding: 'utf8', env });
process.stdout.write(output);
