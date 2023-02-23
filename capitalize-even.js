// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s) {
	let odds = [...s].map((letter, index) => index % 2 !== 0 ? letter.toUpperCase() : letter).join('')
let evens = [...s].map((letter, index) => index % 2 === 0 ? letter.toUpperCase() : letter).join('')
	return [evens, odds]
}

// way to run one map loop function twice
function capitalize(s){
  return [0, 1].map(r => [...s].map((letter, i) => i % 2 === r ? letter.toUpperCase() : letter).join(''));
  
};
capitalize("abcdef");
// lowercase string with no spaces
// return
// ("abcdef") --> ['AbCdEf', 'aBcDeF']