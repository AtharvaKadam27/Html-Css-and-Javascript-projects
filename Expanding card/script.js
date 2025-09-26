let panel = document.querySelectorAll(".panel");

panel.forEach((item) => {
  item.addEventListener("click", () => {
    removeActive();
    item.classList.add("active");
  });
});

function removeActive() {
  panel.forEach((item) => {
    item.classList.remove("active");
  });
}
