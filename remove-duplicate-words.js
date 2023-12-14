// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.


function removeDuplicateWords (str) {
  // new set
  let newStr = new Set(str.split((' ')))
  return Array.from(newStr).join(' ')
}

// another version
const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')

removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')
// string of words
// return

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'