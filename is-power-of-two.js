// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// You may assume the input is always valid.

// couldnt figure out
function isPowerOfTwo(n) {
	// if 2 to the power of a number === n return bool
	return Math.pow(2,10);
}

// right answer
function isPowerOfTwo(n){
    return Number.isInteger(Math.log2(n));
    
}
isPowerOfTwo(1024);
// numbers
// return bool
// isPowerOfTwo(1024) // -> true
// isPowerOfTwo(4096) // -> true
// isPowerOfTwo(333)  // -> false
