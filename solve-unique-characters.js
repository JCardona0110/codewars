// In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

function solve(a, b) {
	return [...a, ...b]
		.filter((letter) => !a.includes(letter) || !b.includes(letter))
		.join("");
}
// 2 strings of lowercase letters
// return
// solve("xyab", "xzca");
// --The first string has 'yb' which is not in the second string.
// --The second string has 'zc' which is not in the first string.

