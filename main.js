const playerOneName = document.querySelector("#player1Name");
const playerOneColor = document.querySelector("#player1Color");
const playerTwoName = document.querySelector("#player2Name");
const playerTwoColor = document.querySelector("#player2Color");
const playersInfoSubmit = document.querySelector("#playersInput");
const startGameButton = document.querySelector("#startGame");

const players = [];

playersInfoSubmit.addEventListener("click", () => {
  players.push(
    {
      name: playerOneName.value,
      color: playerOneColor.value,
    },
    {
      name: playerTwoName.value,
      color: playerTwoColor.value,
    }
  );
  console.log(players);
});

startGameButton.addEventListener("click", () => {
  const game = new Game(players);
  game.play();
});

const grid = new Grid();
grid.draw();
