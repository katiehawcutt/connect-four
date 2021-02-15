class Grid {
  constructor(container) {
    this.container = container;
    this.array = Array(7)
      .fill()
      .map(
        () =>
          Array(6)
            .fill()
            .map(() => new Square()) // needed to add another .map otherwise it was the same object 6 times (so all changed color)
      );
  }
  draw() {
    this.container.innerHTML = "";

    this.array.forEach((column) => {
      const columnContainer = document.createElement("div");
      column.forEach((squareItem) => {
        const square = document.createElement("div");
        square.style.backgroundColor = squareItem.isInWinningLine
          ? "black"
          : squareItem.color || "white";
        square.style.border = "black solid 2px";
        columnContainer.appendChild(square);
      });
      this.container.appendChild(columnContainer);
    });
  }

  chooseSquare(columnNumber, playerColor) {
    const index = columnNumber - 1;
    const chosenSquare = this.array[index].find(
      (square) => square.color === null
    );
    if (chosenSquare) {
      chosenSquare.pickSquare(playerColor);
    }
    this.draw();
  }

  highlightWinner(squares) {
    squares.forEach((square) => (square.isInWinningLine = true));
    this.draw();
  }

  checkWinner() {
    const board = this.array;
    // Check horizontal
    for (let row = 0; row < 4; row++) {
      for (let column = 0; column < 6; column++) {
        if (
          checkLine(
            board[row][column],
            board[row + 1][column],
            board[row + 2][column],
            board[row + 3][column]
          )
        ) {
          this.highlightWinner([
            board[row][column],
            board[row + 1][column],
            board[row + 2][column],
            board[row + 3][column],
          ]);
          return board[row][column].color;
        }
      }
    }

    // Check vertical
    for (let row = 0; row < 7; row++) {
      for (let column = 0; column < 3; column++) {
        if (
          checkLine(
            board[row][column],
            board[row][column + 1],
            board[row][column + 2],
            board[row][column + 3]
          )
        ) {
          this.highlightWinner([
            board[row][column],
            board[row][column + 1],
            board[row][column + 2],
            board[row][column + 3],
          ]);
          return board[row][column].color;
        }
      }
    }

    // // Check down-left
    for (let row = 0; row < 4; row++) {
      for (let column = 0; column < 3; column++) {
        if (
          checkLine(
            board[row][column],
            board[row + 1][column + 1],
            board[row + 2][column + 2],
            board[row + 3][column + 3]
          )
        ) {
          this.highlightWinner([
            board[row][column],
            board[row + 1][column + 1],
            board[row + 2][column + 2],
            board[row + 3][column + 3],
          ]);
          return board[row][column].color;
        }
      }
    }

    // // Check down-right
    for (let row = 3; row < 7; row++) {
      for (let column = 0; column < 3; column++) {
        if (
          checkLine(
            board[row][column],
            board[row - 1][column + 1],
            board[row - 2][column + 2],
            board[row - 3][column + 3]
          )
        ) {
          this.highlightWinner([
            board[row][column],
            board[row - 1][column + 1],
            board[row - 2][column + 2],
            board[row - 3][column + 3],
          ]);
          return board[row][column].color;
        }
      }
    }

    return null;
  }
}

function checkLine(a, b, c, d) {
  return (
    a.color != null &&
    a.color == b.color &&
    a.color == c.color &&
    a.color == d.color
  );
}
