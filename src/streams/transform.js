import {Transform} from 'node:stream';

const transform = async () => {
    const reverseStream = new Transform({
        transform(chunk, encoding, callback) {
            const reverse = chunk.toString().split('').reverse().join('') + '\n';
            callback(null, reverse);
        }
    });

    process.stdin
        .pipe(reverseStream)
        .pipe(process.stdout);
};

await transform();
