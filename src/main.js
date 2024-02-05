import getWinner from './getWinner.js';
import getUserMove from './getUserMove.js';
import dysplayMoves from './dysplayMoves.js';
import getComputerMove from './getComputerMove.js';

const startGame = (argv) => {
  if (!argv.length) {
    console.log('Enter moves :)');
    return;
  }
  if (argv.length % 2 === 0) {
    console.log('Add one more move or delete one');
    return;
  }
  console.log(dysplayMoves(argv));
  const userMove = getUserMove(argv);
  const computerMove = getComputerMove(argv);
  if (!userMove) {
    console.log('Exiting the game...');
    return;
  }
  console.log(`Your move: ${userMove}`);
  console.log(`Computer move: ${computerMove}`);
  console.log(getWinner(userMove, computerMove, argv));
};

export default startGame;
