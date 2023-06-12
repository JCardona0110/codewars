// Write a function which calculates the average of the numbers in a given list.
//
// Note: Empty arrays should return 0.

const findAverage = (arr) =>
	!(arr && arr.length) ? 0 : arr.reduce((acc, c) => acc + c, 0) / arr.length;

// another cool one, doesnt need null catch.. just || 0....

const find_average = (array) =>
	array.reduce((acc, curr) => acc + curr, 0) / array.length || 0;
