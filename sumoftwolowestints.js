Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// my wrong attempt
function sumTwoSmallestNumbers(nums) {  
  let smallestNums = nums.indexOf(nums.charAt(0)) + nums.indexOf(nums.charAt(1))
  nums.sort((a,b) => a-b)
  return smallestNums
}
// p-array of 4+ ints, no floats or non positive 
// r-return sum of 2 lowest nums
// e- [19, 5, 42, 2, 77] --> 7

// best answer
function sumTwoSmallestNumbers(nums) {  
  nums.sort((a,b) => a - b);
  return nums[0] + nums[1];
};