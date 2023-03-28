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
}

class GameBoard {
  gridItems: GridItem[];

  constructor(){
    this.gridItems = [];
    for(let i = 0; i < 9; i++){
      this.gridItems.push(new GridItem);
    }
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
