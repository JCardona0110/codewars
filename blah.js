


function solve(string) {
	let upper = string
		.split("")
		.filter((letter) => letter === letter.toUpperCase()).length;
	let lower = string.length - upper;
	return upper > lower ? string.toUpperCase() : string.toLowerCase();
}