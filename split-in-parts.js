// The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

const splitInParts = (str, partLength) => {
  let newStr = [];
  [...str].map((el) => {
    newStr.push(el.slice(0, partLength));
  }).join('')
  return newStr
}
  
  // array
  // filter then slice 0 - partLength
  // push into array in chunks
  // join and return

// a string with only letters, a number
// return
// "HelloKata", 1 --> "H e l l o K a t a"

// winner
var splitInParts1 = function(s, partLength){
  var parts = [];
  var array = s.split('');
  while(array.length) {
  	parts.push(array.splice(0,partLength).join(''));
  }
  return parts.join(' ');
}