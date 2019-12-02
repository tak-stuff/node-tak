import PTNFileParser = require('ptn-file-parser');
import TakBoard = require('./takBoard');
import Move = require('./move');

class GameState {
  public size: number;
  public playerOne: string = "Unkown";
  public playerTwo: string = "Unkown";
  public isGameOver: boolean = false;
  public result: string = "";
  private _board: TakBoard;

  constructor(state: object = {size: 5}){
    this.size = (state as any).size;
    this._board = new TakBoard(this.size);
  }

  static fromPtnFile(file: string): GameState {
    let ptnFile: any = PTNFileParser.parsePtnFile(file)
    let size = +ptnFile.tags['Size'];
    let state = new GameState({size})
    if(ptnFile.tags['Player1']) state.playerOne = ptnFile.tags['Player1'];
    if(ptnFile.tags['Player2']) state.playerTwo = ptnFile.tags['Player2'];
    // possible outcomes are R-0/0-R (road win), F-0/0-F (flat win), 1-0/0-1 (resignation), and 1/2-1/2 (draw)
    if(ptnFile.tags['Result'] && (ptnFile.tags['Result'] as string).search(/[RF1]/gi) >= 0) {
      state.isGameOver = true;
      state.result = ptnFile.tags['Result'];
    }
    // ToDo! loop through moves and place pieces
    let moveNr = 0;
    while(ptnFile.whiteMoves[moveNr]) {
      state.move(Move.fromPtn(ptnFile.whiteMoves[moveNr]))
      if(!ptnFile.blackMoves[moveNr]) break;
      state.move(Move.fromPtn(ptnFile.blackMoves[moveNr]))
    }
    return state;
  }

  move(move: Move) {
    throw new Error("Method not implemented.");
  }
}

export = GameState;
