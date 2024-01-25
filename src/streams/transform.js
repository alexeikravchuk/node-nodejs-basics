import { stdin, stdout } from 'node:process';
import { Transform } from 'node:stream';
import { EOL } from 'node:os';

const reverseStream = new Transform({
		transform(chunk, _encoding, callback) {
			const reversedText = chunk.toString().trim().split('').reverse().join('');
			this.push(reversedText + EOL);
			callback();
		},
	},
);

const transform = async () => {
	stdin.pipe(reverseStream).pipe(stdout);
};

await transform();
