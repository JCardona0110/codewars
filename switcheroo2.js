// write a function that takes in a string str and replaces all the letters with their respective positions in the English alphabet.

// failed attempt
function encode(str) {
  //change letters to charcodeat -65
  // return new string
  let newStr = str.split('')
  return newStr.map((el)=> el.charCodeAt()-65)
}

// best answer
const encode = str => {
  return str.replace(/[a-z]/gi, l => {
    let cc = l.charCodeAt(0);
    return cc - (cc < 97 ? 64 : 96);
  });
}

encode('codewars123$$')

// string of letters, nums and symbols
// return
// encode('abc') == '123'   // a is 1st in English alpabet, b is 2nd and c is 3rd
// encode('codewars') == '315452311819'