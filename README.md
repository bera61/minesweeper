Vanilla JS Minesweeper
A classic Minesweeper game built from scratch using only plain JavaScript, HTML, and CSS. This project is a deep dive into DOM manipulation, event handling, and recursive algorithms to recreate the iconic puzzle game.

(Please replace this placeholder URL with a screenshot of your game)

🚀 Features
Dynamic Board Generation: Creates a 10x10 grid with 10 randomly placed mines on every load.

Tile Revealing (Left-Click): Click on a hidden tile to reveal it.

If it's a mine, the game is over!

If it's a number, it shows how many mines are adjacent to it.

If it's empty (a '0'), it triggers a "flood fill."

Recursive Flood Fill: Clicking an empty tile automatically reveals all adjacent empty tiles and their numbered neighbors, just like the classic game.

Flagging System (Right-Click): Right-click on any hidden tile to place or remove a "🚩" flag. Flagged tiles cannot be opened with a left-click.

Game Over State: When a mine is clicked, the game ends, stops all further clicks, and reveals the locations of all other mines on the board.

🛠️ How to Run
Since this project is built with Vanilla JavaScript, there are no dependencies or build steps.

Clone this repository:

Bash

git clone https://github.com/your-username/your-repo-name.git
Navigate to the project directory:

Bash

cd your-repo-name
Open the index.html file in your favorite web browser.

That's it! The game will start immediately.

💻 Technologies Used
HTML5: Provides the basic structure of the game, including the .board container.

CSS3: Styles the entire game.

Uses a CSS Grid for the board layout.

Heavily utilizes data- attributes (e.g., data-status="hidden", data-mines="1") to style each tile based on its state.

Provides unique colors for different mine counts (1 is blue, 2 is green, etc.).

Vanilla JavaScript (ES6+):

DOM Manipulation: Creates all div elements for the tiles dynamically.

Event Handling: Uses addEventListener for both click (reveal) and contextmenu (flag) events.

Recursion: The handleclick function uses recursion to create the flood-fill effect when an empty tile is revealed.

Game Logic: Manages the game state (e.g., isGameOver), mine placement, and win/loss conditions.
