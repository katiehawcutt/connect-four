# Connect 4

### Class List

#### Class of square

State:

- color = null;

Behaviour:

- pickSquare(color) {
  this.color = color;
  }

#### Class of grid

State:

- squaresArray - this will be an array of 6 arrays each with 7 squares in each of them

Behaviour:
squarePicked(color, column) -

draw() - map over array to create div like a list item

#### Class of Player

State:

- name
- color

Behaviour:

- getChoice{
  prompt("which column would you like to pick)
  }

#### Class of Game

State:

- player
- currentPlayerIndex
- grid

Behavior:

- gameLoop()
- checkWinner()
  // Make an arr
- nextPlayer()

## General plan

We are making Connect 4 for 2 players to play it locally on a computer.

- The grid is going to be constructed of an array of arrays.
- Inside of each array we will have 7 squares.
- Use alert to let the players know who's turn it is.
- alertPlayerTurn() => Display message: `Hi ${name} it is your turn`

- When a player clicks on a square will either turn red or blue depending on the player's turn.
- The game will keep looping around each player until there are four squares of one color in a row.
- To work up when this is we need to come up with an alghorithm
- When this happens use alert to say who the winner is

## MVP Plan

- Prompt - Player 1, enter your name.
- Prompt -Player 2 , enter your name.
- Prompt - name1 - your color is red. Name2, your color is blue.
- drawgrid()

Start of a loop

- Prompt Player1 for their column choice - getChoice()
- squarePicked() - changing the color of the square
- Prompt Player2 for their column choice - getChoice()
- squarePicked()

## Add findWinner()
