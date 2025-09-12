let month = document.querySelector(".month");
let day = document.querySelector(".day");
let date = document.querySelector(".date");
let year = document.querySelector(".year");

let currentDate = new Date();

let mon = currentDate.getMonth();

month.innerText = currentDate.toLocaleString("en", {
  month: "long",
});

let da = currentDate.getMonth();

day.innerText = currentDate.toLocaleString("en", {
  weekday: "long",
});

date.innerText = currentDate.getDate();
month.innerText = currentDate.getFullYear();
