class Game {
  constructor(players) {
    this.players = players.map((player) => {
      return new Player(player.name, player.color);
    });
    console.log(this.players);
    this.currentPlayerIndex = 0;
    this.grid = new Grid();
  }

  play() {
    //change to startGame()?
    alert(`${this.players[this.currentPlayerIndex].name}, you are RED`);
    this.currentPlayerIndex++;
    alert(`${this.players[this.currentPlayerIndex].name}, you are BLUE`);
    this.currentPlayerIndex = 0;
    // while (true) {
    this.grid.draw();
    const columnChoice = this.players[this.currentPlayerIndex].getChoice();
    this.grid.chooseSquare(
      columnChoice,
      this.players[this.currentPlayerIndex].color
    );

    //changing who's turn it is
    this.currentPlayerIndex++;
    if (this.currentPlayerIndex >= this.players.length) {
      this.currentPlayerIndex = 0;
    }
    // }
  }

  // add buttons instead of prompt
  // add eventListeners on each button and hand in the column/button number to function - maybe make a new function which calls both the chooseSquare() and draw() function
  // new method - playerMove() with lines 17 -28

  //add user input for name and color
}
