
const todoItems = [];

function deleteTask(el){

  let item = todoItems.splice(el, el);
  updateDom();

  console.log(todoItems);
 }
let clicked = false;
function sel(el) {

  let checked = true;
  //alert("The button was pressed");

  updateDom();

  console.log(todoItems);
}

 function updateDom() {

  let data = "";
  let sortedItems = todoItems.sort();
  for (let i = 0; i < sortedItems.length; i++) {
    
    data = data + `<li class="newtask"><input type="checkbox" onclick="sel(${i})" />${sortedItems[i]}
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

//let sortedItems = todoItems.sort();
console.log(todoItems);
}


