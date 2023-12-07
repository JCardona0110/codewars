
// Complete the solution so that the function will break up camel casing, using a space between words.


function solution(string) {
  let newString = string.split('').map(element => {
    if (element === element.toUpperCase()) {
      element = ' ' + element
    }
    return element
  });   
  return newString.join('')
}
solution('camelCase')
// string of letters
// return as string with space between words
// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""