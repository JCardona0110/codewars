// The borrowers are tiny tiny fictional people. As tiny tiny people they have to be sure they aren't spotted, or more importantly, stepped on.

// As a result, the borrowers talk very very quietly. They find that capitals and punctuation of any sort lead them to raise their voices and put them in danger.

// The young borrowers have begged their parents to stop using caps and punctuation.

// Change the input text s to new borrower speak. Help save the next generation!

function borrow(s) {
  // remove punctuation and spaces
  // toLowerCase
  let newS = s.toLowerCase().replace(/[^a-z0-9]/gi, '')
  return newS
}

borrow('WhAt! FiCK! DaMn CAke?')

// string of letters
// return string without punctuation and capitals
// borrow('WhAt! FiCK! DaMn CAke?'), 'whatfickdamncake')