import {writeFile} from 'node:fs/promises';

const create = async () => {
    writeFile('files/fresh.txt', 'I am fresh and young', {flag: 'wx'})
        .catch(() => {
            throw new Error('FS operation failed');
        });
};

await create();
