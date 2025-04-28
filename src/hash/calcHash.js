import {createHash} from 'node:crypto';
import {createReadStream} from 'node:fs';
import {join} from 'node:path';

const calculateHash = async () => {
    const __dirname = import.meta.dirname;
    const filePath = join(__dirname, '/files/fileToCalculateHashFor.txt');
    const fileStream = createReadStream(filePath);

    let hash = createHash('SHA256');

    fileStream
        .pipe(hash)
        .on('finish', () => {
            console.log(hash.digest('hex'));
        })
};

await calculateHash();
