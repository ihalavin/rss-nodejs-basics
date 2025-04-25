import {readdir} from 'node:fs/promises';

const list = async () => {
    readdir('files')
        .then((files) => {
            console.log(files);
        })
        .catch(() => {
            throw new Error('FS operation failed');
        });
};

await list();