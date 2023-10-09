// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

"use strict";

function flattenAndSort(array) {
  return array.flat().sort((a,b)=>a-b)
  // flatten array
  // sort
}

// array of array of nums 0+
// return
// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]])
