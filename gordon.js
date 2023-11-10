// Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

// Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

// Rules:

// Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.

function gordon(a) {
  // all letters to uppercase
  // every word ends with '!!!!'
  // letter a should become @ 
  // all other vowels become *
  let str = a.toUpperCase().replaceAll('A', '@').replace(/[eiou]/gi, '*')
  return str.split(' ').map((el)=> el + '!!!!').join('')

}

gordon('What feck damn cake');
// string of letters
// return
// ('What feck damn cake'), 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!');