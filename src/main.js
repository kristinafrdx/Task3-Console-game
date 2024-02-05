import crypto from 'crypto';
import getWinner from './getWinner.js';
import getUserMove from './getUserMove.js';
import dysplayMoves from './dysplayMoves.js';
import getComputerMove from './getComputerMove.js';
import getHmacComp from './hmac.js';

const startGame = (argv) => {
  if (!argv.length) {
    console.log('Enter moves :)');
    return;
  }
  if (argv.length % 2 === 0) {
    console.log('Add one more move or delete one');
    return;
  }
  const key = crypto.randomBytes(32).toString('hex');
  const computerMove = getComputerMove(argv);
  const hmacComp = getHmacComp(computerMove, key);
  console.log(`HMAC: ${hmacComp}`);
  console.log(dysplayMoves(argv));
  const userMove = getUserMove(argv);
  if (!userMove) {
    console.log('Exiting the game...');
    return;
  }
  console.log(`Your move: ${userMove}`);
  console.log(`Computer move: ${computerMove}`);
  console.log(getWinner(userMove, computerMove, argv));
  console.log(`HMAC-key: ${key}`);
};

export default startGame;
