// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// let capitals = (word) => {
// let result = [];
// word.forEach((e) =>
// 	e === e.toUpperCase() ? (result = e.push()) : (result = [])
// );
// };

// p-string of letters
// r-return array
// e-"CodEWaRs" --> [0,3,4,6]

// what i was going for

let capitals = function (word) {
	let result = [];
	for (let i = 0; i < word.length; i++) {
		if (word[i].toUpperCase() == word[i]) result.push(i);
	}
	return result;
};
