// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

function solve(s) {
  return [...s].filter((el)=> typeof el == 'number' ? el.reduce((acc, c)=> acc + c) : el)
};

function solve(s) {
    let max = 0
    let num = 0

    for (const c of s) {
        if ('0' <= c && c <= '9') {
            num = num * 10 + +c
            if (max < num)
                max = num
        } else {
            num = 0
        }
    }

    return max
};
(solve('gh12cdy695m1'), 695)

// string of letters and numbers
// return largest number in string
// (solve('gh12cdy695m1'), 695)