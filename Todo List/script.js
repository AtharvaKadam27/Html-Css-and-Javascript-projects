let input = document.querySelector(".main-input");
let add = document.querySelector(".add");
let todoContainer = document.querySelector(".todo-list-container");
let todoList = [];

add.addEventListener("click", () => {
  if (!input.value.trim()) return alert("Please add your task");
  createTodo(input.value);
});

function createElement(value) {
  let todo = document.createElement("div");
  todo.classList.add("todo");
  let check = document.createElement("input");
  check.type = "checkbox";
  todo.appendChild(check);
  let p = document.createElement("p");
  p.innerText = value;
  p.classList.add("text");
  todo.appendChild(p);
  let btn = document.createElement("button");
  btn.innerText = "X";
  btn.classList.add("remove");
  todo.appendChild(btn);
  todo.addEventListener("click", function (e) {
    if (e.target.tagName === "P" || e.target.tagName === "INPUT") {
      this.children[1].classList.toggle("complete");
      this.children[0].checked = !this.children[0].checked;
    }

    if (e.target.tagName === "BUTTON") {
      if (this.children[0].checked) {
        todoContainer.removeChild(this);
      }
    }
  });
  todoList = [...todoList, { text: input.value, checked: check.checked }];

  todoContainer.appendChild(todo);
}

function createTodo(value) {
  createElement(value);
  localStorage.setItem("todo", JSON.stringify(todoList));
  input.value = "";
  console.log(todoList);
}
