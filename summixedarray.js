// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// was so close, didnt include 0 to make sure the code didnt break
const sumMix = (arr) => arr.reduce((acc, c) => acc + +c, 0);
