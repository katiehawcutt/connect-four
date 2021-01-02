const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");
const buttonThree = document.querySelector("#three");
const buttonFour = document.querySelector("#four");
const buttonFive = document.querySelector("#five");
const buttonSix = document.querySelector("#six");
const buttonSeven = document.querySelector("#seven");

class Game {
  constructor(players) {
    this.players = players.map((player) => {
      return new Player(player.name, player.color);
    });
    console.log(this.players);
    this.currentPlayerIndex = 0;
    this.grid = new Grid();
  }

  // the below code could be refactored
  play() {
    alert(
      `${this.players[this.currentPlayerIndex].name}, it's your turn first!`
    );
    buttonOne.addEventListener("click", () => {
      this.grid.chooseSquare(1, this.players[this.currentPlayerIndex].color);
      this.currentPlayerIndex++;
      if (this.currentPlayerIndex >= this.players.length) {
        this.currentPlayerIndex = 0;
      }
      this.grid.checkWinner();
    });
    buttonTwo.addEventListener("click", () => {
      this.grid.chooseSquare(2, this.players[this.currentPlayerIndex].color);
      this.currentPlayerIndex++;
      if (this.currentPlayerIndex >= this.players.length) {
        this.currentPlayerIndex = 0;
      }
    });
    buttonThree.addEventListener("click", () => {
      this.grid.chooseSquare(3, this.players[this.currentPlayerIndex].color);
      this.currentPlayerIndex++;
      if (this.currentPlayerIndex >= this.players.length) {
        this.currentPlayerIndex = 0;
      }
    });
    buttonFour.addEventListener("click", () => {
      this.grid.chooseSquare(4, this.players[this.currentPlayerIndex].color);
      this.currentPlayerIndex++;
      if (this.currentPlayerIndex >= this.players.length) {
        this.currentPlayerIndex = 0;
      }
    });
    buttonFive.addEventListener("click", () => {
      this.grid.chooseSquare(5, this.players[this.currentPlayerIndex].color);
      this.currentPlayerIndex++;
      if (this.currentPlayerIndex >= this.players.length) {
        this.currentPlayerIndex = 0;
      }
    });
    buttonSix.addEventListener("click", () => {
      this.grid.chooseSquare(6, this.players[this.currentPlayerIndex].color);
      this.currentPlayerIndex++;
      if (this.currentPlayerIndex >= this.players.length) {
        this.currentPlayerIndex = 0;
      }
    });
    buttonSeven.addEventListener("click", () => {
      this.grid.chooseSquare(7, this.players[this.currentPlayerIndex].color);
      this.currentPlayerIndex++;
      if (this.currentPlayerIndex >= this.players.length) {
        this.currentPlayerIndex = 0;
      }
    });
  }
}
