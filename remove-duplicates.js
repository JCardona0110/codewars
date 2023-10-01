// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// Words will be separated by a single space.There will be no leading or trailing spaces in the string.An empty string(0 words) is a valid input.

function removeConsecutiveDuplicates(string) {
	return string.split(" ")
		.filter((word, index, arr) => word !== arr[index + 1])
		.join(" ");
	// to array
	// delete consecutive duplicates
}
// string of words seperated by a comma
// return
// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"--> "alpha beta gamma delta alpha beta gamma delta"
