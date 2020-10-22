const players = [
  {
    name: prompt(`Player 1, please enter your name:`),
    color: "red",
  },
  { name: prompt(`Player 2, please enter your name:`), color: "blue" },
];

const game = new Game(players);

game.play();
