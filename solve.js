// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

function solve(string){
  let upper = 0
  let lower = 0
  string.split('').forEach(letter => {
    letter.toUpperCase() === letter ? upper++ : lower++
  })
    return lower >= upper ? string.toLowerCase() : string.toUpperCase()
}


// string of letters
// return
// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowercase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

// another way
function solve(string) {
	let upper = string
		.split("")
		.forEach((letter) => letter === letter.toUpperCase()).length;
	let lower = string.length - upper;
	return upper > lower ? string.toUpperCase() : string.toLowerCase();
}