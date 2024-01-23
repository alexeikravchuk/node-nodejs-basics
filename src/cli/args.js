const parseArgs = () => {
	const { argv } = process;

	const keyIndexes = argv.map((arg, idx) => arg.startsWith('--') ? idx : null).filter(idx => idx !== null);

	const targetLine = keyIndexes.map(idx => {
		const key = argv[idx].slice(2);
		const value = argv[idx + 1];
		return `${key} is ${value}`;
	}).join(', ');

	console.log(targetLine);
};

parseArgs();
