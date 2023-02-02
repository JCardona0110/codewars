// In this Kata, you will write a function doubles that will remove double string characters that are adjacent to each other.

// For example:

// doubles('abbcccdddda') = 'aca', because, from left to right:

// a) There is only one 'a' on the left hand side, so it stays.
// b) The 2 b's disappear because we are removing double characters that are adjacent.
// c) Of the 3 c's, we remove two. We are only removing doubles.
// d) The 4 d's all disappear, because we first remove the first double, and again we remove the second double.
// e) There is only one 'a' at the end, so it stays.
// Two more examples: doubles('abbbzz') = 'ab' and doubles('abba') = "". In the second example, when we remove the b's in 'abba', the double a that results is then removed.

// The strings will contain lowercase letters only. More examples in the test cases.

// Good luck!

// my trash function
function doubles(s){
  // split
  // if letter is follwed by same letter, remove both letters
  // join
  return s.split('').map((el, index) => {
    if (el === s[index + 1]) {
      s.replace(el, ' ')
    }
  })
}

// function that works
function doubles(str) {
    for (let i = 0; i < str.length; i++) {
        const currLetter = str[i];
        const nextLetter = str[i + 1];

        if (currLetter === nextLetter) {
            const beforeLetters = str.slice(0, i);
            const afterLetters = str.slice(i + 2);
            const updatedStr = beforeLetters + afterLetters;
          
            return doubles(updatedStr);
        }
    }

    return str;
}
// string of letters
// return string with adjacent double letters removed
// doubles('abbbzz'),'ab')
// doubles('zzzzykkkd'),'ykd')