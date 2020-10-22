class Game {
  constructor(players) {
    this.players = players.map((player) => {
      return new Player(player.name, player.color);
    });
    console.log(this.players);
    this.currentPlayerIndex = 0;
    this.grid = new Grid();
    this.grid.draw();
  }

  play() {
    alert(`${this.players[this.currentPlayerIndex].name}, you are RED`);
    this.currentPlayerIndex++;
    alert(`${this.players[this.currentPlayerIndex].name}, you are BLUE`);
    this.currentPlayerIndex = 0;
    while (true) {
      const columnChoice = this.players[this.currentPlayerIndex].getChoice();
      this.grid.chooseSquare(columnChoice,
        this.players[this.currentPlayerIndex].color)
      
      //changing who's turn it is
      this.currentPlayerIndex++;
      if (this.currentPlayerIndex >= this.players.length) {
        this.currentPlayerIndex = 0;
      }
    }
  }
}
