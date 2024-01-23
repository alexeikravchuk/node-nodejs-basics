const parseEnv = () => {
	const { env } = process;

	const targetKeys = Object.keys(env).filter(key => key.startsWith('RSS_'));
	const targetVariables = targetKeys.map(key => `${key}=${env[key]}`);
	const resultString = targetVariables.join('; ');
	console.log(resultString);
};

parseEnv();
