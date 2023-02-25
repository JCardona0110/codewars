// function minValue(values){
//   let noDuplicateValues = []
//   values.forEach((num) => {
//    if( !noDuplicateValues.includes(num)) noDuplicateValues.push(num)
//   })
//   return noDuplicateValues.sort().join('')
// }
minValue([1, 3, 1])

// using Set
function minValue(values){
  return ~~[...new Set(values)].sort().join('')
}
// array of nums
// return 
// ([1, 3, 1]) --> 13
// ([4, 7, 5, 7]) --> 457
// ([4, 8, 1, 4]) --> 148