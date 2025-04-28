import {parentPort} from 'node:worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

parentPort.on('message', (number) => {
    sendResult(nthFibonacci(number));
});

const sendResult = (result) => {
    parentPort.postMessage(result);

    process.exit(0);
};
