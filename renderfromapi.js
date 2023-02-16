
const api_url = "https://jsonplaceholder.typicode.com/todos";

async function getApi(url) {

  const response = await fetch(url);

  let data = await response.json();
  console.log(data);


}

getApi(api_url);