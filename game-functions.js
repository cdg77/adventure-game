/**
 * Description of funciton
 *
 * @param {object} room - A room object
 * @param {string} direction - The direction of the next room
 * @param {array} mapArray - Array of objects containing all the rooms on the map
 * @returns {object} What it returns
 */

module.exports.nextRoom = function(room, direction, mapArray) {
	var direction = room.north;
	var resultRoom;

	mapArray.forEach(function(room) {
    if (room.name === direction) {
       console.log(room.name);
       resultRoom = room;
    } 
  });
  return resultRoom;    



};