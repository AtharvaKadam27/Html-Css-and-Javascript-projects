let left = document.querySelector(".left");
let right = document.querySelector(".right");
let list = document.getElementsByClassName("list");

for (item of list) {
  item.addEventListener("dragstart", function (e) {
    let selected = e.target;
    right.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    right.addEventListener("drop", function (e) {
      right.appendChild(selected);
      selected = null;
    });
    left.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    left.addEventListener("drop", function (e) {
      left.appendChild(selected);
      selected = null;
    });
  });
}
