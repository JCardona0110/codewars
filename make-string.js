// In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

// Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.

const makeString = s => s.split(' ').map((word) => word[0]).join("");
	// split into array
	// map and grab first letter
	// return new string with all first letters

// string of words seperated by a space
// return
// "This Is A Test" ==> "TIAT"
