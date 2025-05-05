import {Worker} from 'node:worker_threads';
import {cpus} from 'node:os';
import {join} from 'node:path';

const __dirname = import.meta.dirname;

const main = async () => {
    const numCores = cpus().length;
    const results = new Array(numCores);
    let completedWorkers = 0;

    return new Promise((resolve) => {
        for (let i = 0; i < numCores; i++) {
            const worker = new Worker(join(__dirname, 'worker.js'));

            worker.on('message', (result) => {
                results[i] = {status: 'resolved', data: result};
                completedWorkers++;

                if (completedWorkers === numCores) {
                    console.log(results);
                    resolve();
                }
            });

            worker.on('error', () => {
                results[i] = {status: 'error', data: null};
                completedWorkers++;

                if (completedWorkers === numCores) {
                    console.log(results);
                    resolve();
                }
            });

            worker.postMessage(10 + i);
        }
    });
};

await main();
