import {access, rename as renameFile} from 'node:fs/promises';

const rename = async () => {
    const __dirname = import.meta.dirname;
    const newPath = __dirname + '/files/properFilename.md';
    const oldPath = __dirname + '/files/wrongFilename.txt';
    const fsErrorMessage = 'FS operation failed';

    await access(newPath)
        .then(() => {
            throw new Error(fsErrorMessage);
        })
        .catch((err) => {
            if (err.message === fsErrorMessage) {
                throw err;
            }
        });

    await access(oldPath).catch(() => {
        throw new Error(fsErrorMessage);
    });

    renameFile(oldPath, newPath)
        .catch(() => {
            throw new Error(fsErrorMessage);
        });
};

await rename();
