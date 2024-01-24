import fs from 'node:fs/promises';
import path from 'node:path';

const isFileExist = async (path) => {
	try {
		await fs.access(path);
		return true;
	} catch {
		return false;
	}
};

const rename = async () => {
	const { dirname } = import.meta;

	const wrongFilenamePath = path.join(dirname, 'files', 'wrongFilename.txt');
	const properFilenamePath = path.join(dirname, 'files', 'properFilename.md');

	const properFileExist = await isFileExist(properFilenamePath);
	if (properFileExist) throw new Error('FS operation failed');

	try {
		await fs.rename(wrongFilenamePath, properFilenamePath);
	} catch {
		throw new Error('FS operation failed');
	}

};

await rename();
