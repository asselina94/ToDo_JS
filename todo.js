
const todoItems = [];
function myFunction() {
  let x = document.getElementById("taskname").innerHTML += document.querySelector("#newtask input").value;
  todoItems.push(x);

  document.getElementById("taskname").innerHTML = todoItems.join("<br>")
  
  console.log(todoItems);
  
}


