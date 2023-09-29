// You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D

// Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.

// You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.

// You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.

// If you do, return 'Clean', else return 'Cr@p'.

// Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.

function crap1(x, bags, cap) {
  if (x.includes('D')) return 'Dog!!'
  else if (x.includes('@').length <= cap) return 'Clean'
  else if (x.includes('@').length > cap) return 'Cr@p'
  
  // if x includes D then return dog
  // else if x includes more @ than cap return crap
  // else if x includes less @ than cap return clean
}

function crap(x, bags, cap){
  var yard = x.reduce( (a, b) => a.concat(b) );
  return yard.includes('D') ? 'Dog!!' : bags * cap - yard.filter( val => val === '@' ).length > 0 ? 'Clean' : 'Cr@p';
}
crap([['_','@','@','@'], ['_','_','_','@'], ['_','_','@', '_']],4,1)
// array of spaces with @ symbolizing crap, 2 ints 0+
// return Clean, crap or dog
// x=
// [[_,_,_,_,_,_]
// [_,_,_,_,@,_]
// [@,_,_,_,_,_]]

// bags = 2, cap = 2

// return --> 'Clean'

