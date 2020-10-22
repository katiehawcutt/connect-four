class Grid {
  constructor() {
    this.array = Array(7)
      .fill()
      .map(() => Array(6).fill(new Square()));
    console.log(this.array);
  }
  draw() {
    this.array.forEach((column) => {
      const columnContainer = document.createElement("div");
      column.forEach((squareItem) => {
        const square = document.createElement("div");
        square.style.backgroundColor = squareItem.color || "white";
        square.style.border = "black solid 2px";
        columnContainer.appendChild(square);
      });
      const container = document.querySelector("#container");
      container.innerHTML = "";
      container.appendChild(columnContainer);
    });
  }
  
  chooseSquare(columnNumber, playerColor) {
    const index = columnNumber - 1;
    const chosenSquare = this.array[index].find(
      (square) => square.color === null
    );
    console.log(chosenSquare);
    console.log(playerColor);
    if (chosenSquare) {
    //chosenSquare.style.backgroundColor = playerColor;
    chosenSquare.pickSquare(playerColor);
    }
    this.draw();
  }
}

// write a new method that takes in the columnNumber, playerColor
// columnNumber - 1 and save it in a variable called index
// array[index].find() first square that color = null; and change the color of the square to the playerColor
// also call pickSquare(PlayerColor)
