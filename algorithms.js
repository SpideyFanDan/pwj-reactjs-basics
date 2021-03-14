function addNumbers(num1, num2) {
	return num1 + num2;
}

// console.log(addNumbers(3, 4));

function minuteToSeconds(min) {
	return min * 60;
}
// console.log(minuteToSeconds(2.5));

function ageInSeconds(age) {
	return age * 365 * 24 * 60 * 60;
}
// console.log(ageInSeconds(42));
let fruits = ['banana', 'apple', 'strawberry', 'orange', 'kiwi'];
function getFirstItem(fruits) {
	return fruits[0];
}
// console.log(getFirstItem(fruits));
let movie_result;
function badGoodMovie(rating) {
	if (rating <= 6) {
		movie_result = 'Bad movie';
	} else {
		movie_result = 'Good Movie';
	}
	return movie_result;
}
// console.log(badGoodMovie(9));
// console.log(badGoodMovie(4));

function isEmptyString(some_string) {
	if (some_string == '') {
		return 'True';
	} else {
		return 'False';
	}
}
// console.log(isEmptyString(''));
// console.log(isEmptyString('The Godfather'));

function findMin(numbers) {
	let minimum = numbers[0];
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] < minimum) {
			minimum = numbers[i];
		}
	}
	return minimum;
}
// console.log(findMin([2, 3, 5, 9, 4, 16]));

function findMax(numbers) {
	let maximum = numbers[0];
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] > maximum) {
			maximum = numbers[i];
		}
	}
	return maximum;
}
// console.log(findMax([2, 3, 5, 9, 4, 16]));

function sortBestRatingsFirst(numbers) {
	for (let j = 0; j < numbers.length - 1; j++) {
		let max_num = numbers[j];
		let max_location = j;
		for (let i = j; i < numbers.length; i++) {
			if (numbers[i] > max_num) {
				max_num = numbers[i];
				max_location = i;
			}
		}
		numbers[max_location] = numbers[j];
		numbers[j] = max_num;
	}
	return numbers;
}
// console.log(sortBestRatingsFirst([5, 8, 2, 9, 3, 10]));

function findMaxHelper(numbers, start) {
	let maximum = numbers[start];
	let max_location = start;
	for (let i = start; i < numbers.length; i++) {
		if (numbers[i] > maximum) {
			maximum = numbers[i];
			max_location = i;
		}
	}
	return { max_number: maximum, max_index: max_location };
}
function sortBestWithHelper(numbers) {
	for (let j = 0; j < numbers.length - 1; j++) {
		max = findMaxHelper(numbers, j);
		max_num = max['max_number'];
		max_location = max['max_index'];

		numbers[max_location] = numbers[j];
		numbers[j] = max_num;
	}
	return numbers;
}
console.log(sortBestRatingsFirst([5, 8, 2, 9, 3, 10]));
