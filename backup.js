
const todoItems = [];

function deleteTask(item){

  let element = document.getElementById(item);
  element.remove();
 }

function myFunction() {
  
  let x = document.getElementById("tasks").innerHTML = document.querySelector("#newtask input").value;
  todoItems.push(x);
  
  

  let data = "";

  for (let i = 0; i < todoItems.length; i++) {
    
    data = data + `<li class="newtask">${todoItems[i]} 
    <button class="delete" onclick="deleteTask(i)">
    <i class="far fa-trash-alt"></i>
    
          </button></li>
    `;
  }
  console.log(data);
  document.getElementById("tasks").innerHTML = data;

  

 /* let close = document.getElementsByClassName("delete");
  for (let i; i < close.length; i++){
    close[i].onclick = function() {
      
    }*/

console.log(todoItems);
}


