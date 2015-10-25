#!/usr/bin/env node
'use strict';
const fs = require('fs');
const meow = require('meow');
const getGravatar = require('get-gravatar');

const cli = meow(`
	Usage
	  $ get-gravatar <email>

	Options
	  --size      Size of the image. [Default: 80]
	  --default   Image to return if the email didn\'t match any Gravatar profile.
	  --rating    Allowed rating of the image. [Default: g]

	Examples
	  $ get-gravatar sindresorhus@gmail.com
`);

if (cli.input.length === 0) {
	console.error('Email required');
	process.exit(1);
}

getGravatar(cli.input[0], cli.flags).then(image => {
	fs.writeFileSync(`${cli.input[0]}.png`, image);
	process.exit(0);
});
