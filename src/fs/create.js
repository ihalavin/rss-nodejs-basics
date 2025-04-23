import fs from 'node:fs';

const create = async () => {
    fs.writeFile('files/fresh.txt', 'I am fresh and young', {flag: 'wx'}, err => {
        if (err) {
            throw new Error('FS operation failed');
        }
    });
};

await create();
