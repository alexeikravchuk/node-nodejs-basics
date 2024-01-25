import path from 'node:path';
import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';

const { dirname } = import.meta;
const workerPath = path.join(dirname, 'worker.js');

const performCalculations = async () => {
	const cpuCount = cpus().length;
	const workerPromises = [];

	Array.from({ length: cpuCount }).forEach((_, index) => {
		workerPromises.push(new Promise((resolve) => {
			const worker = new Worker(workerPath, { workerData: index + 10 });

			worker.on('message', (data) => resolve({ status: 'resolved', data }));
			worker.on('error', (err) => resolve({ status: 'error', data: null }));
		}));
	});

	const results = await Promise.all(workerPromises);

	console.log(results);
};

await performCalculations();
