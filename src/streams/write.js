import { createWriteStream } from 'node:fs';
import path from 'node:path';

const { dirname } = import.meta;
const filePath = path.join(dirname, 'files', 'fileToWrite.txt');

const writeStream = createWriteStream(filePath, { encoding: 'utf8' });

const write = async () => {
	process.stdin.pipe(writeStream);
};

await write();
