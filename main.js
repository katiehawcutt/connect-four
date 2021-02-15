const form = document.querySelector("#player-inputs");
const gameContainer = document.querySelector("#game-container");

const players = [];

form.addEventListener("submit", (e) => {
  const [
    playerOneName,
    playerOneColor,
    playerTwoName,
    playerTwoColor,
  ] = e.target;

  players.push(
    new Player(
      playerOneName.value === "" ? "Player 1" : playerOneName.value,
      playerOneColor.value
    ),
    new Player(
      playerTwoName.value === "" ? "Player 2" : playerTwoName.value,
      playerTwoColor.value
    )
  );

  const gridContainer = document.createElement("div");
  gridContainer.id = "grid-container";
  const grid = new Grid(gridContainer);
  new Game(players, grid, gameContainer);

  form.remove();
});
