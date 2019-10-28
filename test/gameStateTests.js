"use strict";
const expect = require("chai").expect;
const GameState = require("../dist/gameState")

describe("GameState", () => {
  it("should assume a board size of 5", () => {
    var state = new GameState();
    expect(state.size).to.equal(5);
  });
});
