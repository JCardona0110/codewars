// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(arr) {
	let ascending = arr.sort((a, b) => a - b);
	let descending = arr.sort((a, b) => b - a);
	console.log(ascending)
	console.log(descending)
	if (arr === ascending) {
		return "yes, ascending";
	} else if (arr === descending) {
		return "yes, descending";
	} else return "no";
}
isSortedAndHow([15, 7, 3, -8])
// array of ints
// return yes desc, yes asc, or no
// (isSortedAndHow([15, 7, 3, -8]), 'yes, descending');
// (isSortedAndHow([1, 2]), 'yes, ascending')
// (isSortedAndHow([4, 2, 30]), 'no');
