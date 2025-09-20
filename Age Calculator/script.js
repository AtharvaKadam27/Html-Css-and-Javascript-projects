let date = document.querySelector("input");
let btn = document.querySelector("button");
let text = document.querySelector("h4");

function calculteAge(age) {
  let currentYear = new Date().getFullYear();
  let birthDate = new Date(age).getFullYear();
  let currentAge = currentYear - birthDate;
  text.innerHTML = `Your Age is ${currentAge} Years`;
}

btn.addEventListener("click", () => {
  if (!date.value) return alert("Please enter your Birthday");
  calculteAge(date.value);
});
