// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.


// trash
function solve(arr) {
	// loop through array
  // if i === the another number in array, remove i 
  for (let i = 0; i < arr.length; i++){
    if (arr.indexOf(i) === arr.lastIndexOf(i)) {
      arr.toString().split(i).join('')
    }
    return arr
  };

}

// good
function solve(arr){
    return arr.filter((val,i) => arr.lastIndexOf(val) == i);
}
// another one 
const solve = arr => [...new Set(arr.reverse())].reverse()

solve([3, 4, 4, 3, 6, 3])

const sumContiguousArray = function (arr) {
  // get last item
  const lastItem = arr[arr.length - 1]
  // Gauss's trick
  return lastItem * (lastItem + 1) / 2
}
// array of nums
// return
// Example:
// For input: [3, 4, 4, 3, 6, 3]

// remove the 3 at index 0
// remove the 4 at index 1
// remove the 3 at index 3
// Expected output: [4, 6, 3]