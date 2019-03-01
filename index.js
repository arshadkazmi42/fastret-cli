#!/usr/bin/env node

const { fastRetExecute } = require('./lib');

const [, , ...args] = process.argv;
fastRetExecute(args);
