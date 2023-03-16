// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

const greet = name => {
  let capitalizedName = name.toLowerCase()
  
  return `Hello ${capitalizedName.charAt(0).toUpperCase() + capitalizedName.slice(1)}!`

} 
// capitalize first letter
// add Hello and !

greet('JACK')
// p-string
// r-return
// e-"riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

// better
const greet1 = function(name) {
  return `Hello ${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}!`;
};

