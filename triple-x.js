// Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".


const tripleX = str => { 
    let x = str.indexOf('x')
    return x > -1 && x === str.indexOf('xxx') 
}

// string of letters 
// return bool
// tripleX("abraxxxas") → true
// tripleX("xoxotrololololololoxxx") → false
// tripleX("softX kitty, warm kitty, xxxxx") → true
// tripleX("softx kitty, warm kitty, xxxxx") → false