import {createReadStream} from 'node:fs';
import {join} from 'node:path';

const read = async () => {
    const __dirname = import.meta.dirname;
    const filePath = join(__dirname, '/files/fileToRead.txt');
    const fileReadStream = createReadStream(filePath);

    fileReadStream
        .pipe(process.stdout)
        .on('unpipe', () => {
            console.log();
        });
};

await read();
