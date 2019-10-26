import PTNFileParser = require('ptn-file-parser')

class GameState {
  public size: number;

  constructor(state: object = {size: 5}){
    this.size = (state as any).size;
  }

  static fromPtnFile(file: string): GameState {
    let ptnFile: any = PTNFileParser.parsePtnFile(file)
    let size = new Number(ptnFile.tags['Size'])
    return new GameState({size})
  }
}

export = GameState;
