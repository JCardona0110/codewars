// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

const isIsogram = (str) => new Set(str.toUpperCase()).size == str.length;
// found online. new Set is a new constructor with .size returning the number of unique elements in the set. so after capitalizing the set, we get the size and if it equals the length of the str then we get true that it is an isogram.
