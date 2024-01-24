import { readdir } from 'node:fs/promises';
import path from 'node:path';

const list = async () => {
	const { dirname } = import.meta;
	const dirPath = path.join(dirname, 'files');

	try {
		const filesList = await readdir(dirPath);
		console.log(filesList);
	} catch {
		throw new Error('FS operation failed');
	}

};

await list();
