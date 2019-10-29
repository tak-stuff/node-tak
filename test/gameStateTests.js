"use strict";
const expect = require("chai").expect;
const GameState = require("../dist/gameState")
const ptnFile = require('./resources/ptnFile')

describe("GameState", () => {
  it("should assume a board size of 5", () => {
    var state = new GameState();
    expect(state.size).to.equal(5);
  });
  it("should read data from PTN file", () => {
    var state = GameState.fromPtnFile(ptnFile.simplePtnFile);
    expect(state.size).to.equal(6);
    expect(state.playerOne).to.equal("NohatCoder");
    expect(state.playerTwo).to.equal("fwwwwibib");
    expect(state.isGameOver).to.be.true;
    expect(state.result).to.equal("R-0");
  });
});
