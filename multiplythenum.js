// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers

function multiply(num) {
	return num * Math.pow(5, Math.abs(num).toString().length);
}
// multiply param by 5 to the power of number of digits

// p- int
// r- return
// e- multiply(3)==15 // 3 * 5¹
//  - multiply(10)==250 // 10 * 5²
//  - multiply(200)==25000 // 200 * 5³

const multiply = (num) => num * Math.pow(5, Math.abs(num).toString().length);
