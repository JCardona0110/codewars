// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// sconst filter_list = (l) => l.filter(Number.isInteger);

// better way since is more what is asked for
const filter_list = (l) => l.filter((c) => typeof c !== 'string');
