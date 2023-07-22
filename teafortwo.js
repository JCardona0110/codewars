// Given a string or number write a function tea42 that takes as input a string or number and returns a string where every '2' charcter or digit has been replaced with a t.

// p- string or num
// r-return string with t instead of any type of 2

// testcases-
// tea42(5676765) --> '5676765'
// tea42('2u2u') --> 'tutu'

//   convert param to string
//   switch 2s with ts
//   return new string

const tea42 = (input) => input.toString().replaceAll('2', 't');
