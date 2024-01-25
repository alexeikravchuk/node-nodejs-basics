import { createReadStream } from 'node:fs';
import path from 'node:path';

const { dirname } = import.meta;
const filePath = path.join(dirname, 'files', 'fileToRead.txt');

const readStream = createReadStream(filePath, { encoding: 'utf8' });

const read = async () => {
	readStream.pipe(process.stdout);
};

await read();
