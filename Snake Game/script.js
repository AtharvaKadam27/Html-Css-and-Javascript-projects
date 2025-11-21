let board = document.querySelector(".board");
let modal = document.querySelector(".modal");
let start = document.querySelector(".start");
let over = document.querySelector(".over");
let startBtn = document.querySelector(".start-btn");
let restartBtn = document.querySelector(".restart-btn");

let innerWidth = board.clientWidth;
let innerHeight = board.clientHeight;

let rows = Math.floor(innerHeight / 80);
let cols = Math.floor(innerWidth / 80);

let girdBlock = {};
let snake = [
  { x: 1, y: 2 },
  { x: 2, y: 2 },
  { x: 3, y: 2 },
];
let direction = "down";
let intervalId = null;
let food = {
  x: Math.floor(Math.random() * rows),
  y: Math.floor(Math.random() * cols),
};
let score = 0;

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    let block = document.createElement("div");
    block.classList.add("block");
    block.innerHTML = `${i}-${j}`;
    girdBlock[`${i}-${j}`] = block;
    board.appendChild(block);
  }
}

function highScore() {}

function render() {
  let head = null;
  if (direction == "right") {
    head = { x: snake[0].x, y: snake[0].y + 1 };
  } else if (direction == "left") {
    head = { x: snake[0].x, y: snake[0].y - 1 };
  } else if (direction == "up") {
    head = { x: snake[0].x - 1, y: snake[0].y };
  } else if (direction == "down") {
    head = { x: snake[0].x + 1, y: snake[0].y };
  }

  girdBlock[`${food.x}-${food.y}`].classList.add("food");

  if (food.x == head.x && food.y == head.y) {
    document.querySelector(".score h1 span").innerHTML = ++score;
    snake = [...snake, { x: food.x, y: food.y }];
    girdBlock[`${food.x}-${food.y}`].classList.remove("food");
    food = {
      x: Math.floor(Math.random() * rows),
      y: Math.floor(Math.random() * cols),
    };

    girdBlock[`${food.x}-${food.y}`].classList.add("food");
  }

  if (head.x < 0 || head.y < 0 || head.x >= rows || head.y >= cols) {
    modal.style.display = "flex";
    start.style.display = "none";
    over.style.display = "flex";
    clearInterval(intervalId);
    return;
  }

  snake.forEach((saap) => {
    girdBlock[`${saap.x}-${saap.y}`].classList.remove("fill");
  });

  snake.unshift(head);
  snake.pop();

  snake.forEach((saap) => {
    girdBlock[`${saap.x}-${saap.y}`].classList.add("fill");
  });
}

addEventListener("keydown", (e) => {
  if (e.key == "ArrowUp") {
    if (direction != "down") {
      direction = "up";
    }
  } else if (e.key == "ArrowDown") {
    if (direction != "up") {
      direction = "down";
    }
  } else if (e.key == "ArrowLeft") {
    if (direction != "right") {
      direction = "left";
    }
  } else if (e.key == "ArrowRight") {
    if (direction != "left") {
      direction = "right";
    }
  }
});

startBtn.addEventListener("click", () => {
  modal.style.display = "none";
  intervalId = setInterval(() => {
    render();
  }, 500);
});

restartBtn.addEventListener("click", () => {
  modal.style.display = "none";
  snake.forEach((saap) => {
    girdBlock[`${saap.x}-${saap.y}`].classList.remove("fill");
  });
  direction = "down";

  girdBlock[`${food.x}-${food.y}`].classList.remove("food");
  food = {
    x: Math.floor(Math.random() * rows),
    y: Math.floor(Math.random() * cols),
  };

  girdBlock[`${food.x}-${food.y}`].classList.add("food");

  snake = [
    { x: 1, y: 2 },
    { x: 2, y: 2 },
    { x: 3, y: 2 },
  ];

  score = 0;
  document.querySelector(".score h1 span").innerHTML = "0";

  intervalId = setInterval(() => {
    render();
  }, 500);
});
// render();
