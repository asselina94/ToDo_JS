
const todoItems = [];

function myFunction() {
  let list = $("#myList"); 
  let x = document.getElementById("myList").innerHTML = document.querySelector("#newtask input").value;
  todoItems.push(x);
  
  document.getElementById("myList").innerHTML = todoItems.join("<br>")
  
  let item = document.createElement("li");
  for (const i = 0; i < todoItems.length; i++){
  let listitem = $(document.createTextNode(todoItems[i]));
  list.append(document.createTextNode(todoItems[i]));
  }
  
}


