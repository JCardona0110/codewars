// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted

// function maxDiff(list) {
//   if(!list.length) return 0;
//   return Math.max(...list) - Math.min(...list);
// };

// // array of ints, can be empty
// // return
// // [1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
// // [1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7
// maxDiff([1, 2, 3, 4] )

const camelize = (str) =>
	str
		.split("-")
		.map((word, index) =>
			index == 0 ? word : word[0].toUpperCase() + word.slice(1)
		)
		.join("");

camelize("background-color");
