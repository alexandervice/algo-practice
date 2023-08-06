// Given a string s consisting of lowercase English letters, return the first letter to appear twice.

// Note:
// A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
// s will contain at least one letter that appears twice.

// define a map (dictionary)
// loop through each letter in the string
// add it to the map
// if the string is already in the map stop the loop and return that string

const returnDoubleLetter = (s) => {
  let letters = {}
  for(let i = 0; i<s.length;i++) {
    if(s[i] in letters) {
      return s[i]
    }
    letters[[s[i]]] = 1
  }
}

const s1 = "abcedfgg"
const s2 = "abccbaacz"

console.log(returnDoubleLetter(s2))