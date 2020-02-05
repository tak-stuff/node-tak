class TakBoard {
  public readonly size: number;
  public readonly board: string[];

  constructor(size: number) {
    this.size = size;
    this.board = new Array(size * size);
  }
}

export default TakBoard;
