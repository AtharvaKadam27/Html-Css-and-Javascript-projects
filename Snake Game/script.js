let board = document.querySelector(".board");

let innerWidth = board.clientWidth;
let innerHeight = board.clientHeight;

let rows = Math.floor(innerHeight / 80);
let cols = Math.floor(innerWidth / 80);

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    let block = document.createElement("div");
    block.classList.add("block");
    block.innerHTML = `${i}-${j}`;
    board.appendChild(block);
  }
}
