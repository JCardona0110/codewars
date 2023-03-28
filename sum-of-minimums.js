// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// my attempt
const sumOfMinimums = (arr) => {
	arr.array.forEach((element) => {
		Math.min(element.reduce((acc, c) => acc + c, 0));
	});
};

// p- nested list of multiple arrays
// r-return
// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// 1 + 5 + 20 = 26

// best answer/ what i was going for
const sumOfMinimums2 = (arr) => arr.reduce((acc, c) => acc + Math.min(...c), 0);
