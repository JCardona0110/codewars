// Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?

// "Dont use that weird spongebob mocking meme" Me: DonT uSe thAt WeIrd SpoNgEboB MoCkinG MEme

// You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

function spongeMeme(sentence) {
  // map through letters of string
  // if index is even then to uppercase
  // if index is odd then to lowercase
  return sentence.split('').map((el, index) => index % 2 === 0 ? el.toUpperCase() : el.toLowerCase()).join('')
}

// also mine, not using large methods
function spongeMeme(sentence) {
  // map through letters of string
  // if index is even then to uppercase
  // if index is odd then to lowercase
  let newString = []
  for (let i = 0; i < sentence.length; i++){
    if (i % 2 === 0) {
      newString += sentence[i].toUpperCase()
    } else {
      newString += sentence[i].toLowerCase()
    }
  }
  return newString
}

spongeMeme("stop Making spongebob Memes!")

// string of letters
// return
// input:  "stop Making spongebob Memes!"
// output: "StOp mAkInG SpOnGeBoB MeMeS!"
