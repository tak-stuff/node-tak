class TakBoard {
  private _size: number;
  private _board: string[];

  constructor(size: number) {
    this._size = size;
    this._board = new Array(size*size)
  }

  public addPiece(): void {
    
  }
}

export = TakBoard;
