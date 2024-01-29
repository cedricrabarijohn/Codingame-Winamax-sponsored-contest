/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const width = parseInt(inputs[0]);
const height = parseInt(inputs[1]);

// . => empy cell
// 1 - 9 => ball's shot count
// X => water hazard
// H => hole

class MapObj {
    constructor(x, y) {
        this.x = x;
        this.y = y
    }
}

class Ball extends MapObj {
    constructor(ballCount, x, y) {
        super(x, y);
        this.ballCount = Number(ballCount);
    }
}

class EmptyCell extends MapObj {
    constructor(x, y) {
        super(x, y);
    }
}

class WaterHazard extends MapObj {
    constructor(x, y) {
        super(x, y);
    }
}

class Hole extends MapObj {
    constructor(x, y) {
        super(x, y);
    }
}

const balls = [];
const emptyCells = [];
const waterHazards = [];
const holes = [];

const checkIsBall = (str) => {
    return !isNaN(Number(str));
}

const checkIsEmptyCell = (str) => {
    return str === '.';
}

const checkIsWaterHazard = (str) => {
    return str === 'X';
}

const checkIsHole = (str) => {
    return str === 'H';
}

console.error('Map :\n');
for (let i = 0; i < height; i++) {
    const row = readline();
    const rowArr = row.split("");
    console.error(row);
    for (let j = 0; j < width; j++){
        const value = rowArr[j];
        checkIsBall(value) && balls.push(new Ball(value, j, i));
        checkIsEmptyCell(value) && emptyCells.push(new EmptyCell(j, i));
        checkIsWaterHazard(value) && waterHazards.push(new WaterHazard(j, i));
        checkIsHole(value) && holes.push(new Hole(j, i));
    }
}

console.error(`\nballs :${balls.map(ball => ` count : ${ball.ballCount} [${ball.x} ${ball.y}]`)}`)
console.error(`empty cells :${emptyCells.map(cell => ` [${cell.x} ${cell.y}]`)}`);
console.error(`water hazards :${waterHazards.map(water => ` [${water.x} ${water.y}]`)}`);
console.error(`holes :${holes.map(hole => ` [${hole.x} ${hole.y}]`)}`);


