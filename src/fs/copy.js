import { cp } from 'node:fs/promises';
import path from 'path';

const copy = async () => {
	const { dirname } = import.meta;

	const fromDirectoryPath = path.join(dirname, 'files');
	const toDirectoryPath = path.join(dirname, 'files_copy');

	try {
		await cp(fromDirectoryPath, toDirectoryPath, { recursive: true, force: false, errorOnExist: true });
	} catch {
		throw new Error('FS operation failed');
	}
};

await copy();
