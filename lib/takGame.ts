import GameState = require("./gameState");

class TakGame {
    private _gameState: GameState;
    constructor(state: GameState) {
        this._gameState = state;
    }

    get boardSize(): number {
        return this._gameState.size;
    }
}

export = TakGame;
