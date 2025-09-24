let input = document.querySelector(".main-input");
let add = document.querySelector(".add");
let todoContainer = document.querySelector(".todo-list-container");

add.addEventListener("click", () => {
  if (!input.value.trim()) return alert("Please add your task");
  createTodo(input.value);
});

function createElement(value) {
  let todo = document.createElement("div");
  todo.classList.add("todo");
  let check = document.createElement("input");
  check.type = "checkbox";
  check.checked = value.completed;
  todo.appendChild(check);
  let p = document.createElement("p");
  p.innerText = value.text;
  p.classList.add("text");
  todo.appendChild(p);
  let btn = document.createElement("button");
  btn.innerText = "X";
  btn.classList.add("remove");
  todo.appendChild(btn);
  todo.addEventListener("click", function (e) {
    console.log("remove");

    if (e.target.tagName === "P" || e.target.tagName === "INPUT") {
      this.children[1].classList.toggle("complete");
      this.children[0].checked = !this.children[0].checked;

      saveTodo();
    }

    if (e.target.tagName === "BUTTON") {
      todoContainer.removeChild(this);
      saveTodo();
    }
  });

  todoContainer.appendChild(todo);
  saveTodo();
}

function createTodo(value) {
  let createTodo = { text: value, completed: false };
  createElement(createTodo);
  input.value = "";
}

function saveTodo() {
  let todos = [];
  document.querySelectorAll(".todo").forEach((todo) => {
    todos.push({
      text: todo.querySelector("p").innerText,
      completed: todo.querySelector("input").checked,
    });
  });
  localStorage.setItem("todo", JSON.stringify(todos));
}

function getTodo() {
  let localTodo = JSON.parse(localStorage.getItem("todo")) || [];
  console.log(localTodo);

  localTodo.forEach((todo) => {
    createElement(todo);
  });
}

getTodo();
