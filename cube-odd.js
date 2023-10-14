// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
// close to working, couldnt figure out what to do with positive nums
function cubeOdd(arr) {
  return arr.reduce((sum, num)=> typeof num !== 'number'? 'undefined': num % 2 !== 0 ? sum + (num * num * num) : '')
}

// better answer
var cubeOdd = arr => arr.some(x => +x !== x) ? undefined : arr.filter(x => x % 2 != 0).reduce((s, x) => s + x ** 3, 0);


// cubeOdd(['a', 1, 3])

// ints and non ints
// return
// () --> 28