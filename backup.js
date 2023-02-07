
const todoItems = [];

function deleteTask(el){

  let item = todoItems.splice(el, el);
  updateDom();

  console.log(todoItems);
 }

const arr = [];
function sel(el) {
  let x = todoItems[el];
  let y = false;
  //arr.push({ value: todoItems[el], checked: false });
  //const arr = todoItems.map((todoItems[el],el) => {
   // return { value:todoItems[el], checked: false};
 // });
  arr = todoItems.map((x,y) => ({value: x, checked: y}))
  ({value: x, checked: y});

  //index = arr.findIndex((obj => obj.value == 1));
  //arr = arr.map(el=> ({'checked':true}));
  //arr[0].checked = true;
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

//let sortedItems = todoItems.sort();
console.log(todoItems);
}

