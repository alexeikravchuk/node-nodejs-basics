import { readFile } from 'node:fs/promises';
import path from 'path';

const read = async () => {
	const { dirname } = import.meta;
	const filePath = path.join(dirname, 'files', 'fileToRead.txt');

	try {
		const filesList = await readFile(filePath, { encoding: 'utf8' });
		console.log(filesList);
	} catch {
		throw new Error('FS operation failed');
	}
};

await read();
