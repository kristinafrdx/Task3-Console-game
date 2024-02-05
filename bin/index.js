#!/usr/bin/env node
import startGame from '../src/main.js';

const argv = process.argv.slice(2);
startGame(argv);
