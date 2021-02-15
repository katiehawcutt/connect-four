class Game {
  constructor(players, grid, container) {
    this.players = players;
    this.grid = grid;
    this.currentPlayerIndex = 0;
    this.container = container;
    this.isAcceptingInput = true;
    this.init();
  }

  init() {
    this.messageContainer = document.createElement("div");
    this.messageContainer.id = "message-container";
    this.container.appendChild(this.messageContainer);
    this.container.appendChild(this.grid.container);
    this.numberButtonsContainer = document.createElement("div");
    this.numberButtonsContainer.id = "number-buttons-container";
    this.container.appendChild(this.numberButtonsContainer);
    this.grid.draw();
    this.createButtons();
    this.displayTurn();
  }

  get currentPlayer() {
    return this.players[this.currentPlayerIndex];
  }

  displayTurn() {
    this.messageContainer.innerText = `${
      this.players[this.currentPlayerIndex].name
    }'s turn`;
  }

  handleSelection(i) {
    if (!this.isAcceptingInput) return;
    const playerColor = this.currentPlayer.color;

    this.grid.chooseSquare(i + 1, playerColor);
    const winningColor = this.grid.checkWinner();

    if (winningColor && winningColor === playerColor) {
      this.handleWin();
      return;
    }
    this.displayTurn();
    this.nextPlayer();
  }

  nextPlayer() {
    this.currentPlayerIndex++;
    if (this.currentPlayerIndex >= this.players.length) {
      this.currentPlayerIndex = 0;
    }
  }

  handleWin() {
    this.messageContainer.innerText = `${this.currentPlayer.name} wins!`;
    this.messageContainer.style.color = "springgreen";
    this.messageContainer.style.backgroundColor = "black";
    this.messageContainer.style.border = "2px white solid";
    this.isAcceptingInput = false;

    const button = document.createElement("button");
    button.innerText = "Play Again?";
    button.addEventListener("click", () => this.reset());
    this.messageContainer.appendChild(button);
  }

  reset() {
    this.grid = new Grid(this.grid.container);
    this.grid.draw();
    this.messageContainer.innerText = `${this.currentPlayer.name}'s turn first`;
    this.isAcceptingInput = true;
  }

  createButtons() {
    Array(7)
      .fill()
      .forEach((_, i) => {
        const button = document.createElement("button");
        button.addEventListener("click", () => {
          this.handleSelection(i);
        });
        button.textContent = `${i + 1}`;
        button.classList.add("number-button");
        this.numberButtonsContainer.appendChild(button);
      });
  }
}
