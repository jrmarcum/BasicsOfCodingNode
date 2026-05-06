import { spawnSync } from 'node:child_process';

const versionResult = spawnSync(process.execPath, ['--version'], { encoding: 'utf8' });
console.log('> bun --version');
console.log(versionResult.stdout.trim());
console.log();

const badResult = spawnSync('nonexistent_cmd_xyz', [], { encoding: 'utf8' });
if (badResult.error) {
    console.log('failed executing:', badResult.error.code);
} else if (badResult.status !== 0) {
    console.log('command exit rc =', badResult.status);
}
console.log();

const isWin = process.platform === 'win32';
const shell = isWin ? 'powershell' : 'bash';
const shellFlag = isWin ? '-Command' : '-c';
const shellResult = spawnSync(shell, [shellFlag, `${process.execPath} --version`],
    { encoding: 'utf8' });
console.log('> via shell');
console.log(shellResult.stdout.trim());
