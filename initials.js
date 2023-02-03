// A person's full name is usually composed of a first name, middle name and last name; however in some cultures (for example in South India) there may be more than one middle name.

// Write a function that takes the full name of a person, and returns the initials, separated by dots ('.'). The initials must be uppercase. The last name of the person must appear in full, with its first letter in uppercase as well.

// See the pattern below:

// "code wars"            ---> "C.Wars"
// "Barack hussein obama" ---> "B.H.Obama"
// Names in the full name are separated by exactly one space (' ' ) ; without leading or trailing spaces. Names will always be lowercase, except optionally their first letter.

// failed attempt
function initials(n){
  // if is last element in array, keep word just capitalize first letter
  // else slice first letter and capitalize
  // join with "."
  let last = n.split(' ').pop()
  let others = n.split(' ')
  for (let i = 0; i < others.length; i++) {
    others.charAt(0)
  }
}
// winner
function initials(n) {
  return n.split(' ').map((v, i, a) => v.charAt(0).toUpperCase() + (i == a.length - 1 ? v.slice(1) : '.')).join('');
}

initials('Barack hussain obama')
// ('code wars', 'C.Wars');
// ('Barack hussain obama', 'B.H.Obama');
// ('barack hussain Obama', 'B.H.Obama');