import { createBoard } from "./script.js";

const BOARD_SIZE = 10;
const numberOfMines = 10;

const boardElement = document.querySelector('.board');
boardElement.style.setProperty('--size', BOARD_SIZE);

const board = createBoard(BOARD_SIZE, numberOfMines);

board.forEach(row => {
    row.forEach(tile => {
        boardElement.appendChild(tile.element);
    });
});
