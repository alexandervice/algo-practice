// Push Front
// pushFront([5,7,2,3], 8) => [8,5,7,2,3]
// pushFront([99], 7) => [7,99]
// ****** Notes ******
// easiest to create a new array and then push each value from arr into it

const pushFront = (arr, val) => {
  if(arr.length == 0) {
    return [val]
  }
  let newArr = [val]
  for(let i=0; i<arr.length; i++) {
    newArr.push(arr[i])
  }
  return newArr
}
// console.log(pushFront([5,7,2,3], 8))
// console.log(pushFront([99], 7))
//______________________________________________________________________________

// Pop Front
// popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
// popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function
// ****** Notes ******
// easiest to create a new array and then push each value from arr into it starting at i = 1

const popFront = (arr) => {
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
// Insert At
// insertAt([100,200,5], 2, 311) => [100,200,311,5]
// insertAt([9,33,7], 1, 42) => [9,42,33,7]

const insertAt = (arr, index, val) => {
  if(arr.length < index) {
    return "error"
  }
  let newArr = []
  for(let i=0; i<arr.length; i++) {
    if(i == index) {
      newArr.push(val)
    }
    newArr.push(arr[i])
  }
  return newArr
}

// console.log(insertAt([100,200,5], 2, 311))
// console.log(insertAt([9,33,7], 1, 42))

//______________________________________________________________________________
// BONUS: Remove At
// removeAt([1000,3,204,77], 1) => 3 returned, with [1000,204,77] printed in the function
// removeAt([8,20,55,44,98], 3) => 44 returned, with [8,20,55,98] printed in the function

const removeAt = (arr, index) => {
  let newArr = []
  for(let i=0; i<arr.length; i++) {
    if(i == index) {
      
    }
    else {
      newArr.push(arr[i])
    }
  }
  console.log(newArr)
  return arr[index]
}

// console.log(removeAt([1000,3,204,77], 1))
// console.log(removeAt([8,20,55,44,98], 3))

//______________________________________________________________________________
// BONUS: Swap Pairs
// swapPair([1,2,3,4]) => [2,1,4,3]
// swapPair(["Brendan",true,42]) => [true,"Brendan",42]

const swapPair = (arr) => {
  // if( arr.length % 2 == 0) {
    for(let i=0; i<arr.length; i+=2) {
      if(arr[i+1] != null) {
        temp = arr[i];
        arr[i] = arr[i+1]
        arr[i+1] = temp
        // console.log(arr)
      }
    }
    return arr
  // }
}

// console.log(swapPair([1,2,3,4]))
// console.log(swapPair(["Brendan",true,42]))

//______________________________________________________________________________
// BONUS: Remove Duplicates
//removeDupes([-2,-2,3.14,5,5,10]) => [-2,3.14,5,10]
//removeDupes([9,19,19,19,19,19,29]) => [9,19,29]

const removeDupes = (arr) => {
  // let map = {0: arr[0]}
  let newArr = [arr[0]]
  for(let i=1; i<arr.length; i++) {
    if(newArr.includes(arr[i])) {
      // console.log(arr[i])
    } else {
      newArr.push(arr[i])
    }
  }
  return newArr
}

console.log(removeDupes([-2,-2,3.14,5,5,10]))
console.log(removeDupes([9,19,19,19,19,19,29]))

