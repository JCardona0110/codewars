// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

const sumDigits = (num) =>
	Math.abs(num)
		.toString()
		.split("")
		.reduce((acc, c) => acc + +c, 0);

//p- ints
//r-return
//e- (12)--> 3
//   (-456)--> 15
