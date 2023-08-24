// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.
// my attempt
// const smallEnough = (a, limit) => {
// 	a.forEach((e) => {
// 		if (e <= limit) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	});
// };

// p-array of nums and a num
// r-return bool
// e- ([66, 101], 200) --> true,([78, 117, 115], 100), false

// best solution
const smallEnough = (a, limit) => a.every((x) => x <= limit);
// .every  tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
