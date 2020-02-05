import PtnFileParser from 'ptn-file-parser';
import TakBoard from './takBoard';

class GameState {
  public size: number;
  private readonly board: TakBoard;

  constructor(state: object = { size: 5 }) {
    this.size = (state as any).size;
    this.board = new TakBoard(this.size);
  }

  public static fromPtnFile(file: string): GameState {
    const ptnFile: any = PtnFileParser.parsePtnFile(file);
    const size = Number(ptnFile.tags.Size);
    // ToDo! loop through moves and place pieces
    return new GameState({ size });
  }
}

export default GameState;
