// Given an integer n and two other values, build an array of size n filled with these two values alternating.

function alternate(n, firstValue, secondValue){
  // new array with values alternating n times
  let newArray = []
  for (let i = 0; i < n; i++) {
    i % 2 === 0 ? newArray.push(firstValue) : newArray.push(secondValue)  
  }
  return newArray
}

alternate(5, true, false )
// number 0+, string bool or num for first and second values
// return 
// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []