let todos = [];
let dummy = [
  { name: "Belajar JS", checked: true },
  { name: "Bikin todo list pake native js", checked: true },
  { name: "Bikin todo list pake native js", checked: false },
];
let listTodos = document.getElementById("list-todo");

const input = document.getElementById("addTodo");

function showTodos() {
  if (todos.length>0){
    todos.forEach((todo) => {
      let elm = document.createElement("li");
      let btnDelete = document.createElement("button");
  
      elm.textContent = todo.name;
      elm.style.fontSize='12pt'
      elm.addEventListener("click", (ev) => {
        if (ev.target.tagName === 'LI') {
          if (ev.target.classList.contains("checked")) {
            ev.target.classList.toggle("checked");
          } else {
            ev.target.classList.add("checked");
          }
        }
      });
      
      btnDelete.textContent = "X";
      btnDelete.classList.add("delete");
      btnDelete.addEventListener('click', ev => {
        let i = todos.indexOf(todo);
        todos.splice(i, 1);
        window.localStorage.setItem('todos', JSON.stringify(todos))
        elm.style.display = "none";
      });
  
      elm.appendChild(btnDelete);
  
      if (todo.checked) {
        elm.classList.add("checked");
      }
  
      listTodos.appendChild(elm);
    });
  }
}

function addTodo(){
  todos.push({
    name: input.value,
    checked: false,
  })
  window.localStorage.setItem('todos', JSON.stringify(todos));
  listTodos.innerHTML = "";
  showTodos();
}

window.onload = () => {
  if (!window.localStorage.todos) {
    window.localStorage.setItem("todos", JSON.stringify([]));
  }
  todos = JSON.parse(window.localStorage.todos);

  showTodos();
  input.focus();
  input.addEventListener('keypress', ev => {
    if (ev.key == 'enter') {
      addTodo();
    }
  })
};
