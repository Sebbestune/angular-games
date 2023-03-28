import { Component } from '@angular/core';

interface IGridItem {
  clicked: boolean;
  value: string;
}

class GridItem implements IGridItem {
  clicked: boolean;
  value: string;

  constructor() {
    this.clicked = false;
    this.value = "_";
  }

  set(turn: boolean) {
    this.clicked = true;
    turn ? this.value = "X" : this.value = "O";
  }

  ignore() {
    console.log("Don't click a set board-tile.")
  }
}

class GameBoard {
  gridItems: GridItem[];
  turn = true;

  constructor() {
    this.gridItems = [];
    for (let i = 0; i < 9; i++) {
      this.gridItems.push(new GridItem);
    }
  }

  changeTurn() {
    console.log(this.turn)
    return this.turn ? this.turn = false : this.turn = true;
  }

  checkIfWon() {

    let checker = (gridItemA: GridItem, gridItemB: GridItem, gridItemC: GridItem) => {
      if (gridItemA.clicked && gridItemB.clicked && gridItemC.clicked) {
        if (gridItemA.value == gridItemB.value && gridItemB.value == gridItemC.value) {
          this.turn ? console.log("X wins!") : console.log("O wins!");
        }
      }
    };

    checker(this.gridItems[0], this.gridItems[1], this.gridItems[2]); //Check top row
    checker(this.gridItems[3], this.gridItems[4], this.gridItems[5]); //Check middle row
    checker(this.gridItems[6], this.gridItems[7], this.gridItems[8]); //Check bottom row
    checker(this.gridItems[0], this.gridItems[4], this.gridItems[8]); //Check diagonal top left - bottom right
    checker(this.gridItems[2], this.gridItems[4], this.gridItems[6]); //Check diagonal top right - bottom left
    checker(this.gridItems[0], this.gridItems[3], this.gridItems[6]); //Check left column
    checker(this.gridItems[1], this.gridItems[4], this.gridItems[7]); //Check middle column
    checker(this.gridItems[2], this.gridItems[5], this.gridItems[8]); //Check right column
  }
}

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.scss']
})
export class TictactoeComponent {
  board = new GameBoard;

  constructor() {
    console.log(this.board);
  }

  gridAction(gridItem: any) {
    !gridItem.clicked ? (gridItem.set(this.board.changeTurn())) : gridItem.ignore()
    this.board.checkIfWon();
  }
}
