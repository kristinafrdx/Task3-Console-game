import readlineSync from 'readline-sync';
import GetHelp from './generateTable.js';

class UserMove {
  constructor(argv) {
    this.argv = argv;
  }

  getUserMove() {
    const userMoveNum = readlineSync.question('Enter your move: ');
    const userMove = this.argv[userMoveNum - 1];
    if (userMoveNum === '?') {
      const table = new GetHelp(this.argv);
      table.displayTable();
    }
    return userMove;
  }
}

export default UserMove;
