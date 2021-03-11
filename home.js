// console.log('hello');

// alert('hello this is Dan');

//Variables
// var b = 'smoothie';
// console.log(b);

// var someNumber = 45;
// console.log(someNumber);
// var age = prompt('What is your age?');
// document.getElementById('someText').innerHTML = age;

//Numbers
// var num1 = 10;
//increment
// num1++
// num1--;
// num1 = num1 + 1;
// console.log(num1);

//divide /, multiply *, remainder %
// console.log(num1 / 3);
// console.log(num1 % 2);

//Increment/decrement by any number you want
// num1 += 10; //10 being any number you want
// console.log(num1);

//Functions
/*
1. create function - function functionName() {}
2. call the function - functionName()
*/
//1. Create
// function fun() {
// 	console.log('this is a function');
// }
// //2. Call
// fun();

/* Let's create a function that takes in a name and says hello followed by your name 
For example 

Name: Dan
Return: Hello Dan
*/

// function greeting() {
// 	var name = prompt('What is your name?');
// 	var result = 'Hello' + ' ' + name; //string concatenation
// 	console.log(result);
// }
// greeting();

// function sumNumbers(num1, num2) {
// 	var result = num1 + num2;
// 	console.log(result);
// }
// sumNumbers(10, 10);
// sumNumbers('Hello ', 'Dan');

//While loops
// var num = 0;
// while (num < 100) {
// 	num += 1;
// 	console.log(num);
// }
//For loops
// for (let num = 0; num <= 100; num++) {
// 	console.log(num);
// }
/*
// Data types
let yourAge = 18; //number
let yourName = 'Dan'; //string
let name = { first: 'Dan', last: 'Smith' }; //object
let truth = false; //boolean
let groceries = ['apple', 'banana', 'oranges']; //array
let random; //undefined
let nothing = null; //value null

//Strings in JS (common methods)
let fruit = 'banana,apple,strawberry';
let moreFruits = 'banana\napple'; // n\ - new line

console.log(fruit);
console.log(moreFruits);
console.log(fruit.length);
console.log(fruit.indexOf('an')); //index works like an array in that the first letter of a string is index 0
console.log(fruit.slice(2, 4)); //between and including 2 ending without including 4
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(','));
*/
/*
let fruits = ['apple', 'banana', 'orange', 'pineapple'];
fruits = new Array('apples', 'bananas', 'oranges', 'pineapples');
console.log(fruits[3]);
fruits[0] = 'pears';

console.log(fruits);
for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}
let vegetables = ['asparagus', 'tomato', 'broccoli'];
let allGroceries = fruits.concat(vegetables); //combine arrays
//common array methods
console.log(fruits.toString());

array.join
array.pop() - removes last item in Array
array.push('item') appends item to Array
array[4] displays 5th item in array and index 4
array[array.length] = 'new item'' - same as push
array.shift() removes first item in Array
array.unshift('new item') adds new item to the beginning of an array
array.slice(num1, num2)removes items between num1 & num2
array.reverse() reverses items last to first
array.sort(); sorts items in ascending order

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 321, 2, 334];
console.log(
	someNumbers.sort(function (a, b) {
		return a - b;
	})
); //sorts in ascending order
console.log(
	someNumbers.sort(function (a, b) {
		return b - a;
	})
); //sorts in descending order

let emptyArray = new Array();
for (let num = 0; num <= 10; num++) {
	emptyArray.push(num);
}
console.log(emptyArray);

// Objects
let student = {
	first: 'Dan',
	last: 'Smith',
	age: 42,
	height: 173,
	studentInfo: function () {
		return this.first + '\n' + this.last + '\n' + this.age;
	},
};
// console.log(student.first);
// console.log(student.last);
// student.first = 'Daniel';
// console.log(student.first);
// student.age++;
console.log(student.studentInfo());
*/

// Conditionals, Control Flows (if else)
// 18-35 is my target demographic
// && AND
// || OR
// var age = prompt('What is your age?');
// if (age >= 18 && age <= 35) {
// 	status = 'target demo';
// 	console.log(status);
// } else {
// 	status = 'not my audience';
// 	console.log(status);
// }
//Switch statements
//differentiate between weekday vs. weekend
//0 is Sunday, 6 is Saturday, 1-5 are weekdays

// switch (5) {
// 	case 0:
// 		text = 'weekend';
// 		break;
// 	case 6:
// 		text = 'weekend';
// 		break;
// 	default:
// 		text = 'weekday';
// }
// console.log(text);
