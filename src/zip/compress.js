import {createReadStream, createWriteStream} from 'node:fs';
import {createGzip} from 'node:zlib';
import {join} from 'node:path';

const compress = async () => {
    const __dirname = import.meta.dirname;
    const filePath = join(__dirname, '/files/fileToCompress.txt');
    const fileReadStream = createReadStream(filePath);

    const zipPath = join(__dirname, '/files/archive.gz');
    const zipWriteStream = createWriteStream(zipPath);

    fileReadStream.pipe(createGzip()).pipe(zipWriteStream);
};

await compress();
