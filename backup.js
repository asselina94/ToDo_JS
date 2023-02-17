
const todoItems = [];

const api_url = "https://jsonplaceholder.typicode.com/todos";

async function getData(url) {

  const response = await fetch(url);

  let data_obj = await response.json();
  console.log(data_obj);

  
  console.log(data);
}

getData(api_url);

function deleteTask(el){

  let item = todoItems.splice(el, el);
  updateDom();

  console.log(todoItems);
 }

/*const arr = [];
function sel(el) {
  arr.push({ value: todoItems[el], checked: false });
 
  for (let i = 0; i < arr.length; i++){
    
      arr[i].checked = true; 
  }

  let data = "";
  //let sortedItems = todoItems.sort();
  for (let i = 0; i < arr.length; i++) {
    
    data = data + `<li class="newtask"> <input type="checkbox" id ="mycheckbox" onclick="sel(${i})"/>${arr[i]}
    <button class="delete" onclick="deleteTask(${i})">
    <i class="far fa-trash-alt"></i>
  
          </button>
    </li>`;
  }

  console.log(data);
  //document.getElementById("tasks").innerHTML = data;
  //console.log(el);
  console.log(arr);
}
*/

 function updateDom() {

  let data = "";
  //let sortedItems = todoItems.sort();
  for (let i = 0; i < todoItems.length; i++) {
    
    data = data + `<li class="newtask"> <input type="checkbox" class="mycheckbox" onclick="sel(${i})"/>${todoItems[i]}
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

