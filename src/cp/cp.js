import { fork } from 'node:child_process';
import { join } from 'node:path';

const spawnChildProcess = async (args) => {
    const __dirname = import.meta.dirname;
    const scriptPath = join(__dirname, 'files', 'script.js');

    const childProcess = fork(scriptPath, args, {
        stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
    });

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);

    process.on('SIGINT', () => {
        childProcess.kill();
        process.exit();
    });
}

await spawnChildProcess(['--foo', '--bar']);
