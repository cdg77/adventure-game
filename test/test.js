var chai = require('chai');
var expect = chai.expect;

var calculations = require('../game-functions.js');

describe('nextRoom', function() {
	it('finds the next room', function() {
		var room = {
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
		expect(calculations.nextRoom(room, direction, [room, roomD])).to.eql(roomD);
	});

});