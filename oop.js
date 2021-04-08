/*
OBJECT(car) (container - methods & attributes)
METHODS - f(x) - functions
unlockCar()
lockCar()
startEngine()
shutOffEngine ()
drive()
park()
reverse()
ATTRIBUTES - x - variables
make
year
color
engine
interiorColor

CLASS template - contains functions and variables that are common among all cars
Then, an object can take values and methods from the CLASS for example audiCar{}

CLASS inheritance - Class Pickup extends Car --> Object Ford(Pickup)
*/
// let user = {
// 	firstName: 'Dan', //key: value pair
// 	lastName: 'Smith',
// 	setPassword: (user, password) => {
// 		user.password = password;
// 	},
// 	'user Hobbies': ['comics', 'cycling'],
// 	getFullName: (user) => {
// 		return `${user.firstName} ${user.lastName}`;
// 	},
// };
// console.log(user);
// console.log(user.getFullName(user));
// console.log(user.firstName);
// console.log(user['lastName']);
// console.log(user['user Hobbies']);
// if ('firstName' in user) {
// 	console.log('First name exists');
// } else {
// 	console.log('randomAttr does not exist');
// }
// for (let prop in user) {
// 	console.log(user[prop]);
// }
class User {
	constructor(firstName, lastName, userHobbies) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.userHobbies = userHobbies;
	}
	getFullName = () => {
		return `${this.firstName} ${this.lastName}`;
	};
}
class AdminUser extends User {
	setPassword = (password) => {
		this.password = password;
	};
}

let John = new User('John', 'Davis', ['soccer', 'volleyball']);
console.log(John);
console.log(John.getFullName());
let Dan = new AdminUser('Dan', 'Smith', ['comics', 'cycling']);
console.log(Dan);
console.log(Dan.getFullName());
