const greet = () => {
    console.log("Hello World");
};

greet();


//largest number
const max = (a, b) => a > b ? a : b;

console.log(max(20, 35));

//multiply three numbers
const multiply = (a, b, c) => a * b * c;

console.log(multiply(2, 3, 4));

//length of string
const length = str => str.length;

console.log(length("Automation"));

//find even numbers
const evenNumbers = arr => arr.filter(num => num % 2 === 0);

console.log(evenNumbers([1,2,3,4,5,6,7,8]));

//find a user
const users = [
    {name:"Ayushi", age:24},
    {name:"Riya", age:22},
    {name:"Rahul", age:30}
];

const user = users.find(u => u.name === "Ayushi");

console.log(user);


//sort numbers
const sortNumbers = arr => arr.sort((a, b) => a - b);

console.log(sortNumbers([8,3,9,1,5]));