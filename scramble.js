// Given a string and an array of index numbers, return the characters of the string rearranged to be in the order specified by the accompanying array.

// Ex:

// scramble('abcd', [0,3,1,2]) -> 'acdb'

// The string that you will be returning back will have: 'a' at index 0, 'b' at index 3, 'c' at index 1, 'd' at index 2, because the order of those characters maps to their corresponding numbers in the index array.

// In other words, put the first character in the string at the index described by the first element of the array

// You can assume that you will be given a string and array of equal length and both containing valid characters (A-Z, a-z, or 0-9).

function scramble(str, arr) {
  // let newStr
  // loop through str and push to newStr based on index in arr 
  let newStr = []
  for (let i = 0; i < str.length; i++){
    // newStr.push(newStr.splice(arr[i], str[i]))
    newStr.push(str[arr.indexOf(i)])
  }
  return newStr.join('')
};


// another way using map
const scramble2 = (str, arr) =>
  arr.map((_, idx) => str[arr.indexOf(idx)]).join(``);

scramble2('sc301s', [4, 0, 3, 1, 5, 2])

// string of nums and letters, array of nums 0+
// return
// scramble('abcd', [0,3,1,2]), 'acdb';
// scramble('sc301s', [4,0,3,1,5,2]), "c0s3s1"