
const todoItems = [];

function deleteTask(el){

  let item = todoItems.splice(el, el);
  updateDom();

  console.log(todoItems);
 }

 function updateDom() {

  let data = "";
  for (let i = 0; i < todoItems.length; i++) {
    
    data = data + `<li class="newtask">${todoItems[i]}
    <button class="delete" onclick="deleteTask(${i})">
    <i class="far fa-trash-alt"></i>
    
          </button>
    </li>`;
 }

  console.log(data);
  document.getElementById("tasks").innerHTML = data;
 }

function myFunction() {
  
  let x = document.getElementById("tasks").innerHTML = document.querySelector("#newtask input").value;
  todoItems.push(x);
  
  updateDom();

console.log(todoItems);
}


