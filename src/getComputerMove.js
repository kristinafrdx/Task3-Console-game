import getRandom from './randomMove.js';

const getComputerMove = (argv) => {
  const computerMoveIndex = getRandom(argv.length - 1);
  const computerMove = argv[computerMoveIndex - 1];
  return computerMove;
};

export default getComputerMove;
