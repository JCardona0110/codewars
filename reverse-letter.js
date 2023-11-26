// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

// failed attempt
function reverseLetter(str) {
  // sort str a-b
  // for loop if el.charCodeAt is less than 65 or more than 81 than remove it
  let reversedStr = []
  str.split('').map((el) => {
    if (el.charCodeAt() > 91 || el.charCodeAt() < 66) {
      str.split(el)
    } else {
     reversedStr.push(el) 
    }
  })

  return reversedStr.reverse().join('')
  };
  
function reverseLetter(str) {
  return str.split('').filter(element => (element >= 'a' && element <= 'z')).reverse().join('')
}


reverseLetter("ultr53o?n")
// string of letters, digits and symbols
// return
// reverseLetter("krishan"),"nahsirk")
// reverseLetter("ultr53o?n"),"nortlu")