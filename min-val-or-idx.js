// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.



function min(arr, toReturn) {
  // get smallest value and its idx
  // if statement for return condition
  let smallest = Math.min(...arr)
  let idx = arr.indexOf(smallest)
  if (toReturn === 'value') {
    return smallest
  } else {
    return idx
  }
}

min([3,4,5], 'index')
// array of nums and string value or index
// return 
// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0