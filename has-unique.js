// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

const hasUniqueChars = (str)=> new Set(str).size === str.length

  hasUniqueChars('aaA1! ')
// string with all sorts of characters
// return
// ("  nAa") --> false because there are two spaces ' '
// ("abcdef") --> true
// ("aA") --> true  case - sensitivity
// ("++-") -->false  because there are two '+'