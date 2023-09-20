// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// this gives all unique elements so doesnt work
const stray = (nums) => new Set(nums)

// p-array of nums
// r-return single num
// e-[1, 1, 2] ==> 2
//   [17, 17, 3, 17, 17, 17, 17] ==> 3

// best answer
const stray1 = numbers => numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num));
