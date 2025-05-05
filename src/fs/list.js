import {readdir} from 'node:fs/promises';
import {join} from 'node:path';

const list = async () => {
    const __dirname = import.meta.dirname;
    const dirPath = join(__dirname, '/files');

    readdir(dirPath)
        .then((files) => {
            console.log(files);
        })
        .catch(() => {
            throw new Error('FS operation failed');
        });
};

await list();
