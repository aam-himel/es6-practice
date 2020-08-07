class Player {
    constructor(pId, pName, pAge) {
        this.id = pId;
        this.name = pName;
        this.age = pAge;
    }

}

const player1 = new Player(1, 'Abdullah', 24);
const player2 = new Player(2, 'Faisal', 18);

console.log(player1, player2);