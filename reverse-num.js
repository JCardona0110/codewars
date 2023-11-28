// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

function reverseNumber(n) {
  // store sign value
  // reverse number with split reverse join
  // combine sign with number if there is one
  let sign = n < 0 ? -1 : 1 // or use Math.sign(n)
  let x = Math.abs(n).toString().split('').reverse().join('')
  return sign * x
}

// anotha one 
reverseNumber = n => Math.sign(n) * Math.abs(n).toString().split('').reverse().join('')

reverseNumber(-654)
// number
// return reversed number
//  123 ->  321
// -456 -> -654
// 1000 ->    1