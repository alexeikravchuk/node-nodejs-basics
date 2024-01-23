import { unlink } from 'node:fs/promises';
import path from 'path';

const remove = async () => {
	const { dirname } = import.meta;
	const filePath = path.join(dirname, 'files', 'fileToRemove.txt');

	try {
		await unlink(filePath);
	} catch {
		throw new Error('FS operation failed');
	}
};

await remove();