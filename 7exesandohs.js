// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// my attempt, no work
// const XO = (str) =>
// str.split('x'.toUpperCase).length - 1 ===
// str.split('o'.toUpperCase).length - 1;

//what i was going for

const XO = (str) =>
	str.toLowerCase().split('x').length == str.toLowerCase().split('o').length;
