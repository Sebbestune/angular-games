import { Component } from '@angular/core';

interface IGridItem {
  clicked: boolean;
  value: string;
}

class GridItem implements IGridItem {
  clicked: boolean;
  value: string;
  
  constructor(){
    this.clicked = false;
    this.value = "_";
  }

  set(turn : boolean){
    this.clicked = true;
    turn ? this.value = "X" :  this.value = "O";
  }

  ignore(){
    console.log("Don't click a set board-tile.")
  }
}

class GameBoard {
  gridItems: GridItem[];
  turn = true;

  constructor(){
    this.gridItems = [];
    for(let i = 0; i < 9; i++){
      this.gridItems.push(new GridItem);
    }
  }

  changeTurn(){
    console.log(this.turn)
    return this.turn ? this.turn = false : this.turn = true;
  }
}

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.scss']
})
export class TictactoeComponent {
    board = new GameBoard;

    constructor(){
      console.log(this.board);
    }
}
