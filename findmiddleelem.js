// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).
// my attempt:
// function gimme (triplet) {
//   figure out which int is 2nd greatest
//   if (triplet[i] > triplet[i])
//   return index of that int
// }

// p-array of 3 ints
//return index of int that would be in middle
// e ([-2, -3.2, 1] --> 0), ([-5.2, -10.6, 14] --> 0), ([5, 10, 14] --> 1)

const gimme = (arr) => arr.indexOf([...arr].sort((a, b) => a - b)[1]);
// spread to create copy of arr, sort then grab middle index, index of to look for the index of the middle value in the original array
