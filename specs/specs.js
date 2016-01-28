describe("valueStore", function(){
  it("will retrieve the player's chosen cord and store it in their respective variable as a string.", function(){
    expect(playerOneCord).to.equal("1");
  });
})

describe("Player", function(){
  it("creates a new player with all of the player's propeties", function(){
    var testPlayer = new Player("X");
    expect(testPlayer.mark).to.equal("X");
  });

});
describe('Space', function() {
  it("lets a player mark a space", function() {
    var testPlayer = new Player("X");
    var testSpace = new Space("1");
    testSpace.markedBy(testPlayer);
    expect(testSpace.chosenMark).to.equal('X');
  });
    it("returns the player's coordinate mark", function() {
      var testSpace = new Space("1");
      expect(testSpace.cord).to.equal("1");
  });
  it("returns the player's mark", function() {
    var testSpace = new Space("1");
    expect(testSpace.chosenMark).to.equal("");
  });
});
