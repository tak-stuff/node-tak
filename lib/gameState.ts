import PTNFileParser = require('ptn-file-parser')
import TakBoard = require('./takBoard')

class GameState {
  public size: number;
  private _board: TakBoard;

  constructor(state: object = {size: 5}){
    this.size = (state as any).size;
    this._board = new TakBoard(this.size);
  }

  static fromPtnFile(file: string): GameState {
    let ptnFile: any = PTNFileParser.parsePtnFile(file)
    let size = new Number(ptnFile.tags['Size'])
    // ToDo! loop through moves and place pieces
    return new GameState({size})
  }
}

export = GameState;
