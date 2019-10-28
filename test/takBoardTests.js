"use strict";
const expect = require("chai").expect;
const TakBoard = require("../dist/takBoard")

describe("TakBoard", () => {
  it("should create a board of the given size", () => {
    var board = new TakBoard(5);
    expect(board._board.length).to.equal(25);
  });
});
