import {expect} from "chai";
import GameState from "../lib/gameState";
import TakGame from "../lib/takGame";

describe("TakGame", () => {
  it("should take the board size from the game state", () => {
    for (let i of [4, 5, 6, 8]) {
      let state = new GameState({ size: i });
      let game = new TakGame(state);
      expect(game.boardSize)
        .to.equal(state.size)
        .and.to.equal(i);
    }
  });
});
