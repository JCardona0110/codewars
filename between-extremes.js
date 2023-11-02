// Given an array of numbers, return the difference between the largest and smallest values.

// The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.

function betweenExtremes(numbers) {
  // sort array
  // get diff of min and max
  numbers.sort((a, b) => b - a)
  return numbers[0] - numbers[numbers.length - 1]
}

// using min max
function betweenExtremes(numbers) {
  return Math.max(...numbers) - Math.min(...numbers);
}

betweenExtremes([23, 3, 19, 21, 16])

// array of nums 
// return diff between min and max
//  should return 20 (i.e., 23 - 3).

// [1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).