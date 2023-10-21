// Given a sequence of numbers, find the largest pair sum in the sequence.

function largestPairSum(numbers) {
	let sorted = numbers.sort((a, b) => b - a);
	// sort nums
	// add up last to nums
	return numbers[0] + numbers[1]
}

largestPairSum([10, 14, 2, 23, 19]);
// array of nums
// return
// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

// destructured
function largestPairSum(numbers) {
  let [num1, num2] = numbers.sort((a, b) => b - a)
  return num1 + num2
}