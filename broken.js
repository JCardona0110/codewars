// The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

// Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

// Given a string of binary, return the version the photocopier gives you as a string.

// doesnt work
// function broken(x) {
//   let y = []
//   x.split('').map((digit) => {
// 			if (digit === "1") {
//         digit.replace("1", "0");
//         y.push(digit)
// 			}
// 			if (digit === "0") {
//         digit.replace("0", "1");
//         y.push(digit)
// 			}
//   })
//   return y.join('')
// }

// works
function broken(x){
  return [...x].map(digit => digit == "0" ? "1" : "0").join('');
}
broken("100010");
// string of 1s and 0s
// return string
// ("100010") --> "011101"
