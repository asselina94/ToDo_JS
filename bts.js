/*console.log(1);

setTimeout( function callbackTimeout() {
  console.log(2);
}, 0);

console.log(3);

async function fun1() {
  return 5;
}

const asyncFun = fun1();

console.log(asyncFun);

asyncFun.then((Value) => console.log(Value));*/

async function funError() {
  throw new Error('Something went wrong!');
}
console.log(1);
 
funError()
  .then(() => console.log(2))
  .catch((err) => console.log('Err occured' + err)); 
console.log(3);
