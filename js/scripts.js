////////Business Logic////////
function Player(mark) {//Creates player with their given mark.
  this.mark = mark;
}
var playerOne = new Player("X");
var playerTwo = new Player("O");

function Space(cord) {//the properties of each
  this.cord = cord;
  this.chosenMark = '';
}
Space.prototype.markedBy = function(player) {//marks the space with the player's mark
  this.chosenMark = player.mark;
}
//creates 9 new Spaces
var space1 = new Space("1");
var space2 = new Space("2");
var space3 = new Space("3");
var space4 = new Space("4");
var space5 = new Space("5");
var space6 = new Space("6");
var space7 = new Space("7");
var space8 = new Space("8");
var space9 = new Space("9");

var playerOneCord = '';
var playerTwoCord = '';
var valueStore = function(space){
  if (space.chosenMark === 'X') {
    playerOneCord += space.cord;
  } else if (space.chosenMark === 'O'){
    playerTwoCord += space.cord;
  }
}

valueStore(space1);

space1.markedBy(playerOne);
  console.log("This is Space One: " + space1.chosenMark);//tests if this fucking works.

//winning combinations


// UI Logic
$(document).ready(function() {

});
