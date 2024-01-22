import { writeFile } from 'node:fs/promises';
import path from 'path';

const create = async () => {
	const filePath = path.join(import.meta.dirname, 'files', 'fresh.txt');

	try {
		await writeFile(filePath, 'I am fresh and young', { flag: 'wx' });
	} catch {
		throw new Error('FS operation failed');
	}
};

await create();
