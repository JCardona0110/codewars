// Given an array of integers.
//
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
//
// If the input is an empty array or is null, return an empty array.

// couldnt get my code to work, reduce couldnt be used twice

function countPositivesSumNegatives(input) {
	if (!input || input.length == 0) return [];

	var positiveCount = input.reduce((sum, item) => (item > 0 ? ++sum : sum), 0);
	var negativeSum = input.reduce(
		(sum, item) => (item < 0 ? sum + item : sum),
		0
	);

	return [positiveCount, negativeSum];
}

// better
const countPositivesSumNegatives = (input) =>
	input == null || input.length == 0
		? []
		: [
				input.filter((i) => i > 0).length,
				input.filter((i) => i < 0).reduce((a, b) => a + b, 0),
		  ];

//   refactored

const countPositivesSumNegatives = (input) =>
	!(input && input.length)
		? []
		: [
				input.filter((i) => i > 0).length,
				input.filter((i) => i < 0).reduce((a, b) => a + b, 0),
		  ];
