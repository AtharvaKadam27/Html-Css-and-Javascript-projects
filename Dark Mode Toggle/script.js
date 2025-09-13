let input = document.querySelector(".input");
let body = document.querySelector("body");

input.checked = JSON.parse(localStorage.getItem("mode"));

function updateMode() {
  if (input.checked) {
    body.style.backgroundColor = "black";
  } else {
    body.style.backgroundColor = "white";
  }
}

input.addEventListener("input", () => {
  updateMode();
  updateLocaleStoraege();
});

function updateLocaleStoraege() {
  localStorage.setItem("mode", JSON.stringify(input.checked));
}
