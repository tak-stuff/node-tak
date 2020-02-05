import { expect } from 'chai';
import GameState from '../lib/gameState';

describe('GameState', () => {
  it('should assume a board size of 5', () => {
    const state = new GameState();
    expect(state.size).to.equal(5);
  });
});
