import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
	const { dirname } = import.meta;
	const filePath = path.join(dirname, 'files', 'fileToCalculateHashFor.txt');
	const stream = createReadStream(filePath);

	const hash = createHash('sha256');

	stream.on('data', (data) => hash.update(data));
	stream.on('end', () => {
		const hexHash = hash.digest('hex');
		console.log(hexHash);
	});
};

await calculateHash();
