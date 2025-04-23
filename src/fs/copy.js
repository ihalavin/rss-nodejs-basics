import fs from 'node:fs';

const copy = async () => {
    fs.cp('files', 'files_copy', {force: false, errorOnExist: true, recursive: true}, err => {
        if (err) {
            throw new Error('FS operation failed');
        }
    });
};

await copy();
