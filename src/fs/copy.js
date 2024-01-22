import { readdir, mkdir, copyFile } from 'node:fs/promises';
import path from 'path';

const copy = async () => {
	const { dirname } = import.meta;

	const fromDirectoryPath = path.join(dirname, 'files');
	const toDirectoryPath = path.join(dirname, 'files_copy');

	try {
		const files = await readdir(fromDirectoryPath);

		await mkdir(toDirectoryPath);

		for (let fileName of files) {
			await copyFile(path.join(fromDirectoryPath, fileName), path.join(toDirectoryPath, fileName));
		}
	} catch {
		throw new Error('FS operation failed');
	}
};

await copy();
