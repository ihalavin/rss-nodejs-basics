import {readFile} from 'node:fs/promises';

const read = async () => {
    readFile('files/fileToRead.txt', 'utf-8')
        .then((buffer) => {
            console.log(buffer.toString());
        })
        .catch(() => {
            throw new Error('FS operation failed');
        });
};

await read();
