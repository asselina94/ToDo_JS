
const todoItems = [];
function addTodo(){
  let x = document.getElementById("myText").value;
  todoItems.push(x);
}

function PrintTodo(){
  let list = document.getElementById("tasks");
  list.innerHTML = '';
  var li = document.createElement('li');
  for (const i = 0; i < todoItems.length; i++){
    var listItem = $(document.createTextNode(todoItems[i]));
    list.append(document.createTextNode(todoItems[i]));

  }
}

