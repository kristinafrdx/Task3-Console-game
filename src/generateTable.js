import Table from 'cli-table';
import Winner from './getWinner.js';

class Help {
  constructor(moves) {
    this.moves = moves;
    this.table = new Table({
      head: [`User->\n${'↓'}Computer`, ...moves.map((el) => el.toString())],
    });
  }

  generateTable() {
    for (const move of this.moves) {
      const row = [move];
      for (const j of this.moves) {
        const result = new Winner(j, move, this.moves).get();
        row.push(result);
      }
      this.table.push(row);
    }
  }

  displayTable() {
    this.generateTable();
    console.log('\nEnter arguments and do your move.\nThe table of rules is here:');
    console.log(this.table.toString());
    console.log('\nOn the left columns: the choice of computer, upside: your choice');
  }
}

export default Help;
