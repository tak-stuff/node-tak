'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');
describe('hi function test', () => {
    it('should return "Hey Ho"', () => {
        var result = index.hi();
        expect(result).to.equal('Hey Ho');
    });
});