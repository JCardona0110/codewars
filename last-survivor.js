// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.

// my wrong attempt
function lastSurvivor(letters, coords) {
	// remove corresponding index of string in order of array values
	for (let i = 0; i < coords.length; i++)
		[...letters].splice(coords[0], coords[0] + 1).join('');
}

// p- string and array of ints
//r-return
// e-let str = "zbk", arr = [0, 1]
// str = "bk", arr = [1]
// str = "b", arr = []
// return 'b'

// best answer
function lastSurvivor(letters, coords) {
	letters = [...letters];
	for (let i = 0; i < coords.length; i++) {
		letters.splice(coords[i], 1);
	}
	return letters.join('');
}
