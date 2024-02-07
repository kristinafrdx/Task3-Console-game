import crypto from 'crypto';
import Winner from './getWinner.js';
import UserMove from './getUserMove.js';
import Moves from './showMoves.js';
import HmacComp from './hmac.js';
import ComputerMove from './getComputerMove.js';

class Game {
  constructor(argv) {
    this.argv = argv;
  }

  startGame() {
    if (!this.argv.length) {
      console.log('Enter moves :)');
      return;
    }
    if (this.argv.length % 2 === 0) {
      console.log('Add one more move or delete one');
      return;
    }

    const key = crypto.randomBytes(32).toString('hex');
    const computer = new ComputerMove(this.argv);
    const computerMove = computer.getComputerMove();

    const hmacComp = new HmacComp(key);
    console.log(`HMAC: ${hmacComp.generateHmac(computerMove)}`);

    const moves = new Moves(this.argv);
    console.log(moves.showMoves());

    const user = new UserMove(this.argv);
    const userMove = user.getUserMove();

    if (!userMove || !this.argv.includes(userMove)) {
      console.log('Your move incorrect');
      return;
    }
    console.log(`Your move: ${userMove}`);
    console.log(`Computer move: ${computerMove}`);
    console.log(new Winner(userMove, computerMove, this.argv).get());
    console.log(`HMAC-key: ${key}`);
  }
}

export default Game;
