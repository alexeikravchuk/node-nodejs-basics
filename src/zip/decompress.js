import { createWriteStream, createReadStream } from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const { dirname } = import.meta;
const outputFilePath = path.join(dirname, 'files', 'fileToCompress.txt');
const inputFilePath = path.join(dirname, 'files', 'archive.gz');

const decompress = async () => {
	const readStream = createReadStream(inputFilePath);
	const writeStream = createWriteStream(outputFilePath);
	const unzip = zlib.createGunzip();
	readStream.pipe(unzip).pipe(writeStream);
};

await decompress();
