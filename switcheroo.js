// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// function switcheroo(x) {
//   let newString = [...x].map((el) => {
//     if (el === 'a') return 'b'
//     else if (el === 'b') return 'a'
//     else if (el === 'c') return 'c'
//   })
//   return newString.join('')
// }
// or
function switcheroo(x) {
  return [...x].map((el) => {
    if (el === 'a') return 'b'
    else if (el === 'b') return 'a'
    else if (el === 'c') return 'c'
  }).join('')
}

  // switch a to b
	// switch b to c
	// return


switcheroo("aabcc");
// string of letter abc
// return
// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'
