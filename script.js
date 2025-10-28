
const TILE_STATUS ={
    HIDDEN: "hidden",
    MINE: "mine",
    NUMBER: "number",
    MARKED: "marked",
}

const BOARD_SIZE = 10;
const numberOfMines = 10;
const minePositions = getminePositions(BOARD_SIZE, numberOfMines);
let isgameOver = false;

export function createBoard(BOARD_SIZE, numberOfMines) {
    
    let board = [];

    for(let x = 0 ; x < BOARD_SIZE ; x++) {
        let row = [];
        for(let y = 0 ; y < BOARD_SIZE ; y++) {
            const element = document.createElement("div");
            element.dataset.status = TILE_STATUS.HIDDEN;
            let tile ={
                element,
                x,
                y,
                mine: minePositions.some(positionMatchs.bind(null,{x,y})),
                get status(){
                    return this.element.dataset.status;
                },
                set status(value){
                    this.element.dataset.status = value;
                }
            };           
            row.push(tile);
            tile.element.addEventListener("click", () => {
                handleclick(tile,board);
            })

            tile.element.addEventListener("contextmenu", e => {
                e.preventDefault();
                markTile(tile);
            });
        }       
        board.push(row);
    }console.log(board);
    return board;
}

function getminePositions(BOARD_SIZE,numberOfMines){
        const position =[];
        while(position.length < numberOfMines){
            const x = randomposition(BOARD_SIZE);
            const y = randomposition(BOARD_SIZE);
            const newPositon = {x,y};
            if(!position.some(p => positionMatchs(p, newPositon))) {
                position.push(newPositon);
        }
    }
    return position;
}
function randomposition(BOARD_SIZE){
    return Math.floor(Math.random()*BOARD_SIZE);
}
function positionMatchs(a, b){
    return a.x === b.x && a.y === b.y;
}

function handleclick(tile,board){
    if (tile.status !== TILE_STATUS.HIDDEN){
        return;
    }if(tile.mine){
        gameOver(board);
        tile.status = TILE_STATUS.MINE;
        return;
    }
    else{
        tile.status = TILE_STATUS.NUMBER;
          const number = tileNumber(tile, board);
    if(number >0){
        tile.element.textContent = number;
        tile.element.dataset.number = number;
    }else{
        const {x,y} = tile;
        for(let xOffset = -1 ; xOffset <= 1 ; xOffset++){
            for(let yOffset = -1 ; yOffset <= 1 ; yOffset++){
                if(xOffset === 0 && yOffset === 0) continue;
                const neighborX = x + xOffset;
                const neighborY = y + yOffset;
                if(neighborX >= 0 && neighborX < BOARD_SIZE && neighborY >= 0 && neighborY < BOARD_SIZE){
                    const neighborTile = board[neighborX][neighborY];
                    handleclick(neighborTile, board);
                }
            }
        }
    }
    }
  
}

function tileNumber(tile, board){
    let count = 0;
    const {x,y} = tile;

    for(let xOffset = -1 ; xOffset <= 1 ; xOffset++){
        for(let yOffset = -1 ; yOffset <= 1 ; yOffset++){
            if(xOffset === 0 && yOffset === 0) continue;
            const neighborX = x + xOffset;
            const neighborY = y + yOffset;
            if(neighborX >= 0 && neighborX < BOARD_SIZE && neighborY >= 0 && neighborY < BOARD_SIZE){
                const neighborTile = board[neighborX][neighborY];
                if(neighborTile.mine){
                    count++
                }
        }
    }
        
    }
    return count;
}

function markTile(tile){
    if(tile.status === TILE_STATUS.MINE || tile.status === TILE_STATUS.NUMBER){
        return;
    }
    if(tile.status === TILE_STATUS.MARKED){
        tile.status = TILE_STATUS.HIDDEN;
    }else{
        tile.status = TILE_STATUS.MARKED;
    }

    
}

function gameOver(board) {
     isgameOver = true;
        board.forEach(row => {
            row.forEach(tile => {
                if (tile.mine) {
                    tile.status = TILE_STATUS.MINE;
                }
            });
        });
}