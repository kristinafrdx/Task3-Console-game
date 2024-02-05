import _ from 'lodash';

class GetWinner {
  constructor(userMove, compMove, moves) {
    this.userMove = userMove;
    this.compInd = compMove;
    this.moves = moves;
  }

  get() {
    const userIndex = this.moves.indexOf(this.userMove);
    if ((userIndex + 1) < 0 || (userIndex + 1) > this.moves.length) {
      return 'Incorrect number of moves';
    }
    const copy = [...this.moves];
    const bothArr = this.moves.concat(copy);
    const newAr = bothArr.slice(userIndex);
    const res = _.uniq(newAr);
    const withoutStartElem = res.filter((el) => el !== this.userMove);
    const middle = withoutStartElem.length / 2;
    const lose = withoutStartElem.slice(middle);
    if (this.compInd === this.userMove) {
      return "It's a draw!";
    }
    if (lose.includes(this.compInd)) {
      return 'You win!';
    }
    return 'You lose!';
  }
}

export default GetWinner;
