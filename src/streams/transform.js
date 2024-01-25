import { stdin, stdout } from 'node:process';
import { Transform } from 'node:stream';

const reverseStream = new Transform({
		transform(chunk, encoding, callback) {
			const reversedText = chunk.toString().trim().split('').reverse().join('');
			this.push(reversedText + '\n');
			callback();
		},
	},
);

const transform = async () => {
	stdin.pipe(reverseStream).pipe(stdout);
};

await transform();
