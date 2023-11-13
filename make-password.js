// One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

// Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):

// instead of including i or I put the number 1 in the password;
// instead of including o or O put the number 0 in the password;
// instead of including s or S put the number 5 in the password.

function makePassword(phrase) {
  // split
  // loop through each word and pull the 0 index
  // if the 0 index === i o or s, replace with 1 0 or 5 respectively
  // return password
  let password = phrase.split(' ').map((el) => el[0]).join('')
  password.replaceAll('i',)
}

// what i was going for
function makePassword(phrase) {
  let firstLetters = phrase.split(" ").map((letter)=>{
      return letter[0]   
  })
  
  let newpassword = []
  
  firstLetters.filter((letter)=>{
     
    if( letter === 'i'|| letter === "I"){
      newpassword.push(1)
    } else if(letter === 'o' || letter === "O"){
      newpassword.push(0)
    } else if(letter === 's'|| letter === "S"){
      newpassword.push(5)
    } else {
      newpassword.push(letter)
    }
  })
   return password = newpassword.join("")
}
makePassword("Give me liberty or give me death")
// string of words
// return
// makePassword("Give me liberty or give me death"), "Gml0gmd")