import readlineSync from 'readline-sync';
import getHelp from './generateTable.js';

const getUserMove = (argv) => {
  const userMoveNum = readlineSync.question('Enter your move: ');
  const userMove = argv[userMoveNum - 1];
  // if (userMoveNum === 0) return;
  if (userMoveNum === '?') {
    getHelp(argv);
  }
  return userMove;
};

export default getUserMove;
