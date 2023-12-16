// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

function evenNumbers(array, number) {
	//filter even numbers and return last 3
	let evens = array.filter((el) => el % 2 === 0);
	return evens.slice(evens.length - number, evens.length + 1);
}


// better way
const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number);

evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
// array of nums and number
// return array of even nums
// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
