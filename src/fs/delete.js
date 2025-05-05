import { rm } from 'node:fs/promises';
import {join} from 'node:path';

const remove = async () => {
    const __dirname = import.meta.dirname;
    const filePath = join(__dirname, '/files/fileToRemove.txt');

    rm(filePath)
        .catch(() => {
            throw new Error('FS operation failed');
        });
};

await remove();
