import childProcess from 'child_process';
import test from 'ava';
import pify from 'pify';
import fs from 'fs';

test(async t => {
	await pify(childProcess.execFile)('./cli.js', ['sindresorhus@gmail.com'], {cwd: __dirname});

	t.ok(fs.statSync('sindresorhus@gmail.com.png'));
});
