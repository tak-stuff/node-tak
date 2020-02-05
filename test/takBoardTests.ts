import { expect } from 'chai';
import TakBoard from '../lib/takBoard';

describe('TakBoard', () => {
  it('should create a board of the given size', () => {
    const board = new TakBoard(5);
    expect(board.board.length).to.equal(25);
  });
});
