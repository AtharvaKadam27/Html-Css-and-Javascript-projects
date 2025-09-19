let timer = document.querySelector("p");
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");

let seconds = 0;
let min = 25;
let time;

function updateTime() {
  if (seconds === 0) {
    if (min === 0) {
      clearInterval(time);
      alert("Timer Complete");
      return;
    }
    min--;
    seconds = 60;
  } else {
    seconds--;
  }

  timer.innerHTML = `${min < 10 ? "0" + min : min}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
}

function stopTimer() {
  clearInterval(time);
}

start.addEventListener("click", () => {
  time = setInterval(updateTime, 200);
  start.disabled = true;
});
stop.addEventListener("click", () => {
  stopTimer();
});

reset.addEventListener("click", () => {
  stopTimer();
  timer.innerHTML = "25:00";
  min = 25;
  seconds = 0;
  start.disabled = false;
});
