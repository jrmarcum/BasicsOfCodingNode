import { createInterface } from 'node:readline';

const rl = createInterface({
    input: process.stdin,
    terminal: false,
});

rl.on("line", (line: string): void => {
    console.log(line.toUpperCase());
});

rl.on("error", (err: Error): void => {
    process.stderr.write(`error: ${err.message}\n`);
    process.exit(1);
});
