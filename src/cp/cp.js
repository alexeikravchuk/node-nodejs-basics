import path from 'node:path';
import { spawn } from 'node:child_process';

const { dirname } = import.meta;
const scriptPath = path.join(dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
	const cp = spawn('node', [scriptPath, ...args]);

	process.stdin.pipe(cp.stdin);
	cp.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
await spawnChildProcess(['arg1', 'arg2', 'arg3']);
