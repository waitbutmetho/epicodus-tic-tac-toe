//Business Logic
function Player(mark) {
  this.mark = mark;
}

function Space(xcord, ycord) {
  this.xcord = xcord;
  this.ycord = ycord;
  this.chosenMark = '';
}

Space.prototype.markedBy = function(player) {
  this.chosenMark = player.mark;
}

// UI Logic
$(document).ready(function() {

});
