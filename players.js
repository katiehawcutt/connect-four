class Player{
    constructor(name,color){
this.name = name;
this.color=color;
    }

    getChoice(){
       const column = parseInt( prompt(`${this.name} which column would you like to pick?`));
       return column;
    }

}