import readlineSync from 'readline-sync';
import Help from './generateTable.js';

class UserMove {
  constructor(argv) {
    this.argv = argv;
  }

  getUserMove() {
    const userMoveNum = readlineSync.question('Enter your move: ');
    const userMove = this.argv[userMoveNum - 1];
    if (userMoveNum === '?') {
      const table = new Help(this.argv);
      table.displayTable();
    }
    return userMove;
  }
}

export default UserMove;
