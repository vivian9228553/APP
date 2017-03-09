//push
let a = ['1','2'];
console.log(a);

a.push('3');
console.log(a);

//slice
let b = ['zero','one','two','three'];
let sliced = b.slice(1,3);

console.log(b);
console.log(sliced);

//forEach 
var colors = ['red','blue','green'];
colors.forEach(
    (colors) => console.log(color) 
);

//map01
var numbers = [1,2,3];
var doublenumbers;
doublenumbers = [];
doublenumbers = numbers.map(
    (numbers) => numbers * 2
);
console.log(doublenumbers);

//map02
var cars = [
    {model: 'Buick',price:'cheap'},
    {model: 'BMW' ,price:'expensive'}
];
var prices = cars.map((cars) => car.price);
console.log(prices);

//spread operator
function adder (base,...numbers){
    numbers.forEach(function (number) {
        console.log(base + number);
    });
}

adder(3,5,7,1);