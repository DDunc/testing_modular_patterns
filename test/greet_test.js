'use strict';

var greet = require('../greet');
var greetExports = require('../greet_exports');
var chai = require('chai');
var expect = chai.expect;

describe('greet', function(){
	it('should return hello world', function(){
		expect(greet()).to.eql('hello world');
	});
});

describe('greet exports', function(){
	it("should return a capital letter", function(){
		var character = greetExports.greet()
		expect(character).to.eql("Hello, Mr. " + character.toUpperCase());
	});
});