import {createReadStream, createWriteStream} from 'node:fs';
import {createGunzip} from 'node:zlib';
import {join} from 'node:path';

const decompress = async () => {
    const __dirname = import.meta.dirname;
    const filePath = join(__dirname, '/files/fileToCompress.txt');
    const fileWriteStream = createWriteStream(filePath);

    const zipPath = join(__dirname, '/files/archive.gz');
    const zipReadStream = createReadStream(zipPath);

    zipReadStream
        .pipe(createGunzip())
        .pipe(fileWriteStream);
};

await decompress();
