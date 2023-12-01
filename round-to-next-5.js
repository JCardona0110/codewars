// Given an integer as input, can you round it to the next(meaning, "greater than or equal") multiple of 5 ?

function roundToNext5(n){
  // round the int
  return Math.ceil(n/5) *5
}
roundToNext5(3)
// single int pos or neg
// return
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25