// Write a program that outputs the top n elements from a list.

// function largest(n, array) {
//   // slice largest digits based on n
//   return array.sort((a,b)=>b-a).splice(0,n)
// }
largest(2, [7,6,5,4,3,2,1])
// (num 0+,array of ints)
// return
// largest(2, [7,6,5,4,3,2,1]) --> [6,7]

// better, no second sort
function largest(n,array){
  return array.sort((a, b) => a - b).slice(array.length-n);
}