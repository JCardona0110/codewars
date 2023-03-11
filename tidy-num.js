// A Tidy number is a number whose digits are in non-decreasing order.

// Task
// Given a number, Find if it is Tidy or not.

// Notes
// Number passed is always Positive .

// Return the result as a Boolean

function tidyNumber(num) {
  let sorted = num.toString().split('').sort((a, b) => a - b).join('')
  return ~~sorted === num 
  // to array
  // sort in ascending order
  // compare
  // return bool
}
tidyNumber(1254)

// positive ints
// return bool
// tidyNumber (32) ==> return (false)
// tidyNumber (12) ==> return (true)
