const btnEl = document.querySelector("button");
const closeIconEl = document.querySelector(".close-icon");
const trailerContainerEl = document.querySelector(".trailer");
const videoEl = document.querySelector("video");

btnEl.addEventListener("click", () => {
  trailerContainerEl.classList.remove("active");
});

closeIconEl.addEventListener("click", () => {
  videoEl.pause();
  videoEl.currentTime = 0;
  trailerContainerEl.classList.add("active");
});
