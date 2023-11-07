// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

// Note: the scores will always be unique (so no duplicate values)

// my attempt
// function myLanguages(results) {
//   // map through and grab languages with score over 60
//   // return as array in descending order
//   return Array.from(results).map((el) => el.Object.values > 60 ? results.sort((a, b) => b - a) : el)
// }

// proper way
function myLanguages(results) {
  return Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);
}

myLanguages( {"Java": 10, "Ruby": 80, "Python": 65} )
// object with language as key and number as score 
// return
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
