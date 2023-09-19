// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

const reverseWords = (str) => str.split(' ').map((word) => word.split("").reverse().join("")).join(' ');
// split each word into array
// reverse each index
// join into string and return


// p-a string
// r-return
// "This is an example!" ==> "sihT si na !elpmaxe"
