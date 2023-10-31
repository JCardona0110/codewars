// In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

function solve(arr) {
  // map through array elements
  // get all unique numbers
  // reduce remaining arrays
  return arr.map(el => new Set(el).size).reduce((acc, c) => acc * +c, 1)
};

// or one liner

const solve = arr => arr.reduce((acc, c) => acc * new Set(c).size, 1)

solve([[1,2],[4,4],[5,6,6]]) 
// array of arrays of numbers
// return number
// solve([[1,2],[4,4],[5,6,6]]) = 4
