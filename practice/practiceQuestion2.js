// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

//For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer.

const romanConvert =(numeral) => {
  let total = 0
  let last
  for(let i=0;i<numeral.length;i++) {
    if(numeral[i] == "I") {
      total += 1
      last = "I"
    }
    else if(numeral[i] == "V") {
      if(last == "I") {
        total += 3
      }
      else {
        total += 5
        last = "V"
      }
    }
    else if(numeral[i] == "X") {
      if(last == "I") {
        total += 8
      }
      else {
        total += 10
        last = "X"
      }
    }
    else if(numeral[i] == "L") {
      if(last == "X") {
        total += 30
      }
      else {
        total += 50
        last = "X"
      }
    }
    else if(numeral[i] == "C") {
      if(last == "X") {
        total += 30
      }
      else {
        total += 50
        last = "X"
      }
    }
  }
  return total
}

const numeral1 = "II"
const numeral2 = "IV"
const numeral3 = "IX"
const numeral4 = "VII"


// console.log(romanConvert(numeral4))


// Tyler's way:

function romanToInt(s) {
  let roman_dict = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
  };

  let int_value = 0;

  let i = 0;
  while (i < s.length) {
      if (i+1 < s.length 
      && ((s[i] === "I" && (s[i+1] === "V" || s[i+1] === "X"))
      || (s[i] === "X" && (s[i+1] === "L" || s[i+1] === "C"))
      || (s[i] === "C" && (s[i+1] === "D" || s[i+1] === "M")))) {
          int_value += roman_dict[s[i+1]] - roman_dict[s[i]];
          i += 2;
      } else {
          int_value += roman_dict[s[i]];
          i += 1;
      }
  }

  return int_value;
}

console.log(romanToInt("MCMXCIV"))
// add more here