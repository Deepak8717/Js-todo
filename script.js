const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("txtInput");
const todoSubmit = document.getElementById("todoSubmit");
const clear = document.querySelector(".clear");
const todoArry = [];

function clearTodos() {
  while (todoList.firstChild) {
    todoList.removeChild(todoList.lastChild);
  }
}

function renderTodos() {
  clearTodos();
  todoArry.forEach((todo) => {
    const li = document.createElement("li");
    li.innerHTML =
      "<div>" +
      todo.task +
      "</div><div><button class='delete'>Delete</button></div>";
    todoList.appendChild(li);
  });
}

todoSubmit.addEventListener("click", () => {
  const d = new Date();
  const obj = { id: d.getTime(), task: todoInput.value };

  todoArry.push(obj);
  console.log(todoArry);
  renderTodos();
  todoInput.value = "";
});
clear.addEventListener("click", clearTodos);
