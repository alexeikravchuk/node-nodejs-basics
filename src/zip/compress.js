import { createWriteStream, createReadStream } from 'node:fs';
import path from 'node:path';
import { createGzip } from 'node:zlib';

const { dirname } = import.meta;
const inputFilePath = path.join(dirname, 'files', 'fileToCompress.txt');
const outputFilePath = path.join(dirname, 'files', 'archive.gz');

const compress = async () => {
	const readStream = createReadStream(inputFilePath, { encoding: 'utf8' });
	const writeStream = createWriteStream(outputFilePath);
	const zip = createGzip();
	readStream.pipe(zip).pipe(writeStream);
};

await compress();
