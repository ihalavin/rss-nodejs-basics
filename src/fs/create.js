import {writeFile} from 'node:fs/promises';
import {join} from 'node:path';

const create = async () => {
    const __dirname = import.meta.dirname;
    const filePath = join(__dirname, '/files/fresh.txt');

    writeFile(filePath, 'I am fresh and young', {flag: 'wx'})
        .catch(() => {
            throw new Error('FS operation failed');
        });
};

await create();
