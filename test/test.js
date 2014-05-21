var chai = require('chai');
var expect = chai.expect;

var calculations = require('../game-functions.js');

describe('nextRoom', function() {
	it('finds the next room', function() {
		var roomA = {
			"name": "A",
      "north": "D",
      "east": "B",
      "south": null,
      "west": null
    };
    
		var direction = 'north';

		var roomD = {
      "name": "D",
      "north": "G",
      "east": null,
      "south": "A",
      "west": null
    };
		expect(calculations.nextRoom(roomA, direction, [roomA, roomD])).to.eql(roomD);
	});

});