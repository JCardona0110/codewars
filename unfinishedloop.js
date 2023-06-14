// Unfinished Loop - Bug Fixing #1
// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!
// function createArray(number){
// var newArray = [];
//
// for(var counter = 1; counter <= number;){
//   newArray.push(counter);
// }
//
// return newArray;
//   }

function createArray(number) {
	let newArray = [];

	for (let c = 1; c <= number; c++) {
		newArray.push(c);
	}

	return newArray;
}

// better but i dont understand fully
const createArray = (n) => Array(...Array(n)).map((v, i) => i + 1);
