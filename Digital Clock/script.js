const hourEl = document.querySelector(".hours");
const minuteEl = document.querySelector(".minutes");
const secondEl = document.querySelector(".seconds");
const ampmEl = document.querySelector(".ampm");

function updateCLock() {
  h = new Date().getHours();
  m = new Date().getMinutes();
  s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  hourEl.innerText = h < 10 ? "0" + h : h;
  minuteEl.innerText = m < 10 ? "0" + m : m;
  secondEl.innerText = s < 10 ? "0" + s : s;
  ampmEl.innerText = ampm;
  setTimeout(updateCLock, 1000);
}

updateCLock();
