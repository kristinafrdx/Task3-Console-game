class Moves {
  constructor(argv) {
    this.argv = argv;
  }

  showMoves() {
    const availableMoves = {};
    this.argv.forEach((el, i) => {
      availableMoves[i + 1] = el;
    });
    const objMoves = Object.entries(availableMoves);
    const number = (objMoves.map(([key, value]) => `${key} - ${value}`)).join('\n');
    const instruction = '\n0 - exit\n? - help';
    return `Available moves:\n${number}${instruction}`;
  }
}

export default Moves;
