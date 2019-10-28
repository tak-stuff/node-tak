"use strict";
const expect = require("chai").expect;
const GameState = require("../dist/gameState");
const TakGame = require("../dist/takGame");

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
