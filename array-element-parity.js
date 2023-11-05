// In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive.Your task will be to find that integer.

function solve(arr) {
  // new set
  // reduce 
  // return unique number
  return [...new Set(arr)].reduce((a, c) => a + c);
};
(solve([1, -1, 2, -2, -3, -3, -3]), -3)

//array of numbers pos and neg
// return 
// (solve([1,-1,2,-2,3]),3);