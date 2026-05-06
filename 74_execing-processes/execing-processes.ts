import { execFileSync } from 'node:child_process';

const binary: string = process.execPath;
const args: string[] = ['--version'];
const env: NodeJS.ProcessEnv = process.env;

const output: string = execFileSync(binary, args, { encoding: 'utf8', env });
process.stdout.write(output);
