// Should be easy, begin by looking at the code. Debug the code and the functions should work.
//
// There are three functions: Multiplication (x) Addition (+) and Reverse (!esreveR)
//
// function multi(arr) {
// return arr * arr;
//   }
//   function add(arr) {
// return arr + arr;
//   }
//   function reverse(str) {
// return str.reverse();
//   }
//
const multi = (arr) => arr.reduce((acc, c) => acc * c, 1);
const add = (arr) => arr.reduce((acc, c) => acc + c);
const reverse = (str) => str.split('').reverse().join('');
