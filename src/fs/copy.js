import {cp} from 'node:fs/promises';

const copy = async () => {
    cp('files', 'files_copy', {force: false, errorOnExist: true, recursive: true})
        .catch(() => {
            throw new Error('FS operation failed');
        });
};

await copy();
