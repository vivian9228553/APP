var greetMe = function(){
  console.log("hi!");
}
greetMe();

//use arrow
greetSam = () => console.log("hi Sam!");
greetSam();

//use arrow and parameters
greetYou = (name) => console.log("HI! "+name+"!");
greetYou("NTUE");

//square
var square1 = function(num){return num*num};
var square2 = num => {return num*num};
var square3 = num => num*num;
console.log(square1(2));
console.log(square2(2));
console.log(square3(2));