

let todoItems = [];
function addTodo(text) {
  const todo = {
    text,
    checked: false,
  };


  todoItems.push(todo);
  console.log(todoItems);
}
