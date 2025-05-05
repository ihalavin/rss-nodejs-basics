import {join} from 'node:path';
import {createWriteStream} from 'node:fs';

const write = async () => {
    const __dirname = import.meta.dirname;
    const filePath = join(__dirname, '/files/fileToWrite.txt');
    const fileWriteStream = createWriteStream(filePath);

    process.stdin.pipe(fileWriteStream);
};

await write();
