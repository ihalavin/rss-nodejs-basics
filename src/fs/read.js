import {readFile} from 'node:fs/promises';
import {join} from "node:path";

const read = async () => {
    const __dirname = import.meta.dirname;
    const filePath = join(__dirname, 'files/fileToRead.txt');

    readFile(filePath, 'utf-8')
        .then((buffer) => {
            console.log(buffer.toString());
        })
        .catch(() => {
            throw new Error('FS operation failed');
        });
};

await read();
