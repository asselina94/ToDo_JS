
const todoItems = [];
function myFunction() {
  let x = document.getElementById("myText").value;
  todoItems.push(x);

  document.getElementById("tasks").innerHTML = todoItems.join(",");
  
  console.log(todoItems);
  
}

