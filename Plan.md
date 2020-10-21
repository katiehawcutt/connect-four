# Connect 4 

### Class List 

#### Class of square 
State:
- picked = false;
- color = "white"

Behavior:
- picked() => picked = true;
- turnSquareBlue() => color = "blue"
- turnSquareRed() => color =  "red"

#### Class of grid
State:
- squaresArray

Behaviour:
squarePicked() =>the function will identify which square was picked and change it's colour 

#### Class of Player
State:
- name

Behavior:
- alertPlayerTurn() => Display message: `Hi ${name} it is your turn` 

#### Class of Game
State:
- player
- currentPlayerIndex
- grid

Behavior:
- gameLoop()
- checkWinner()
- nextPlayer()

## General plan 
We are making Connect 4 for 2 players to play it locally on a computer.
- The grid is going  to be constructed of an array of arrays.
- Inside of each array we will have 7 squares.
- Use alert to let the players know who's turn it is.
- When  a player clicks on a square will either turn red or blue depending on the player's turn.
- The game will keep looping around each player until there are four squares of one color in a row.
- To work up when this is we need to come up with an alghorithm 
- When this happens use alert to say who the winner is 
