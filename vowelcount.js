//
// Return the number (count) of vowels in the given string.
//
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
//
// The input string will only consist of lower case letters and/or spaces.

// top answer
function getCount(str) {
	return (str.match(/[aeiou]/gi) || []).length;
}

//   concise answer
const getCount = (str) => (str.match(/[aeiou]/gi) || []).length;
// (/[aeiou]/gi) is regex/regexp whic is used to find any character that matches inside the class ([]). gi are flag, i meaning case insensitive and g meaning global.
// ||[] is a null catcher. it signifies that if the result is null then the function will return an empty array which is considered 0. .length then returns a value of 0 if null and any other amount of vowels
