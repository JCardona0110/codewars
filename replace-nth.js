// Write a method, that replaces every nth char oldValue with char newValue.

// Inputs
// text: the string to modify
// n: change the target letter every nth occurrencies
// old_value (or similar): the targetted character
// new_value (or similar): the character to use as replacement
// Note for untyped languages: all inputs are always valid and of their expected type.

// Rules
// Your method has to be case sensitive!
// If n is 0 or negative or if it is larger than the count of the oldValue, return the original text without a change.

// my failed attempt
// function replaceNth(text, n, oldValue, newValue) {
//   // for loop through text
//   // if n is 0 or neg, return original text
//   // find occurrences of oldValue 
//   // if oldValue % nth === 0 then replace with newValue
//   // return new string
//   let newText = text.split('')
//   for (let i = 0; i < text.length; i++){
//     if(n === 0 || n < 0) return text  
//     if (newText[i] === oldValue && text.indexOf(oldValue + n)) {
//       text.replace('oldValue', 'newValue')
//     }
//   }
// }

// proper answer
function replaceNth(text, n, oldValue, newValue) {
  
  const array = text.split(""); // text = ["V","a","d","e","r","","s".....] Arrays of strings (each string is a character)
  let counter = 1; // variable to keep track of every nth occurrencies
  
  for(let i = 0; i < array.length; i++){
    if(array[i] == oldValue && counter == n){
      array[i] = newValue;
      counter = 1;  // if we find the oldValue and counter matches nth occurrencies, swap oldValue by newValue and reset counter!
    }
    if(array[i] == oldValue && counter != n){
      counter++;  // if we find the oldValue but our counter does not match nth occurrencies, increment counter until matches it!
    }
  }
 
  return array.join(""); // just need to convert the array of strings to whole string :)
} 

replaceNth("Vader said: No, I am your father!", 2, 'a', 'o')
// string of letters, a number, 2 strings of a single letter
// return 
// (replaceNth("Vader said: No, I am your father!", 2, 'a', 'o'), "Vader soid: No, I am your fother!");
// (replaceNth("Vader said: No, I am your father!", 4, 'a', 'o'), "Vader said: No, I am your fother!");