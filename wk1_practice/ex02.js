function greet(){
  console.log("hi");
}
greet();

function logGreeting(fn){
  fn();
}
logGreeting(greet);

//funciton expression
var greetMe = function(){
  console.log("Hi");
}
greetMe();

logGreeting(greetMe);