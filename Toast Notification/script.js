let btn = document.querySelector("button");
let toast = document.querySelector(".toast");

btn.addEventListener("click", () => createToast());

function createToast() {
  let notify = document.createElement("div");
  notify.classList.add("notify");
  notify.innerText = "Notification";
  toast.append(notify);
  setTimeout(() => {
    notify.remove();
  }, 3000);
}
