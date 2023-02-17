
const api_url = "https://jsonplaceholder.typicode.com/todos";
todoItems = [];
async function getData(url) {

  const response = await fetch(url);

  let data = await response.json();
  console.log(data);
 
  
  data.forEach(element => {
    
    todoItems.push(element.title);
    console.log(element.title);
    
  });
    updateDom();
}

getData(api_url);

function updateDom() {

  let dat = "";

  for (let i = 0; i < todoItems.length; i++) {
    
    dat = dat + `<li class="newtask"> <input type="checkbox" class="mycheckbox" onclick="sel(${i})"/>${todoItems[i]}
    <button class="delete" onclick="deleteTask(${i})">
    <i class="far fa-trash-alt"></i>
  
          </button>
    </li>`;
 }
console.log(dat);
 document.getElementById("tasks").innerHTML = dat;
}