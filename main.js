let todos;
let dummy = [
  {id: 0, name: "Belajar JS", checked: true},
  {id: 1, name: "Bikin todo list pake native js", checked: true},
  {id: 2, name: "Bikin todo list pake native js", checked: false},
];

let todoItem = document.getElementById("todoItem");
let exampleTodo = document.getElementById("exampleTodo");

const updateData = (todos) => {
  todos.forEach(t => {
    let item = exampleTodo.cloneNode(true);
    item.id = `t${t.id}`;
    item.getElementsByTagName("p")[0].innerText = t.name;
    item.getElementsByTagName("input")[0].id = `ck${t.id}`;
    item.getElementsByTagName("input")[0].value = `yes`;
    item.getElementsByTagName("input")[0].checked = t.checked;
    item.getElementsByTagName("button")[0].onclick = deleteItem(t.id);
    item.style.display = "grid"

    if (t.checked) {
      item.classList.add("checked")
    } else {
      item.classList.remove("checked")
    }
    todoItem.appendChild(item);
  })
}

const addEventClick = () => {
  let items = document.getElementsByClassName("todo-item")
  for (let i = 1; i < items.length; i++) {
    items[i].addEventListener('click', ()=>{
      if (todos[i-1].checked){
        todos[i-1].checked = false;
        document.getElementById(`ck${i-1}`).checked = false;
        document.getElementById(`ck${i-1}`).classList.remove("checked");
      } else {
        todos[i-1].checked = true;
        document.getElementById(`ck${i-1}`).classList.add("checked");
        document.getElementById(`ck${i-1}`).checked = true;
      }
    });
  }
}

window.onload = () => {
  if (!localStorage.todos) {
    localStorage.todos =  [];
  }

  // todos = localStorage.todos;
  todos = dummy;

  updateData(todos);
  // addEventClick();
}

document.getElementById("addTodo")
.onsubmit = () => {
  let data = document.getElementById("valueTodo").value;
  todos.push({id: todos[todos.length].id+1, name:data, checked:false});
  updateData(todos)
}


const deleteItem = (id) => {
  console.log(id);
}