let container = document.querySelector(".container");
console.log(container);

let career = ["Youtuber", "Web Developer", "Freelancer"];

let carrerCurr = 0;
let charcurr = 0;

function updateText() {
  charcurr++;
  container.innerHTML = `
    <h1>I am a ${career[carrerCurr].slice(0, charcurr)}</h1>
    `;

  if (charcurr === career[carrerCurr].length) {
    carrerCurr++;
    charcurr = 0;
  }
  if (carrerCurr === career.length) {
    carrerCurr = 0;
  }
}

setInterval(updateText, 600);
