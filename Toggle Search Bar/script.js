let magnifier = document.querySelector(".magnifier");
let container = document.querySelector(".container");

magnifier.addEventListener("click", () => {
  container.classList.toggle("active");
});
