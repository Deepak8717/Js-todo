const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("txtInput");
const todoSubmit = document.getElementById("todoSubmit");
const clear = document.querySelector(".clear");
const todoArry = [];

function clearTodoArry() {
  while (todoArry.length > 0) {
    todoArry.pop();
  }
  clearTodos();
}
function clearTodos() {
  while (todoList.firstChild) {
    todoList.removeChild(todoList.lastChild);
  }
}

function renderTodos() {
  clearTodos();
  todoArry.forEach((todo, idx, array) => {
    const li = document.createElement("li");
    li.innerHTML =
      "<div>" +
      todo.task +
      "</div><div><button class='delete'>Delete</button></div>";
    if (idx == array.length - 1) {
      li.classList.add("animated");
    }
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
clear.addEventListener("click", clearTodoArry);
