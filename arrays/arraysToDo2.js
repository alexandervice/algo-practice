// Reverse
let arr1 = [5,7,2,3,14,4,2]        // [2,4,14,3,2,7,5]
let arr2 = [1,5,8,10,3,2]          // [2,3,10,8,5,1]
let arr3 = ["a", "b", "c", "d"]    // ["d", "c", "b", "a"]
// ****** Directions ******
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second array – move values within the array that you are given. As always, do not use built-in array functions such as splice().


const reverse = (arr) => {
  if(arr.length == 1) {
    return arr
  }
  let left = 0
  let right = arr.length-1

  while(left < right) {
    const temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
    left ++
    right --
  }
  return arr
}
// console.log("Reverse")
// console.log(reverse(arr1))
// console.log(reverse(arr2))
// console.log(reverse(arr3))

//______________________________________________________________________________

// Rotate

// ****** Directions ******
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: 
// given ([1,2,3],1), change the array to [3,1,2]. Don't use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.

// examples: given arr[1,2,3]
// shiftBy = 1
// arr = [3,1,2]
// shiftBy = 2
// arr = [2,3,1]
// shiftBy = 3
// arr = [1,2,3]
// shiftBy = -1
// arr = [2,3,1]
// shiftBy = -2
// arr = [3,1,2]
// shiftBy = -3
// arr = [1,2,3]


// case 1 - arr = [1]
// case 2 - shiftBy is same length as the array - arr[1,2,3] shiftBy = 3





const rotateArr = (arr, shiftBy) => {
  let trueShift = shiftBy
  if(arr.length == 1 || shiftBy % arr.length == 0) {
    return arr
  }
  if(shiftBy > arr.length || shiftBy*-1 > arr.length) {
    trueShift = shiftBy % arr.length
  }
  // move to the right
  if(trueShift > 0) {
    for(let i=0; i<trueShift; i++) {
      let last = arr[arr.length-1]
      for(let j=arr.length-1; j > 0;j--) {
        arr[j] = arr[j-1]
      }
      arr[0] = last
    }
    return arr
  } 
  // move to the left
  else {
    for(let i=0; i<trueShift*-1; i++) {
      let first = arr[0]
      for(let j=0; j < arr.length-1;j++) {
        arr[j] = arr[j+1]
      }
      arr[arr.length-1] = first
    }
    return arr
  }
}

let arr4 = [1,2,3,4]
// console.log(arr4)
// console.log(rotateArr(arr4, 5))
// console.log(rotateArr(arr4, -6))
// console.log(rotateArr(arr2, 2))
// console.log(rotateArr(arr2, -2))
// console.log(rotateArr(arr3, 1))


//______________________________________________________________________________

// Filter Range

// ****** Directions ******
// Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.


// it would be easy to do this with a new array, but I have to figure it out without that

const filterRange = (arr, min, max) => {
  let j = 0

  for(let i=0; i<arr.length; i++) {
    if(arr[i] >= min && arr[i] <= max) {

    } else{
      arr[i] = null
    }
  }
  return arr
}

let arr5 = [4,2,6,1,8,3,9,5,7]
console.log(filterRange(arr5, 3, 6))
// console.log(popFront([4,5,7,9]))

//______________________________________________________________________________

// Concat1
// popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
// popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function
// ****** Notes ******
// easiest to create a new array and then push each value from arr into it starting at i = 1

const concat1 = (arr) => {
  let newArr = []
  for(let i=1; i<arr.length; i++) {
    newArr.push(arr[i])
  }
  console.log(newArr)
  return arr[0]
}
// console.log(popFront([0,5,10,15]))
// console.log(popFront([4,5,7,9]))

//______________________________________________________________________________