import _ from 'lodash';

const getWinner = (userMove, compInd, moves) => {
  const userIndex = moves.indexOf(userMove);
  if ((userIndex + 1) < 0 || (userIndex + 1) > moves.length) {
    return 'Incorrect number of moves';
  }
  const copy = [...moves];
  const bothArr = moves.concat(copy);
  const newAr = bothArr.slice(userIndex);
  const res = _.uniq(newAr);
  const withoutStartElem = res.filter((el) => el !== userMove);
  const middle = withoutStartElem.length / 2;
  // const win = withoutStartElem.slice(0, middle);
  const lose = withoutStartElem.slice(middle);
  if (compInd === userMove) {
    return 'draw';
  }
  if (lose.includes(compInd)) {
    return 'win';
  }
  return 'lose';
};

export default getWinner;
