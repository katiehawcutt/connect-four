class Grid {
    constructor(){
       this.array = Array(7).fill().map(()=>
            Array(6).fill(new Square()));
       console.log(this.array);
    }
    draw(){
        this.array.forEach((column)=>{
            const columnContainer = document.createElement("div");
            column.forEach((squareItem)=>{
             const square = document.createElement("div"); 
             square.style.backgroundColor="white";
             square.style.border = "black solid 2px";  
            columnContainer.appendChild(square);
            });
            const container = document.querySelector("#container");
            container.appendChild(columnContainer);
        });
    }
}

const grid = new Grid();