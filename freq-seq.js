// Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).

// had no clue
function freqSeq(str, sep) {
  // loop through str
  // 

}

const freqSeq = (str, sep) =>
  [...str].map(val => --str.split(val).length).join(sep);

// or using for loop 

function freqSeq(str, sep) {
  
 let countedArray = [];
  let splittedSentence= str.split("");
  for(let i = 0; i < splittedSentence.length; i++){
  let result = 0;
    for(let j = 0; j <splittedSentence.length; j++){
      
      if(splittedSentence[i]===splittedSentence[j]){
        result++;
      }
      
    }
        countedArray.push(result);
    
  }
  return countedArray.join(sep);
}

freqSeq('hello world', '-')

// "hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
// "19999999"   , ":" --> "1:7:7:7:7:7:7:7"
// "^^^**$"     , "x" --> "3x3x3x2x2x1"