import {cp} from 'node:fs/promises';
import {join} from 'node:path';

const copy = async () => {
    const __dirname = import.meta.dirname;
    const oldPath = join(__dirname, '/files');
    const newPath = join(__dirname, '/files_copy');

    cp(oldPath, newPath, {force: false, errorOnExist: true, recursive: true})
        .catch(() => {
            throw new Error('FS operation failed');
        });
};

await copy();
