// Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!

// In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

// 'X' --> busy
// 'O' --> empty
// If all rooms are busy, return "None available!"

// function meeting(x) {
// 	if (!x.includes("O")) return "None Available!";
// 	else {
// 		return x.indexOf("O");
// 	}
// }

function meeting(x) {
	return !x.includes('O') ? 'None available!' : x.indexOf('O');
}
meeting(["O", "X", "X", "X", "X"]);

// array of strings x and o
// return index of o or none avail if none
// (['O','X','X','X','X']), 0);
// (['X','X','X','X','X']), 'None available!'
