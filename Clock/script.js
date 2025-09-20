const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function updateClock() {
  let currTime = new Date();
  let getSec = currTime.getSeconds();
  let getMin = currTime.getMinutes();
  let getHour = currTime.getHours();

  second.style.transform = `rotate(${(getSec / 60) * 360}deg)`;
  minute.style.transform = `rotate(${(getMin / 60) * 360}deg)`;
  hour.style.transform = `rotate(${(getHour / 12) * 360}deg)`;
  console.log(getHour, getMin, getSec);
}

setInterval(updateClock, 1000);
