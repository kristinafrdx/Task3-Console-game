import Table from 'cli-table';
import getWinner from './getWinner.js';

const getHelp = (moves) => {
  console.log('\nEnter arguments and do your move.\nThe table of rules is here:');
  const arrowDown = '\u2193';
  const tabl = new Table({
    head: [`User->\n${arrowDown}Computer`, ...moves.map((el) => el.toString())],
  });
  for (let i = 0; i < moves.length; i += 1) {
    const row = [moves[i]];
    for (let j = 0; j < moves.length; j += 1) {
      const result = getWinner(moves[j], moves[i], moves);
      row.push(result);
    }
    tabl.push(row);
  }
  console.log(tabl.toString());
  console.log('\nOn the left columns: the choice of computer, upside: your choice');
};

export default getHelp;
