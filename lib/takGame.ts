import GameState from './gameState';

class TakGame {
  private readonly _gameState: GameState;
  constructor(state: GameState) {
    this._gameState = state;
  }

  get boardSize(): number {
    return this._gameState.size;
  }
}

export default TakGame;
