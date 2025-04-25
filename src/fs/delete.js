import { rm } from 'node:fs/promises';

const remove = async () => {
    rm('files/fileToRemove.txt')
        .catch(() => {
            throw new Error('FS operation failed');
        });
};

await remove();
