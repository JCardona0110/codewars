// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.

// my attempt
function bingo(a) {
  // bingo is 66, 73, 78, 71, 79 -65
  // map through and if charcodeat -65 is right for all bingo letters than win
  // else lose
  let bingoNumbers = []
  a.map((num) => {
    if (num + 65 === 73 || num + 65 === 78 || num + 65 === 71 || num + 65 === 79 || num + 65 === 66) {
      bingoNumbers.push(num)
    }
  })
  if (bingoNumbers.some(i => bingoNumbers.includes([2, 8, 13, 14, 6]))) return "WIN"
  else return "LOSE"
}
// oof
const bingo = arr => [2, 7, 9, 14, 15].every(el => arr.includes(el)) ? 'WIN' : 'LOSE'



// array 10 nums from 1-26
// return WIN or LOSE
// bingo([1,2,3,4,5,6,7,8,9,10], "LOSE");
bingo([21,13,2,7,5,14,7,15,9,10], "WIN");