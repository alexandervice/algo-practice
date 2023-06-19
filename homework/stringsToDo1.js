// Remove Blanks
// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"
// ****** Notes ******
// string = "test str in g"
// console.log(string.replace(/ /g,""))
// need to add each letter that is not a blank to the new string

const removeBlanks = (string) => {
  let newString =""
  for(let i=0; i<string.length;i++) {
    if(string[i] !== " ") {
      newString = newString.concat("", string[i])
    } 
  }
  return newString
}

// with the replace method
const removeBlanks2 = (string) => { 
  let newString = string.replace(/ /g,"");
  // need to use /stringToRemove/g instead of (" ", "") which will only remove the first space
  return newString
}

// console.log(removeBlanks2(" Pl ayTha tF u nkyM usi c "))
// console.log(removeBlanks2("I can not BELIEVE it's not BUTTER"))
//______________________________________________________________________________

// Get Digits
// getDigits("abc8c0d1ngd0j0!8") => 801008
// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680
// ****** Notes ******


// with Number()
const getDigits = (string) => { 
  let newString =""
  for(let i=0; i<string.length;i++) {
    if(Number(string[i]) || string[i] == 0) {
      newString = newString.concat("", string[i])
    } 
  }
  console.log(isNaN(1))
  return newString
}

// with isNaN()
const getDigits2 = (string) => { 
  let newString =""
  for(let i=0; i<string.length;i++) {
    if(!isNaN(string[i])) {
      newString = newString.concat("", string[i])
    } 
  }
  return newString
}

// console.log(getDigits2("abc8c0d1ngd0j0!8"))
// console.log(getDigits2("0s1a3y5w7h9a2t4?6!8?0"))
//______________________________________________________________________________

// Acronyms
// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW"
// acronym("Live from New York, it's Saturday Night!") => "LFNYISN"

// const acronym = (string) => { 
//   let newString = ""
//   if(string[0] != " ") {
//     newString = newString.concat("", string[0].toUpperCase())
//   }
//   for(let i=1; i<string.length;i++) {
//     if(string[i] == " " && string[i+1] !== null) {
//       newString = newString.concat("", string[i+1].toUpperCase())
//     } 
//   }
//   return newString
// }

const acronym = (string) => { 
  let newString = ""
  let words = string.split(" ")
  // if(words[0] != " ") {
  //   newString = newString.concat("", string[0].toUpperCase())
  // }
  for(let i=0; i<words.length;i++) {
    if(words[i] == "") {} 
    // else if(!isNaN(words[i])) {
    //   newString = newString.concat("", words[i][0])
    // } 
    else if(words[i][0].toUpperCase()) {
      newString = newString.concat("", words[i][0].toUpperCase())
    }
  }
  return newString
}

// console.log(acronym(" there's no free lunch - gotta pay yer way. "))
// console.log(acronym("Live from New York, it's Saturday Night!"))
// console.log(acronym("  Easy as 1 two 3 !!"))
//______________________________________________________________________________

// Count Non-Spaces
// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11

const countNonSpaces = (string) => { 
  let count = 0
  for(let i=0; i<string.length;i++) {
    if(string[i] !== " ") {
      count++
    } 
  }
  return count
}

// console.log(countNonSpaces("Honey pie, you are driving me crazy"))
// console.log(countNonSpaces("Hello world !"))
//______________________________________________________________________________

// Remove Shorter Strings
// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']




const removeShorterStrings = (arr, value) => { 
  let newArr = []
  for(let i=0; i<arr.length;i++) {
    if(arr[i].length >= value) {
      newArr.push(arr[i])
    } 
  }
  return newArr
}

// console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))
// console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3))
