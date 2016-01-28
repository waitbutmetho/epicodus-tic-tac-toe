describe ('Board', function() {
  it("creates a board of 9 spaces when started", function (){
    var testBoard = new Board()
  });
});

describe("Player", function(){
  it("creates a new player with all of the player's propeties", function(){
    var testPlayer = new Player("X");
    expect(testPlayer.mark).to.equal("X");
  });
});
describe('Space', function() {
    it("lets a player mark a space", function() {
      var testPlayer = new Player("X");
      var testSpace = new Space(1,2);
      testSpace.markedBy(testPlayer);
      expect(testSpace.chosenMark).to.equal('X');
   });
    it("returns the player's xcord mark", function() {
      var testSpace = new Space(1,2);
      expect(testSpace.xcord).to.equal(1);
   });
   it("returns the player's ycord mark", function() {
     var testSpace = new Space(1,2);
     expect(testSpace.ycord).to.equal(2);
  });
  it("returns the player's mark", function() {
    var testSpace = new Space(1,2);
    expect(testSpace.chosenMark).to.equal("");
 });
});
