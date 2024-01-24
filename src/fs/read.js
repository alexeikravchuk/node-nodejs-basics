import { readFile } from 'node:fs/promises';
import path from 'node:path';

const read = async () => {
	const { dirname } = import.meta;
	const filePath = path.join(dirname, 'files', 'fileToRead.txt');

	try {
		const fileContent = await readFile(filePath, { encoding: 'utf8' });
		console.log(fileContent);
	} catch {
		throw new Error('FS operation failed');
	}
};

await read();
