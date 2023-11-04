// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.

// Note that the number will always be non-negative (>= 0).

function insertDash(num) {
	// create variable for array of nums
	// check for odd number
	// check for subsequent odd number
	// add dashes
	// return number
	let arr = num.toString().split("");
	let dashedNums = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i + 1] == undefined) {
			dashedNums.push(arr[i]);
		} else if (arr[i] % 2 != 0 && arr[i + 1] % 2 != 0) {
			dashedNums.push(arr[i] + "-");
		} else dashedNums.push(arr[i]);
	}
	return dashedNums.join("");
}
// different way 
function insertDash(num) {
   return num.toString().split('').reduce((acc, c, i, arr) => {
     if (i > 0 && Number(arr[i]) % 2 !== 0 && Number(arr[i - 1]) % 2 !== 0)
       acc = acc + '-';
     
     return acc + c;
   }, '');
}

insertDash(454793);

// number
// return
// (insertDash(454793),'4547-9-3')
