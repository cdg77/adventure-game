    //we want to know where we are
    //what direction we are going
    //where do we end up
	var direction = room.north;
	var resultRoom;

	mapArray.forEach(function(room) {
    if (room.name === direction) {
       console.log(room.name);
       resultRoom = room;
    } 
  });
  return resultRoom;  