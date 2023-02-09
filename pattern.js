// You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

// Note:Returning the pattern is not the same as Printing the pattern.
// Rules/Note:
// If n < 1 then it should return "" i.e. empty string.
// There are no whitespaces in the pattern.
// Hint: Use \n in string to jump to next line

function pattern(n) {
	let output = [];
	// for loop through repeating 1 to n by n times
	// seperate i by \n
	// return string
	for (let i = 1; i <= n; i++) {
		if (i === 1) {
			output.push(i);
		} else {
			output.push(i.toString().repeat(i));
		}
	}
	return output.join('\n');
}

pattern(5);
// number
// return string
// (pattern(5),"1\n22\n333\n4444\n55555");
