import getRandom from './randomMove.js';

class ComputerMove {
  constructor(argv) {
    this.argv = argv;
  }

  getComputerMove() {
    const computerMoveIndex = getRandom(this.argv.length - 1);
    const computerMove = this.argv[computerMoveIndex - 1];
    return computerMove;
  }
}

export default ComputerMove;
