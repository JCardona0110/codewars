// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

// Only numbers without decimals like 4 or 4.0 can be even.

// The input is a sequence of numbers: integers and/or floats.

function sumEvenNumbers(input) {
  // reduce if typeof c is number
  return input.reduce((acc, c)=> typeof c === 'number' && c % 2 === 0 ? acc += c : acc, 0)
}

sumEvenNumbers([4, 3, 1, 2, 5, 10, 6, 7, 9, 8])
// array of nums and floats
// return
// Examples
// [4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
// []                               -->  0