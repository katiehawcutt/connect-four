const playerOneName = document.querySelector("#player1Name");
const playerOneColor = document.querySelector("#player1Color");
const playerTwoName = document.querySelector("#player2Name");
const playerTwoColor = document.querySelector("#player2Color");
const startGameButton = document.querySelector("#startGame");

const players = [];

startGameButton.addEventListener("click", () => {
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
  const game = new Game(players);
  game.play();
  console.log(players);
});

const grid = new Grid();
grid.draw();
