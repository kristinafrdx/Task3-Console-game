#!/usr/bin/env node
import Game from '../src/main.js';

const argv = process.argv.slice(2);
const game = new Game(argv);
game.startGame();
