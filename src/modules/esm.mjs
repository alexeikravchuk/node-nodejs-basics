import path from 'node:path';
import { createRequire } from 'node:module';
import { release, version } from 'node:os';
import { createServer as createServerHttp } from 'node:http';
import './files/c.js';

const { dirname, filename, url } = import.meta;
const require = createRequire(url);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
	unknownObject = require('./files/a.json');
} else {
	unknownObject = require('./files/b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);


console.log(`Path to current file is ${filename}`);
console.log(`Path to current directory is ${dirname}`);

const myServer = createServerHttp((_, res) => {
	res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
	console.log('To terminate it, use Ctrl+C combination');
});

export {
	unknownObject,
	myServer,
};

