let container = document.querySelector(".image-container");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let x = 0;
let timer;

prev.addEventListener("click", () => {
  x += 45;
  updateGallery();
  clearInterval(timer);
  timer = setInterval(() => {
    x = x - 45;
    updateGallery();
  }, 3000);
});

next.addEventListener("click", () => {
  x -= 45;
  updateGallery();
  clearInterval(timer);
  timer = setInterval(() => {
    x = x - 45;
    updateGallery();
  }, 3000);
});

function updateGallery(flag) {
  container.style.transform = `perspective(1000px) rotateY(${x}deg)`;
}

timer = setInterval(() => {
  x = x - 45;
  updateGallery();
}, 3000);

// using setTimeout best approach

// prevEl.addEventListener("click", () => {
//   x = x + 45;
//   clearTimeout(timer);
//   updateGallery();
// });
// nextEl.addEventListener("click", () => {
//   x = x - 45;
//   clearTimeout(timer);
//   updateGallery();
// });

// function updateGallery() {
//   container.style.transform = `perspective(1000px) rotateY(${x}deg)`;
//   timer = setTimeout(() => {
//     x = x - 45;
//     updateGallery();
//   }, 3000);
// }

// updateGallery();
