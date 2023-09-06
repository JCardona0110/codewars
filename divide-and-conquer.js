// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

// my answer, filter was unnecessary and typeof was what i was looking for
const divCon = (arr) => {
	// add non string ints
	arr.filter((e) => {
		if (e === String) arr.reduce((acc, c) => acc + c, 0);
	});
	// subtract string ints
};

// p-array of nums in int and string form
// r-return
// e-[9, 3, '7', '3']) --> 2
// -['5', '0', 9, 3, 2, 1, '9', 6, 7]) --> 14

// best answer
const divCon2 = (arr) => {
	return arr.reduce(
		(acc, c) => (typeof c === 'number' ? acc + c : acc - ~~c),
		0
	);
};
