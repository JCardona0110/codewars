// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Return an array
// Return an array
const fizzbuzz = (n) => {
	//   create empty array
	let list = [];
	//   count up to n from 0
	for (let i = 1; i <= n; i++) {
		//   every 3 and 5 fizzbuzz
		if (i % 15 === 0) {
			list.push('FizzBuzz');
			//   every 3 fizz
		} else if (i % 3 === 0) {
			list.push('Fizz');
			//   every 5 buzz
		} else if (i % 5 === 0) {
			list.push('Buzz');
			//       every other num
		} else {
			list.push(i);
		}
		//     return array
	}
	return list;

	//   every 3 and 5 fizzbuzz
	//   every 3 fizz
	//   every 5 buzz
};
// p-array of positive nums
// r-return array of nums with fizz every 3, buzz every 5, fizzbuzz every 3 and 5
// e-(3) --> [1,2, 'fizz']
//  -(15) --> [1,2, 'fizz',4, 'buzz'6,7,8,'fizz',9, 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz']
