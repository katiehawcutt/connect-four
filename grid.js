class Grid {
  constructor() {
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
    const container = document.querySelector("#container"); // moved to top so out of loop
    container.innerHTML = "";

    this.array.forEach((column) => {
      const columnContainer = document.createElement("div");
      column.forEach((squareItem) => {
        const square = document.createElement("div");
        square.style.backgroundColor = squareItem.color || "white";
        square.style.border = "black solid 2px";
        columnContainer.appendChild(square);
      });
      container.appendChild(columnContainer);
    });
    console.log(this.array[0]);
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

  checkWinner() {
    const winner = [];
    console.log(this.array[0]);
    for (let i = 0; i < this.array[0].length; i++) {
      if (
        this.array[0][i].color === this.array[0][i + 1].color &&
        this.array[0][i].color !== null
      ) {
        console.log(this.array[0][i].color);
        console.log(this.array[0][i + 1].color);
        console.log(winner);
        return winner.push(true);
      } else {
        console.log(winner);
        return winner.push(false);
      }
    }
  }
}

// write a new method that takes in the columnNumber, playerColor
// columnNumber - 1 and save it in a variable called index
// array[index].find() first square that color = null; and change the color of the square to the playerColor
// also call pickSquare(PlayerColor)
