
const todoItems = [];

function myFunction() {
  
  let x = document.getElementById("tasks").innerHTML = document.querySelector("#newtask input").value;
  todoItems.push(x);
  
  

  let data = "";

  for (let i = 0; i < todoItems.length; i++) {
    
    data = data + `<li class="newtask">${todoItems[i]}</li>`;

  }
  console.log(data);
  document.getElementById("tasks").innerHTML = data;

  
  /*let item = document.createElement("li");
  for (const i = 0; i < todoItems.length; i++){
  let listitem = $(document.createTextNode(todoItems[i]));
  list.append(document.createTextNode(todoItems[i]));
  }*/
  
  console.log(todoItems);
}


